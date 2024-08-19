import React, { useEffect, useContext } from 'react'
import BlogCard from "../Card/BlogCard";
import './Blogs.scss'
import BlogContext from '../../Context/BlogContext';

function Blogs() {

    const { blog, setBlog } = useContext(BlogContext);

    const url = "http://localhost:8000/blog";

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <h1>Community Blogs</h1>
            <div className="card-grid">
                {blog.map((post, index) => (
                    <BlogCard
                    key={index}
                    index={index}
                    title={post.title}
                    description={post.body}
                    />
                ))}
            </div>

        </>
    )
}

export default Blogs;

