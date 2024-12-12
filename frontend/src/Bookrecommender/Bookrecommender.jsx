import React from 'react';
import './Bookrecommender.scss';
import SearchBar from './Book-Comp/searchBox';
import BookCard from './Book-Comp/BookCard';

function BookRecommender() {
    const books = [
        { title: 'To Kill a Mockingbird', genre: 'Fiction', url: 'https://drive.google.com/link1' },
        { title: '1984', genre: 'Dystopian', url: 'https://drive.google.com/link2' },
        { title: 'The Great Gatsby', genre: 'Classic', url: 'https://drive.google.com/link3' },
        { title: 'The Catcher in the Rye', genre: 'Classic', url: 'https://drive.google.com/link4' },
        { title: 'Moby-Dick', genre: 'Adventure', url: 'https://drive.google.com/link5' },
        { title: 'Pride and Prejudice', genre: 'Romance', url: 'https://drive.google.com/link6' },
        { title: 'War and Peace', genre: 'Historical', url: 'https://drive.google.com/link7' },
        { title: 'The Hobbit', genre: 'Fantasy', url: 'https://drive.google.com/link8' },
        { title: 'Great Expectations', genre: 'Classic', url: 'https://drive.google.com/link9' },
        { title: 'Jane Eyre', genre: 'Romance', url: 'https://drive.google.com/link10' },
    ];

    const bookData = {
        title: 'To Kill a Mockingbird',
        imageUrl: 'https://cdn2.penguin.com.au/covers/400/9781784752637.jpg', // Replace with actual image URL
        readNowLink: 'https://drive.google.com/your-google-drive-link' // Replace with actual Google Drive link
      };

    return (
        <div className="book-recommender">
            <div className='heading'>
                <h1>Book Recommender</h1>
            </div>
            <div className='search-bar'>
                <SearchBar data={books} />
            </div>
            <div className='heading'>
                <h1>Top Recommended Books</h1>
            </div>
            <div>
                <BookCard book={bookData} />
            </div>

        </div>
    );
}

export default BookRecommender;
