import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
// import Home from './pages/Home.jsx';
// import Blogs from './pages/Blogs.jsx';
// import Services from './pages/Services.jsx';
// import Contact from './pages/Contact.jsx';
// import About from './pages/About.jsx';
// import Navigation from '../Config/Navigation.jsx';
// import Navbar from './Components/Navbar.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<App/>,
//     children:[{
//       path:"/",
//       element:<Home/>
//     }]
//   },
//   {
//     path:"/blogs",
//     element:<Blogs/>  
//   },
//   {
//     path:"/abouts",
//     element:<About/>  
//   },
//   {
//     path:"/contacts",
//     element:<Contact/>  
//   },
//   {
//     path:"/services",
//     element:<Services/>  
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   
    <App/>
   
  </BrowserRouter>
  
  </React.StrictMode>,
)
