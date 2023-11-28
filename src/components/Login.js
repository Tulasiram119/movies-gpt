import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidator } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { netflixLogo } from "../utils/constant";
import { USERAVATAR } from "../utils/constant";
import error from "./NewError";
export default function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInButton = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validation
    const message = formValidator(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    //here we write our sign in and sign up code
    if (!isSignInForm) {
      //sign up code
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USERAVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const{uid,displayName,photoURL,email} = auth.currentUser;
              dispatch(addUser({uid:uid,displayName:displayName,photoURL:photoURL,email:email}));
              
            })
            .catch((error) => {
              // An error occurred
              // ...
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              console.log(error+"error in updating");
              navigate("/error");
              setErrorMessage(errorCode + " - " + errorMessage);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          navigate("/error");
          setErrorMessage(errorCode + " - " + errorMessage);
          console.log(error+"error in creating");
        });
    } else {
      //sign in code
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={netflixLogo}
          alt="netfixLogo"
        />
      </div>
      <form
        className=" w-3/12 absolute bg-black my-36 mx-auto left-0 right-0 text-white p-8 rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign in" : "Sigh up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="p-4 my-4 w-full bg-gray-700"
            placeholder="Enter your full name"
          />
        )}
        <input
          ref={email}
          type="email"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Enter your Email address"
        />
        <input
          ref={password}
          type="password"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="password"
        />
        <p className="text-red-600 text-xl font-bold">{errMessage}</p>
        <button
          className="my-4 p-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sigh up"}
        </button>
        <p
          className="text-white py-4 cursor-pointer"
          onClick={toggleSignInButton}
        >
          {isSignInForm ? "New to this? Signup now" : "Already a user Login"}
        </p>
      </form>
    </div>
  );
}
