import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination'
import CategorySelection from './CategorySelection'
import Sidebar from './Sidebar'

const BlogPage = () => {
    const [blogs ,setBlogs] = useState([])
    const [currentPage,setCurrentpage] = useState(1)
    const pageSize =12 // blogs per page 
    const [selectedCategory,setSelectedCategory] = useState(null)
    const [activeCategory,setActiveCategory] = useState(null)





    useEffect(()=>{
        async function fetchBlogs(){
            let url =  `http://localhost:5000/Blogs?page=${currentPage}&limit=${pageSize}`

            // filters by category 
            if(selectedCategory){
                url += `&category = ${selectedCategory}`
            }

            const response = await fetch(url)
            const data = await response.json()
            setBlogs(data)

        }
        fetchBlogs()

    },[currentPage,pageSize,selectedCategory])
    console.log(blogs)


    // page changing  btn 
    const handlePageChange =(pageNum)=>{
        setCurrentpage(pageNum)
        

    }

    // cateogy changinh btn 
    const handleCategoryChange =(category)=>{

        setSelectedCategory(category)
        setCurrentpage(1)
        setActiveCategory(category)
    }
  return (
     
    <div>
        {/* category section */}
        <div>
<CategorySelection onSelectedCategory ={handleCategoryChange} selectedCategory={selectedCategory}  activeCategory={activeCategory} />
        </div>
        {/* blog cards section */}
        <div className='flex flex-col lg:flex-row gap-12 '>
        <BlogCards blogs ={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
             {/* sidebar componnets  */}

         <div>
        <Sidebar />
    </div>
        </div>

      
        {/* paginatrion section */}

        <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />

        </div>

    </div>
  )
}

export default BlogPage