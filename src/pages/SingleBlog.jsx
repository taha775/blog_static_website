import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        
        setBlog(data[0]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
        <div className='py-40 bg-black text-center text-white px-4 '>
            <h2 className='text-5xl lg:text-7xl; leading-snug'>Single Blog Page</h2>
        </div>
            {/* blog details */}
            <div className='max-w-7xl mx-auto my-12  '>
                <div className='lg:w-3/2  mx-auto :'>
                    <div>
                        <img src={blog.image} alt="" className='w-full mx-auto rounded ' />
                    </div>
                    <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{blog.title}</h2>
                    <p className='mb-3 text-gray-600 '> <FaUser className=' inline-flex items-center mr-2 '/>{blog.author} | {blog.published_data}</p>
                    <p className='mb-3 text-gray-600 '> <FaClock className=' inline-flex items-center mr-2 '/>{blog.reading_time} </p>
                    <p className='text-sm text-gray-500  mb-6 '>{blog.content}</p>
                
                </div>
            </div>
    </div>
  );
};

export default SingleBlog;
