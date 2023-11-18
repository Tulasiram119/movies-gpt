import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function Body() {

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
  return (
    <div>
      <RouterProvider router={appRouter}/>
   
    </div>
  )
}
