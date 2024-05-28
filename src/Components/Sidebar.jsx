import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'

const Sidebar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/Blogs")
            .then(res => res.json())
            .then(data => setPopularBlogs(data.slice(0, 15)));
    }, []); // Specify an empty dependency array

    return (
        <div>
            <div>
                <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
                <div>
                    {popularBlogs.slice(0,5).map(blog =>
                        <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4 ' >
                            <h4>{blog.title}</h4>
                            {/* Use Link component with appropriate 'to' prop */}
                            <Link className='text-base pb-2 hover:text-orange-500 inline-flex items-center py-1' to={"/blog/" + blog.id}>Read More <FaArrowRight className='mt-1 ml-2' /></Link>
                        </div>
                    )}
                </div>
            </div>


            {/* popular blogs */}
            <div>
                <h3 className='text-2xl font-semibold px-4 mt-20 '>Popular Blogs</h3>
                <div>
                    {popularBlogs.slice(0,5).map(blog =>
                        <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4 ' >
                            <h4>{blog.title}</h4>
                            {/* Use Link component with appropriate 'to' prop */}
                            <Link className='text-base pb-2 hover:text-orange-500 inline-flex items-center py-1' to={"/blog/" + blog.id}>Read More <FaArrowRight className='mt-1 ml-2' /></Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
