import axios from 'axios'

export const setNotes = (notes)=>{
    return{type:'SET_NOTES',payload:notes}
}
export const postNotes = (notes)=>{
    return {type:'POST_NOTES',payload:notes}
}
export const editNotes = (notes)=>{
    return {type:'EDIT_NOTES',payload:notes}
}
export const deleteNotes = (notes)=>{
    return {type:'DELETE_NOTES',payload:notes}
}

export const startGetNotes = (dispatch)=>{
    return(dispatch)=>{
        axios.get('http://localhost:2000/api/notes',{
            headers:{
                'auth-token':localStorage.getItem('token')
        }})
            .then(res=>{
                const notes = res.data
                dispatch(setNotes(notes))
               
            })
            .catch(err=>alert(err))
    }
}
export const startPostNotes = (formdata)=>{
    console.log(formdata)
    return(dispatch)=>{
        axios.post('http://localhost:2000/api/notes',formdata,{
            headers:{
                'auth-token':localStorage.getItem('token')
        }})
            .then(res=>{
                const notes = res.data
                dispatch(postNotes(notes))
            })
            .catch(err=>alert(err))
    }
}

export const startDeleteNotes = (id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:2000/api/notes/${id}`,{
            headers:{
                'auth-token':localStorage.getItem('token')
            }
        })
            .then(res=>{
                const notes = res.data
                dispatch(deleteNotes(notes))
            })
            .catch(err=>alert(err))
    }
}
export const startEditNotes = (id,formdata)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:2000/api/notes/${id}`,formdata,{
            headers:{
                'auth-token':localStorage.getItem('token')
            }
        })
            .then(res=>{
                const notes = res.data
                dispatch(editNotes(notes))
            })
            .catch(err=>alert(err))
    }
}