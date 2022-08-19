import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({ title: '', author: '' });

  const valueChangeHandler = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    if (!formValues.title.trim() || !formValues.author.trim()) return;
    const book = {
      id: uuidv4(),
      title: formValues.title,
      author: formValues.author,
      category: 'Documentary',
    };
    dispatch(addBook(book));

    setFormValues({ title: '', author: '' });
  };

  return (
    <form onSubmit={addBookHandler}>
      <h2>ADD NEW BOOK</h2>
      <input
        value={formValues.title}
        onChange={valueChangeHandler}
        type="text"
        placeholder="Book Title"
        name="title"
      />

      <input
        value={formValues.author}
        onChange={valueChangeHandler}
        type="text"
        placeholder="Book Author"
        name="author"
      />
      <input
        value={formValues.author}
        onChange={valueChangeHandler}
        type="text"
        placeholder="Category"
        name="category"
      />
      <button type="submit" className="butt">
        Add Book
      </button>
    </form>
  );
};

export default Form;
