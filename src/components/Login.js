import React, { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [isSignInForm, setIsSIgnInForm] = useState(true);
  const toggleSignInButton = ()=>{
    setIsSIgnInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netfixLogo"
        />
      </div>
      <form className=" w-3/12 absolute bg-black my-36 mx-auto left-0 right-0 text-white p-8 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl py-4">{isSignInForm ? "Sign in":"Sigh up"}</h1>
        {!isSignInForm && <input
          type="text"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Enter your full name"
        />}
        <input
          type="email"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Enter your Email address"
        />
        <input
          type="password"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="password"
        />
        <button className="my-4 p-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign in":"Sigh up"}</button>
        <p className="text-white py-4 cursor-pointer" onClick={toggleSignInButton}>{isSignInForm ? "New to this? Signup now":"Already a user Login"}</p>
      </form>
      
    </div>
  );
}
