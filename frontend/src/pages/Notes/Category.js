import React from 'react'
import {connect} from 'react-redux'
import { startRemoveCategory, startPostCategory } from '../../utils/category-action'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

class Category extends React.Component{
    constructor(props){
        super(props)
        this.state={
            category:''
        }
    }
     handleRemove=(e)=>{
        const target = e.target.value;
         console.log(target)
         this.props.dispatch(startRemoveCategory(target))
     }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata = {
            name:this.state.category
        }
        this.props.dispatch(startPostCategory(formdata))
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return (
            <>
            <Navbar/>
            <div className='text-center'>
                <br/>
                <b><h2>Category - {this.props.category.length}</h2></b>
                <br/>
                <ul className="list-group" style={{width:'50%',margin:'auto 25%'}}>
                            {
                                this.props.category.map(ele=>{
                                    return <li  className="list-group-item " key={ele._id}>{ele.name}
                                        <button className='float-end btn btn-sm btn-danger mx-3' value={ele._id} onClick={this.handleRemove}>Remove</button>
                                    </li>
                                })
                            }
                            <br/>
                            </ul>
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <b><label style={{fontSize:'20px'}} htmlFor='name' className="mx-3">Category Name:</label></b>
                        <input style={{height:'40px'}} type='text'  id='name' onChange={this.handleChange} placeholder="Enter Category" name='category' value={this.state.category} />  
                        <button style={{margin:'auto 1% '}} type='button submit' className='btn btn-md btn-primary'>Add</button>
                    </div>
                    </form>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}

const stateMapToProps = (state,props)=>{
    return({
        category:state.category
    })
}

export default connect(stateMapToProps)(Category)