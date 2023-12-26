import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, logo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  const handleGptClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanaguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        //window.location.href = "/browse";
        navigate("/browse");
      } else {
        dispatch(removeUser());
        //window.location.href = "/"
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex md:justify-between flex-col md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="netflixLogo" />

      {user && (
        <div className="flex justify-between">
          {gptSearch?.showGptSearch && (
            <select
              className="py-1 md:py-0 md:px-0.5 px-4 my-8 md:my-6 bg-gray-900 text-white rounded-md "
              onChange={handleLanaguage}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <Link
            to={gptSearch?.showGptSearch ? "/browse" : "/browse/gptsearch"}
            onClick={handleGptClick}
          >
            <button className="py-0 px-4 mx-4 md:my-7 my-8 bg-purple-800 text-white rounded-lg">
              {gptSearch?.showGptSearch ? "Home" : "Gpt"}
            </button>
          </Link>
          <img
            className="md:h-10 md:w-12 md:mt-5 h-10 w-12 mt-5 md:mx-3 hidden md:inline-block"
            src={user?.photoURL}
            alt="userIcon"
          />

          <button
            className="font-bold bg-red-500 md:my-5 my-8 cursor-pointer md:px-1 md:py-0 px-4 
          rounded-md"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
