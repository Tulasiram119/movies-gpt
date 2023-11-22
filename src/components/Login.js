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
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const{uid,displayName,photoURL,email} = auth.currentUser;
              dispatch(addUser({uid:uid,displayName:displayName,photoURL:photoURL,email:email}));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              console.log(error);
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
          navigate("/browse");
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg"
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
