import React from 'react';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import { useSelector } from 'react-redux';
import BookItem from '../BookItem/BookItem';
import BookForm from '../BookForm/BookForm';

const BooksList = () => {
  const bookSelct = useSelector((state) => state.bookReducer);
  return (
    <div>
      <ul>
        {bookSelct.map((book) => (
          <BookItem book={book} key={generate({ charset: alphanumeric, length: 32 })} />
        ))}
      </ul>
      <div>
        <BookForm />
      </div>
    </div>
  );
};

export default BooksList;
