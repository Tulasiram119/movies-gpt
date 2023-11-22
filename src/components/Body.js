import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice"
export default function Body() {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
    const appRouter = createBrowserRouter([
        {
            element:<Login />,
            path: "/"
        },
        {
            element :<Browse />,
            path:"/browse"
        }
    ]);
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          const {uid, email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          //window.location.href = "/browse";
        }else{
          dispatch(removeUser());
          //window.location.href = "/"
        }

      })
    },[])
  return (
    <div>
      <RouterProvider router={appRouter}/>
   
    </div>
  )
}
