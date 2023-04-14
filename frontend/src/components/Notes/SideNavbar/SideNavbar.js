import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch, faPlus, faStar, faStickyNote, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons'

import './SideNavbar.css';
import { NavLink, useHistory } from 'react-router-dom'
import { postRequest } from '../../../utils/apiRequests.js';
import { BASE_URL, CREATE_NOTE } from '../../../utils/apiEndpoints.js';
import { NotesContext } from '../../../context/context';
import {memo} from "react";

const SideNavbar = () => {
    const notesContext = useContext(NotesContext);
    const history = useHistory();
    const [error, setError] = useState(null);

    const handleCreateNote = async () => {
        const response = await postRequest(`${BASE_URL}${CREATE_NOTE}`,);
        console.log(response);
        if (response.error) {
            setError(response.error);
            return false;
        }
        if(response._id){
            notesContext.notesDispatch({ type: 'createNoteSuccess', payload: response })
            history.push(`/notes/all-notes/${response._id}`,{note:response})
        }

    }

    return (
        <div className="sidenavbar">
            <div className="sidenavbar-top">
                <div className="sidenavbar-top__profile">
                    <div className="profile-icon">
                        A
                    </div>
                    <div className="profile-title">
                        Akhil Goplani
                        <FontAwesomeIcon className="icon" icon={faAngleDown} />
                    </div>
                </div>
                
                <div className="sidenavbar-top__create-note">
                    <div className="create-note-btn" onClick={handleCreateNote}>
                        <FontAwesomeIcon className="icon" icon={faPlus} />
                        <div className="title">
                            New Note
                        </div>
                    </div>
                </div>
                <div className="sidenavbar-top__menu-item">
                    <ul>
                       
                        <li>
                            <NavLink to="/notes/all-notes">
                                <FontAwesomeIcon className="icon" icon={faStickyNote} /> All Notes
                            </NavLink>
                        </li>
                       
                        <li>
                            <NavLink to="/notes/trash">
                                <FontAwesomeIcon className="icon" icon={faTrash} /> Trash
                            </NavLink>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default memo(SideNavbar)
