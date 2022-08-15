import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./redux/books/Books";
import Categories from "./redux/categories/Categories";
import Navbar from "./components/navBar";
import "./App.css";

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
