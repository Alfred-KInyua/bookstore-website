import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { rem } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const removebooks = () => {
    dispatch(rem(id));
  };

  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={removebooks}>
        Delete
      </button>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
