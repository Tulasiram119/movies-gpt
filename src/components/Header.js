import React,{useEffect} from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice"
import { logo } from "../utils/constant";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const handleSignout = () => {
    signOut(auth).then(()=>{
      navigate("/");
    }).catch(()=>{
      navigate("/error");
    })
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid, email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        //window.location.href = "/browse";
        navigate("/browse");
      }else{
        dispatch(removeUser());
        //window.location.href = "/"
        navigate("/")
      }

    })
//unsubscribe when component unmounts
    return ()=> unsubscribe();
  },[])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={logo}
        alt="netflixLogo"
      />
      {user && <div className="flex flex-col p-2">
        <img
          className="h-12 w-12 mx-3"
          src={user?.photoURL}
          alt="userIcon"
        />
        <button
          className="font-bold bg-red-500 my-2 cursor-pointer p-1 rounded-md"
          onClick={handleSignout}
        >
          Sign out
          
        </button>
        
      </div>}
    </div>
  );
}
