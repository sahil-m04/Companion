import React from 'react';
import './BookCard.scss';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.imageUrl} alt={book.title} className="book-image" />
      <h2 className="book-title">{book.title}</h2>
      <a href={book.readNowLink} target="_blank" rel="noopener noreferrer" className="read-now-button">
        Read Now
      </a>
    </div>
  );
};

export default BookCard;
