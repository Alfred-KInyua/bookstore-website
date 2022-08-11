import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Book from './components/Book';
import Categories from './components/Categories';
import Navbar from './components/navBar';
import './App.css';

export default function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>

  );
}

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
// import Book from './components/Book';
// import Books from './components/Books';
// import Categories from './components/Categories';
// import Navbar from './components/navBar';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Books />} />
//         <Route path="/book" element={<Book />} />
//         <Route path="/categories" element={<Categories />} />
//       </Routes>
//   </Router>
//   );
// }
