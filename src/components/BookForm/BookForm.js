import React, { useState } from 'react';
import { generate } from 'randomized-string';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../Redux/Books/Books';
import { createBookApi } from '../../Redux/Books/BooksApi';

const BookForm = () => {
  const [bookInit, setBook] = useState({
    title: '',
    author: '',
    id: 0,
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBookApi(addNewBook(bookInit.title, bookInit.author, bookInit.id)));
    e.target.reset();
  };

  const handleChange = (e) => {
    const ID = generate();
    e.persist();
    const { id } = e.target;
    const { value } = e.target;
    setBook((book) => ({
      ...book,
      id: ID,
      [id]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          value={bookInit.value}
          onChange={handleChange}
          name="title"
          required
          placeholder="Book title"
        />
        <input
          id="author"
          type="text"
          onChange={handleChange}
          value={bookInit.value}
          name="author"
          required
          placeholder="Author"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BookForm;
