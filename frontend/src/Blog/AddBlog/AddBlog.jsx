import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBlog.scss';
import axios from 'axios';

function AddBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleFileChange = (event) => {
        setCoverImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('coverImage', coverImage);

        try {
            await axios.post('http://localhost:8000/blog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate('/Blog/Blogs'); // Redirect to the blog page after successful submission
        } catch (error) {
            setError('Error uploading blog. Please try again.');
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-blog-form">
            <div className='formlabel'>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
            </div>
            <div className='formlabel'>
                <label htmlFor="formbody">Body</label>
                <textarea
                    id="formbody"
                    name="formbody"
                    value={body}
                    onChange={handleBodyChange}
                    rows="10"
                    required
                />
            </div>
            <div className='formlabel'>
                <label htmlFor="coverImage">Upload Image</label>
                <input
                    type="file"
                    id="coverImage"
                    name="coverImage"
                    accept="image/*" // Only accept image files
                    onChange={handleFileChange}
                    required
                />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button className="submit-button" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}

export default AddBlog;
