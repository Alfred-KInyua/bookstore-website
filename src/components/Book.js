import { useDispatch } from 'react-redux';
import Progressbar from 'react-js-progressbar';
import PropTypes from 'prop-types';
import { rem } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author, category } = props;

  const removebooks = () => {
    dispatch(rem(id));
  };

  return (
    <>
      <div className="wrapper">
        <div className="style">
          <div>
            <div className="fl">
              <p>{title}</p>
              <p>{author}</p>
              <p>{category}</p>
              <button type="button" className="butt" onClick={removebooks}>
                Delete
              </button>
            </div>
            <div className="navButtons">
              <button type="button" className="btn">
                Comment
              </button>
              <span>|</span>
              <button type="button" className="btn">
                Remove
              </button>
              <span>|</span>
              <button type="button" className="btn">
                Edit
              </button>
            </div>
          </div>
          <div className="flex flex-1 space-btn">
            <div className="progressbar">
              <Progressbar
                input={60}
                pathWidth={5}
                pathColor="#0290ff"
                trailWidth={5}
                trailColor="#e4e4e4"
                textStyle={{ fill: '#0290ff' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
