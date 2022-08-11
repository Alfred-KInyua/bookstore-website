import React from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/navBar';
import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="Books" element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
