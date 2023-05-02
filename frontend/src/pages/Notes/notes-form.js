import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:props.title?props.title:'',
            desc:props.desc?props.desc:'',
            category:props.category?props.category:'',
           
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            'title': this.state.title,
            'desc' : this.state.desc,
            'category':this.props.category.find((ele)=>ele._id===this.state.category),
           
        }
        this.props.submit(formData)
        console.log('formdata',formData)
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log([e.target.name],e.target.value,this.state)
        
    }
    render(){
        return (
        
            
            <form onSubmit={this.handleSubmit}>
            <div className="form-group my-3">
             <b> <label className="my-3" htmlFor="exampleInputEmail1">Title :</label></b>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title" name='title' onChange={this.handleChange} value={this.state.title}/>
            </div>
            <div className="form-group my-3">
              <b><label className="my-3" htmlFor="exampleInputPassword1">Description :</label></b>
              <textarea className="form-control" id="exampleInputPassword1" placeholder="Desc" name='desc' onChange={this.handleChange} value={this.state.desc}/>
            </div>
            <div className="form-group my-3">
                <b><label className="my-3" htmlFor="exampleFormControlSelect1">Category</label></b>
                <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleChange} name='category'>
                <option>Select</option>
                {this.props.category.map((ele)=>{
                    return <option key={ele._id}  value={ele._id} >{ele.name}</option>
                })}
                
                </select>
                
            </div>
           
            
            
            <button type="submit" className="btn btn-primary my-3" value='Add Note' onClick={this.handleSubmit}>Add Note</button>
            <br/>
            <Link to="/notes/category" className="btn btn-primary " tabIndex="-1" role="button" >Add Category</Link>
            </form>
        
        )
        
    }
}

const mapStateToProps=(state)=>{
    return({
        category:state.category
    })
}
export default  connect(mapStateToProps)(Form)