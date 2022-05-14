import React from 'react';
import './BookItem.css';
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
    <div className="book-container">
      <div className="book-layout">
        <div className="book-imfos">
          <div className="category">{category}</div>
          <div className="title">{title}</div>
          <div className="author">{author}</div>
          <button type="button" onClick={handleRemove} className="delete">delete</button>
        </div>
        <div className="book-progress">
          <img src="https://raw.githubusercontent.com/sainingo/bookstore/development/src/assets/progress.png" className="progerss-img " alt="progress-img" />
          <p className="progress-para">
            <span>64%</span>
            <br />
            completed
          </p>
        </div>
        <div className="book-chapter">
          <p>CURRENT CHAPTER</p>
          <div>Chapter 18</div>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
