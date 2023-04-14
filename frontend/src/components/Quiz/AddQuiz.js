import React, { useContext, useRef } from "react";
import { useState } from "react";
import quizContext from "../../context/quizContext";
import {Link, useLocation} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const AddQuiz = () => {
  const context = useContext(quizContext);
  const { addQuiz, editCode } = context;
  const location=useLocation();



  // const [user, setUser] = useState({ user: ""})

  // const getUser = (currentUser) => {
  //   ref.current.click();
  //   setUser({
  //     user :currentUser.user,
  //   })
  


  const [quiz, setQuiz] = useState({
    id: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    title: "",
    code:""
  });
  const handleClick = (e) => {
    e.preventDefault(); //page doesn't get reload

    addQuiz(
      quiz.question,
      quiz.option1,
      quiz.option2,
      quiz.option3,
      quiz.option4,
      quiz.answer,
      quiz.title,
      code
    );
    setQuiz({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
      title: "",
     
      
    });
   // props.showAlert("Added Successfully", "success");
  };

  // const ref = useRef(null);
  // const refClose = useRef(null);

  var code;
  const [gcode, setGcode] = useState("")


const test = () =>{
  // generate code
  toast.success("Quiz published Successfully. Copy the code and share with your friends")
  const publish = ()=>{
    var len = 6;
    var arr = "1234567890qwertyuiopasdfghjklzxcvbnm"
    var ans= "";
    for (var i = len; i > 0; i--) {
			ans+=
			arr[Math.floor(Math.random() * arr.length)];
		}
    console.log(ans);
    
    code = ans;
    console.log(code, "CODE");
    setGcode(code);
  }
  publish();
  // console.log(code, "OUTSIIDE");


  // add code to the questions
  const editTESTCode =()=>{
    //console.log('updating quiz...', quiz);
    editCode( code )
    console.log(code, "INSIDE EDITCODE")
   // props.showAlert("Quiz Published Successfully... Copy the code and share with your friends to play the quiz!!", "success");
  }
  editTESTCode()

}
  



  const onChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value }); 
  };
  return (
    <div>
      <div className="container my-3">
        <ToastContainer/>
       
        <h2>Add your Quiz</h2> 
        <Link to="/playquiz" className="btn btn-primary float-end" tabIndex="-1" role="button" >Play Quiz</Link>
        
       
      
            
        {/* http://localhost:1000/api/quiz/codeupdate */}
        <a onClick={test} className="btn btn-primary " tabIndex="-1" role="button">Publish</a>
        <h3 className="my-3 text-success text-center">Click on publish to generate a code for your quiz </h3>
        <h3 className="text-center text-success">{gcode}</h3>
     
        
        
        <div className="mb-3 my-2">
          <label htmlFor="title" className="form-label">
            {" "}
            Question{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="question"
            name="question"
            onChange={onChange}
            value={quiz.question}
            minLength={5}
            required
            placeholder="write your Question here"
          />
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              {" "}
              Title{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
              value={quiz.title}
              minLength={5}
              required
              placeholder="Enter the title"
            />
          </div>
        </div>

        <div className="row gx-5">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                {" "}
                Option 1{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="option1"
                name="option1"
                onChange={onChange}
                value={quiz.option1}
                minLength={5}
                required
                placeholder="Enter the option1"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                {" "}
                Option 2{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="option2"
                name="option2"
                onChange={onChange}
                value={quiz.option2}
                minLength={5}
                required
                placeholder="Enter the option2"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                {" "}
                Option 3{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="option3"
                name="option3"
                onChange={onChange}
                value={quiz.option3}
                minLength={5}
                required
                placeholder="Enter the option3"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                {" "}
                Option 4{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="option4"
                name="option4"
                onChange={onChange}
                value={quiz.option4}
                minLength={5}
                required
                placeholder="Enter the option4"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              {" "}
              Answer of the above question{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="answer"
              name="answer"
              onChange={onChange}
              value={quiz.answer}
              minLength={5}
              required
              placeholder="Enter the answer"
            />
          </div>

         
        </div>


        

        <button
          disabled={
            quiz.question.length < 5 ||
            quiz.option1.length < 3 ||
            quiz.option2.length < 3 ||
            quiz.option3.length < 3 ||
            quiz.option4.length < 3 ||
            quiz.answer.length < 3
          }
          type="submit"
          className="btn btn-dark"
          onClick={handleClick}
        >
          Add Quiz
        </button>
      </div>
    </div>
  );
};

export default AddQuiz;