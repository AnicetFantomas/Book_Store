import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove, removeBook } from '../../Redux/Books/Books';
/* eslint-disable react/prop-types */
// disabled react/destructuring-assignment

const BookItem = ({ book }) => {
  const { title, author, id } = book;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(remove(id)));
  };

  return (
    <div>
      <li>
        Title:
        {title}
        {' '}
        Author:
        {author}
      </li>
      <button type="button" onClick={handleRemove}>delete</button>
    </div>
  );
};

// BookItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

export default BookItem;
