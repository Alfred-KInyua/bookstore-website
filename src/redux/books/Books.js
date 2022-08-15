const ADD = 'bookstore-website/Books/ADD';
const REMOVE = 'bookstore-website/Books/REMOVE';

export default (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD, book });

export const removeBook = (id) => ({ type: REMOVE, id });
