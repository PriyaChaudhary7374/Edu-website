import React, { useEffect, useState } from 'react'

 

import Home from "./pages/Home/Home.js"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import About from "./pages/About/About.js"
import Signup from './pages/Signup.js'
import Login from './pages/Login.js'


import "./pages/Notes.css"
import Notes from './pages/Notes.js';
import Quiz from "./pages/Quiz.js"
import Alert from './components/Quiz/Alert.js'
import Profile from './components/Profile/Profile.js'
import PlayQuizEntry from './components/Quiz/PlayQuizEntry.js'
import Community from './pages/Community.js'
import Discussions from './pages/Discussions.js'






function App () {
  const[alert, setAlert] = useState(null);
  const showAlert =(message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null)
    },1500)
  };
 const token=localStorage.getItem('token');

  return ( 
  <>
    <div className="alert">
   <Alert alert={alert}/>
   </div>
  <Router>
    <Switch>
   
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    
   
    <Route path="/login" render={(props) => <Login {...props} showAlert={showAlert} />}/>
     <Route path="/signup" render={(props) => <Signup {...props} showAlert={showAlert} />}/>

   <Route path="/notes" component={token?Notes:Login}/> 
   <Route path="/quiz" component={token?Quiz:Login}/>
   <Route path="/profile" component={Profile}/>
   <Route  path="/playquiz" component={PlayQuizEntry}/>
   <Route path="/community" component={token?Community:Login}/>
   <Route path="/discussions" component={token?Discussions:Login}/>
   
   

            
       </Switch>
      </Router>
              
  </>
    
);
};
  
    
  


export default App