import React from 'react';
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

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>

  );
}
