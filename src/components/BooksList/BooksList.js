import React from 'react';
/* eslint-disable react/prop-types */

const BooksList = () => {
  const booksInitial = [{
    id: 1,
    title: 'Harry Potter',
    author: 'J. K. Rowling',
  }];

  return (
    <div>
      <ul>
        {booksInitial.map((book) => (
          <li key={book.id}>
            Title:
            {book.title}
            {' '}
            Author:
            {book.author}
            <button type="button">delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
