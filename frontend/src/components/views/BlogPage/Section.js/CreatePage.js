import React, { useEffect, useState } from 'react'

import QuillEditor from '../../../Editor/QuillEditor';
import { Typography, Button, Form, message } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import  Footer  from '../../../Footer/Footer'
import Navbar from '../../../Navbar/Navbar'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
const { Title } = Typography;

function CreatePage(props) {
    const user = useSelector(state => state.user);
    const location=useLocation();
  
    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])
    const categoryName = new URLSearchParams(location.search).get('cat');

    const onEditorChange = (value) => {
        setContent(value)
        console.log(content)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }

    const onSubmit = (event) => {
        console.log("hel")
        event.preventDefault();

        setContent("");
          
        
        const variables = {
            content: content,
        }
        

        axios.post(`http://localhost:2000/api/createPost/?cat=${categoryName}`,variables,{
            headers:{
                'auth-token':localStorage.getItem('token')
            } 
        })
            .then(response => {
                if (response) {
                    console.log(response)
                    message.success('Post Created!');

                    setTimeout(() => {
                        props.history.push(`/textbook/?cat=${categoryName}`)
                    }, 2000);
                }
                else{
                    console.log(response.err);
                }
            })
    }
    
   


    return (
        <>
        <Navbar/>
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <Title level={2} > Editor</Title>
            </div>
            <QuillEditor
                placeholder={"Start Posting Something"}
                onEditorChange={onEditorChange}
                onFilesChange={onFilesChange}
            />

            <Form onSubmit={onSubmit}>
                <div style={{ textAlign: 'center', margin: '2rem', }}>
                    <Button
                        size="large"
                        htmlType="submit"
                        className=""
                        onClick={onSubmit}>
                        ADD
                </Button>
                </div>
            </Form>
        </div>
        <Footer/>
        </>
    )
}

export default CreatePage