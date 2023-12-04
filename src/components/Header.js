import React,{useEffect} from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice"
import { SUPPORTED_LANGUAGES, logo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const gptSearch = useSelector(store => store.gpt);
  
  
  const handleSignout = () => {
    signOut(auth).then(()=>{
      navigate("/");
    }).catch(()=>{
      navigate("/error");
    })
  };
  const handleGptClick =  ()=>{
    dispatch(toggleGptSearchView());
  }
  const handleLanaguage = (e)=>{
    
    dispatch(changeLanguage(e.target.value));
  }
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
      {user && 
      
      <div className="flex p-2"> 
      {gptSearch?.showGptSearch && <select className="p-1 m-2 rounded-lg bg-gray-800 text-white" onChange={handleLanaguage}>
        {SUPPORTED_LANGUAGES.map((language)=><option key={language.identifier} value={language.identifier}>{language.name}</option>)}
        
        
      </select>}
      <button className="text-white py-2 px-4 mx-4 my-2 bg-purple-700 rounded-lg" onClick={handleGptClick}>{gptSearch?.showGptSearch ? "Home Page": "Gpt Search"}</button>       
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
