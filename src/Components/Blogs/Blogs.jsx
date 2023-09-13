import PropTypes from 'prop-types';
import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmark,handleSpentReadTime}) => {
    // load data
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className=" text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => 
                <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleSpentReadTime={handleSpentReadTime}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func.isRequired,
    handleSpentReadTime: PropTypes.func.isRequired
}

export default Blogs;