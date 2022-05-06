import React from 'react';

const BookForm = () => (
  <div>
    <form>
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Author" />
    </form>
    <button type="button">Add Book</button>
  </div>
);

export default BookForm;
