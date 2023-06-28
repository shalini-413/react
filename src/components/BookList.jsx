import React from 'react';

const BookList = () => {
  const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
    },
    {
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Classic',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
    },
  ];

  return (
    <div>
      <h1 className="book-list-title">Book List</h1>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.title} className="book-item">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-details">Author: {book.author}</p>
            <p className="book-details">Genre: {book.genre}</p>
          </li>
        ))}
      </ul>

      <style>
        {`
          .book-list-title {
            font-size: 24px;
            text-align: center;
            margin-bottom: 20px;
            color: #333;
            text-transform: uppercase;
            background-color: cyan;
          }

          .book-list {
            list-style: none;
            padding: 0;
            background-color: yellow;
          }

          .book-item {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            background-color: lightblue;
          }

          .book-title {
            font-size: 18px;
            margin-bottom: 5px;
            color: #333;
          }

          .book-details {
            font-size: 14px;
            margin-bottom: 5px;
            color: #666;
          }
        `}
        
      </style>
    </div>
  );
};

export default BookList;
