const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        books: [state.title, state.author, action.type],
      };
    case REMOVE:
      return {
        ...state,
        books: state.filter((book) => book.title !== action.type),
      };
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
