/* eslint-disable no-unused-vars */
const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';
const FETCHBOOK = 'FETCHBOOK';
const FETCHERROR = 'FETCHERROR';

const booksInitial = {
  bookStore: [],
  loadingAnimation: true,
  error: false,
};

export const addNewBook = (title, author, id) => ({
  id,
  category: 'action',
  author,
  title,
});

const bookReducer = (state = booksInitial, action) => {
  switch (action.type) {
    case FETCHBOOK:
      return [...state];
    case ADD:
      return {
        bookStore: action.payloads,
        loadingAnimation: false,
      };
    case REMOVE:
      return [...state.filter((book) => book.item_id !== action.payloads)];

    case FETCHERROR:
      return {
        error: true,
      };

    default: return state;
  }
};

export const addBook = (bookItems) => ({
  type: ADD,
  payloads: bookItems,
});

export const removeBook = (bookItems) => ({
  type: REMOVE,
  payloads: bookItems,
});

export const fetchBooks = () => (
  {
    type: FETCHBOOK,
  }
);

export const fetchBookErr = () => ({
  type: FETCHERROR,
});

export default bookReducer;
