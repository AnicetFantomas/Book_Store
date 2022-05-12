/* eslint-disable no-unused-vars */
const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';
const booksInitial = [];

export const addNewBook = (title, author, id) => {
  booksInitial.push({
    id,
    author,
    title,
    // completed,
  });
};

let ID = 0;
export const remove = (id) => {
  ID = id;
};

const bookReducer = (state = booksInitial, action) => {
  switch (action.type) {
    case ADD:
      return [...booksInitial];
    case REMOVE:
      return [...state.filter((book) => book.id !== ID)];

    default: return state;
  }
};

export const addBook = () => ({
  type: ADD,
});

export const removeBook = () => ({
  type: REMOVE,
});

export default bookReducer;
