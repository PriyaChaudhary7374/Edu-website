import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Col, Typography, Row } from 'antd';
import {EllipsisOutlined, SettingOutlined,EditOutlined, DeleteOutlined} from '@ant-design/icons';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const { Title } = Typography


function BlogPage() {

    const [blogs, setBlogs] = useState([])

    const deletePost=async(id) => {
        // API Call
       await axios.delete(`http://localhost:2000/api/removePost/${id}`, {
        
          headers: { 
           
            "auth-token": localStorage.getItem('token')
          }
        }).then(response => {
                if (response.data.success) {
                    const newBlogs = blogs.filter((blogs) => { return blogs._id !== id })
                    setBlogs(newBlogs);
                } else {
                    alert('Couldnt remove')
                }
            })
       
      }

    useEffect(() => {
        axios.get('http://localhost:2000/api/getBlogs',{
            headers:{
                'auth-token':localStorage.getItem('token')
            } 
        },)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.blogs)
                    setBlogs(response.data.blogs)
                } else {
                    alert('Couldnt get blog`s lists')
                }
            })
    }, [])

    const renderCards = blogs.map((blog, index) => {
        return <Col key={index} lg={8} md={12} xs={24}>
            <Card
                hoverable
                style={{ width: 370, marginTop: 16 }}  
                actions={[
                    <DeleteOutlined style={{fontSize:'30px'}} onClick={()=>deletePost(blog._id)}/>,

                    <a href={`/post/${blog._id}`}> <EllipsisOutlined style={{fontSize:'30px'}} /></a>,
                ]}
            >
               
                <div style={{ height: 150, overflowY: 'scroll', marginTop: 10 }}>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
            </Card>
        </Col>
    })

    return (
        <>
        <Navbar/>
        <div style={{ width: '85%', margin: '3rem auto' }}>
        <h1 style={{textAlign:"center"}}> Y O U R&nbsp;&nbsp;&nbsp;&nbsp;T E X T B O O K</h1> 
            <div style={{display:'flex',justifyContent:'space-between'}}>
           
          
             <Title level={2}> Chapters </Title>
            <button className="btn btn-lg btn-primary btn-outline-light my-3 mnb">
          <Link to="/create" className="abcde">Create New Chapter</Link>
              </button>
              </div>
        
            <Row gutter={[32, 16]}>
                {renderCards}
            </Row>
        </div>
        <Footer/>
        </>
    )
}

export default BlogPage

