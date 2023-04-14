import React from 'react';
import './Button.css';
import { Link, useHistory } from 'react-router-dom';

export function Button() {
    const auth=localStorage.getItem('token');
    const history=useHistory();
    const logout=()=>{
        localStorage.clear();
        history.push('/signup');
    }
  return (
    <>
    { auth? 
    <ul>
     <Link to='/profile'>
      <button className='botn'>Profile</button>
    </Link>
    <Link to='/logout'>
      <button className='botn' onClick={logout}>Logout</button>
    </Link>
    </ul>:
    <ul>
        <Link to='/login'>
      <button className='botn'>Login</button>
    </Link>
    <Link to='/signup'>
      <button className='botn'>Sign Up</button>
    </Link>
    </ul>}
     </>
  );
}