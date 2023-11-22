import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  
  const handleSignout = () => {
    signOut(auth).then(()=>{
      navigate("/");
    }).catch(()=>{
      navigate("/error");
    })
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflixLogo"
      />
      { <div className="flex flex-col p-2">
        <img
          className="h-12 w-12 mx-3"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
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
