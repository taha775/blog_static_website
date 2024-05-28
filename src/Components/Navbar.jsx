import React, { useState } from 'react';
import { FaBars, FaDribbble, FaFacebook, FaTwitter,FaXmark } from "react-icons/fa6";
import "../../src/App.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen,setIsmenuOpen] = useState(false)


    const togglemenu =()=>{
        setIsmenuOpen(!isMenuOpen)
    }

    const NavItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/abouts", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contacts", link: "Contact" },
    ];

    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0 z-0'>
            <nav className=' navbar  px-4 py-4 max-w-7xl mx-auto justify-between flex items-center'>
                <a href="/" className='text-xl font-bold text-white'>Design <span className='text-orange-500'>DK</span></a>
                <ul className='md:flex gap-32 text-lg hidden '>
                    {
                        NavItems.map(({ path, link }, index) => (
                            <li key={path} className='text-white'>
                                <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }  to={path}>{link}</NavLink>
                            </li>
                        ))
                    }
                </ul>

                    {/* menu icons */}
                    <div className='text-white lg:flex  gap-4 items-center hidden'   >
                    <a href="" className='hover:text-orange-500' > <FaFacebook/></a>
                    <a href="" className='hover:text-orange-500' > <FaDribbble/></a>
                    <a href="" className='hover:text-orange-500' > <FaTwitter/></a>
                    <button className='bg-orange-500 px-6 py-2 font-medium rounded  hover:bg-white transition-all  duration-200  ease-in hover:text-orange-500'  > Login</button>                        
                    
                    
                    </div>

                        {/* mobiles menu btn display mobiloe screens  */}
                    <div className='md:hidden cursor-point text-white' >
                        <button onClick={togglemenu} >
                            {
                        isMenuOpen ? <FaXmark className="w-5 h-5"/> :  <  FaBars className="w-5 h-5" />

                            }
                            
                            
                            
                            </button>
                    </div>
            </nav>
            {/* menu items only for mobiles  */}
            {/* mobile responsive */}
            
            <div>
                <ul className={`md:hidden  gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 ":"hidden "}`} >
                   {
                    NavItems.map(({path,link})=><li className='text-black' key={path}  >
                        <NavLink onClick={togglemenu} to={path}>{link}</NavLink>
                    </li>)
                   }             
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
