import Book from './Book';
import Forms from './Forms';

const Books = () => {
  const books = [
    {
      id: '1',
      title: 'Learn React',
      author: 'Naol',
    },
    {
      id: '2',
      title: 'Java for beginers',
      author: 'Muhe',
    },
    {
      id: '3',
      title: 'Python for dummies',
      author: 'John Lee',
    },
  ];

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Forms />
    </>
  );
};

export default Books;
