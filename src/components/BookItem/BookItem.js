import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../../Redux/Books/BooksApi';
/* eslint-disable react/prop-types */
// disabled react/destructuring-assignment

const BookItem = ({ ID, book }) => {
  const { title, author, category } = book;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBookApi(ID));
  };

  return (
    <div>
      <li>
        Title:
        {' '}
        {title}
        {' '}
        Author:
        {' '}
        {author}
        {' '}
        Category:
        {' '}
        {category}
      </li>
      <button type="button" onClick={handleRemove}>delete</button>
    </div>
  );
};

export default BookItem;
