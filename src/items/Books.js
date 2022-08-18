import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getbooks } from '../redux/books/books';

import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(getbooks());
  }, []);

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </>
  );
};

export default Books;
