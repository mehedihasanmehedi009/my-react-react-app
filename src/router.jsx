import { createBrowserRouter } from "react-router";
import { Root } from "./componenet/Root/Root";
import { Home } from "./componenet/Home/Home";
import { Project } from "./componenet/project/Project";
import { About } from "./componenet/Aboutme/About";
import { Contact } from "./componenet/Contact/Contact";

export   const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
     {
        path:'/',
        element:<Home/>
     },
      {
        path:'/Project',
        element:<Project/>
     },
      {
        path:'/about',
        element:<About/>
     }, {
        path:'/contact',
        element:<Contact/>
     }, 
    ]
  },
]);