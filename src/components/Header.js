import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utiles/firebase";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { removeUser } from "../utiles/userSlice";
import pic from './userpic.png'
import { addUser, removeUser } from "../utiles/userSlice";
import { useEffect } from "react";
const Header = () => {
  const data=useSelector(store=>store.user)
  const navigate=useNavigate();
const dispatch=useDispatch();
  const SignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
    });}
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName}= user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            navigate('/browse')
          } else {
            dispatch(removeUser())
            navigate('/')
           
          }
        });
        return ()=>unsubscribe();
  },[])
  return (
    <div className=' absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className=' w-44'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix logo'/>
        {data&&<div className=" flex w-52">
          <div className=" flex flex-col items-center">
            
          <img alt="user" className=' w-12 h-14 rounded-full'src={pic}/>
          <p className=' font-bold text-white'><span>Hello ,</span>{data?.displayName}</p></div>
         
          <button className=' bg-red-700 rounded-lg h-10 p-2  my-2' onClick={SignOut}>Sign out</button>
        </div>}
    </div>
  )
}

export default Header