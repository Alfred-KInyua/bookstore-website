import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
