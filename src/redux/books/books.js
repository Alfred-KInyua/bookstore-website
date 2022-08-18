import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../MYAPI/api';
import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH = 'FETCH';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
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

// bk reducer
