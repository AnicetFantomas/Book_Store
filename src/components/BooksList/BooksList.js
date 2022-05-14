import React, { useEffect } from 'react';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from '../BookItem/BookItem';
import BookForm from '../BookForm/BookForm';
import { getBookApi } from '../../Redux/Books/BooksApi';

const BooksList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookApi());
  }, [dispatch]);

  const { bookStore, loadingAnimation, error } = useSelector((state) => state.bookReducer);

  if (loadingAnimation === true) {
    return (<div><img src="https://i.pinimg.com/originals/f6/06/cb/f606cbf26c0a18898b96ef6857953a75.gif" className="loading" alt="loading" /></div>);
  }

  if (error === true) {
    return (<div className="error">Error While trying to fetch, Try refreshing the page</div>);
  }

  return (
    <div>
      <ul className="BookList-Contaner">
        {Object.keys(bookStore).map((book) => (
          <BookItem
            ID={book}
            book={bookStore[book][0]}
            key={generate({ charset: alphanumeric, length: 32 })}
          />
        ))}
      </ul>
      <div>
        <BookForm />
      </div>
    </div>
  );
};

export default BooksList;
