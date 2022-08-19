import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from '../components/Book';
import Form from '../components/Form';
import { fetchBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </div>
      <Form />
    </>
  );
};

export default Books;
