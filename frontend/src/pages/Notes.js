import React, { useReducer } from 'react';
import { Route,Switch } from 'react-router-dom';

import Note from '../components/Notes/Note/Note';
import NoteList from '../components/Notes/NoteList/NoteList';
import SideNavbar from '../components/Notes/SideNavbar/SideNavbar';
import { NotesContext } from '../context/context';
import NoteReducer from '../reducer/NoteReducer';
const initialState=[];

const Notes = () => {
    const [notes, notesDispatch] = useReducer(NoteReducer, initialState);
  return (
    <>
    
    <NotesContext.Provider value={{notesState: notes,notesDispatch}}>
    <div className="EvernoteClone">
      <SideNavbar/>
     
      <Route path="/notes/all-notes">
        <NoteList title="All Notes"/>
          <Route path="/notes/all-notes/:id">
            <Note/>
           </Route>
       </Route>
            <Route path="/notes/trash">
              <NoteList title="Trash"/>
              <Route path="/notes/trash/:id">
                <Note/>
              </Route>
            </Route>
          
          
   </div>
      </NotesContext.Provider>
      </>
      
  )
}

export default Notes