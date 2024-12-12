import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogCard.scss';

import BlogContext from '../../Context/BlogContext';

const BlogCard = ({ index, title}) => {

    const navigate = useNavigate();

    const { id, setId } = useContext(BlogContext);
    const { blog, setBlog } = useContext(BlogContext);

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const url = `https://chat-app-b0yo.onrender.com/blog/${blog[index].coverImageURL}`;
                // const url = `http://localhost:8000/blog/1723461885490-gojo-satoru.jpg`;

                // console.log(blog[index].coverImageURL);

                const response = await fetch(url);
                const imageData = await response.blob();
                setImageUrl(URL.createObjectURL(imageData));
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);

    const f = () => {
        setId(index);
        navigate('/Blog/DisplayBlog');
    }

    return (
        <div className="blogcard">
            <img src={imageUrl} alt={title} className="blogcard-image" />
            <div className="blogcard-content child-container">
                <h3 className="blogcard-title">{title}</h3>
                <button className="blogcard-button" onClick={f}>View</button>
            </div>
        </div>
    );
};

export default BlogCard;