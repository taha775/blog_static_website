import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import SingleBlog from "../pages/SingleBlog";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blogs />} />
      {/* Define route for single blog with loader function */}
    
      <Route path="/blogs/:id" element={<SingleBlog/>}></Route>
    </Routes>
  );
};

export default Navigation;
