import React  from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewError from "../components/NewError"
export default function Body() {
  
  
    const appRouter = createBrowserRouter([
        {
            element:<Login />,
            path: "/"
        },
        {
            element :<Browse />,
            path:"/browse"
        },{
          element:<NewError />,
          path:'/error'
        }
    ]);
    
  return (
    <div>
      <RouterProvider router={appRouter}/>
   
    </div>
  )
}
