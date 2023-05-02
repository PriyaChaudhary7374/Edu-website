import React from 'react'
import Form from './notes-form'
import { connect } from 'react-redux'
import { startEditNotes } from '../../utils/notes-action'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

class NotesEdit extends React.Component {
    constructor(props){
        super(props)
    }
    handleSubmit=(data)=>{
        const id = this.props.match.params.id
        console.log(data)
        console.log(this.props)
        this.props.dispatch(startEditNotes(id,data))
        window.location.href='/notes'
    }
    render(){
        
        return (
            <>
            <Navbar/>
            <div>
                <br/>
                <h2 className='text-center'>Edit</h2>
                <hr/>
                <div style={{width:'60%',margin:'auto 20%'}}>
                    <Form  {...this.props.note} submit={this.handleSubmit}/>
                </div>
                
            </div>
            <Footer/>
            </>
        )
    }
}

const stateMapToProps = (state,props)=>{
   console.log(state)
    return({
        note:state.notes.find(note=>note._id==props.match.params.id)
    })
}

export default connect(stateMapToProps)(NotesEdit)