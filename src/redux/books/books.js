import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../MYAPI/api';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH = 'FETCH';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return { ...state, books: [...action.payload] };
    case `${ADD}/fulfilled`:
      return { ...state, books: [...state.books, action.payload] };
    case `${REMOVE}/fulfilled`:
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
      };
    default:
      return state;
  }
};

const bks = (receive) => {
  const correctFormat = Object.keys(receive).map((items) => ({
    item_id: items,
    title: receive[items][0].title,
    author: receive[items][0].author,
    category: receive[items][0].category,
  }));

  return correctFormat;
};

export const getbooks = createAsyncThunk(FETCH, async () => {
  const response = await fetch(api);
  const input = await response.json();
  const result = bks(input);

  return result;
});

export const addBook = createAsyncThunk(ADD, async (book) => {
  await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return book;
});

export const rem = createAsyncThunk(REMOVE, async (id) => {
  await fetch(`${api}/${id}`, { method: 'DELETE', body: { item_id: id } });

  return id;
});
