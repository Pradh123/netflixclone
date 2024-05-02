import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckData } from '../utiles/Validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utiles/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utiles/userSlice';

const Login = () => {
  const dispatch=useDispatch();

  const [isSign,setIsSign]=useState(true);
  const [errorMessege,setErrorMessege]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const navigate=useNavigate();
const ValidateData=(e)=>{
  //logic for validate Data
  e.preventDefault();
  const messege=CheckData(email.current.value,password.current.value);
  setErrorMessege(messege);
  if(messege) return;

  // Sign In and Sign Up logic Here
  if(!isSign){
    // signup logic here
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
  
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName}= auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    }).catch((error) => {
      // An error occurred
      setErrorMessege(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode){
      const error="request can't be processed";
      setErrorMessege(error);
     }
  });

  }
  else{
     // signin logic here
     signInWithEmailAndPassword(auth,email.current.value,password.current.value)
     .then((userCredential) => {
       const user = userCredential.user;
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       if(errorCode){
        const error="user not found";
        setErrorMessege(error);
       }
       
     });

  }

}
  const toggleSignInAndSignUp=()=>{
       setIsSign(!isSign);
  }
  return (
    <div>
        <Header/>
        <div className=' absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='background image'/></div>
        <form className=' p-12 absolute my-36 mx-auto left-0 right-0 w-3/12 bg-black text-white rounded-lg bg-opacity-75'>
          <h1 className=' py-4 font-bold text-3xl text-white'>{isSign?"Sign In":"Sign Up"}</h1>
          {isSign?null:<input type='text' ref ={name} placeholder='Name' className='p-2 my-3 w-full bg-gray-500 rounded-lg'/>}
          <input ref ={email} type='email' placeholder='Email' className='p-2 my-3 w-full bg-gray-500 rounded-lg'/>
          <input ref ={password} type='password' placeholder='Password'className='p-2 my-3 w-full bg-gray-500 rounded-lg'/>
          <p className=' text-red-700 font-bold p-2 py-2'>{errorMessege}</p>
          <button className='p-2 my-4 w-full bg-red-700 rounded-lg' onClick={ValidateData}>{isSign?"Sign In":"Sign Up"}</button> 
          <p className=' py-4 text-white'>{isSign?"New to Netflix ?":"Already ragistered ?"} <span className=' cursor-pointer underline' onClick={toggleSignInAndSignUp}>{isSign?"Sign Up Now":"Sign In"}</span></p>
                 </form>
    </div>
  )
}

export default Login