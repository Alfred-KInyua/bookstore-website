const CHECK = 'bookstore/categories/CHECK';

export default (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return 'coming soon';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: CHECK });

// cat reducer
