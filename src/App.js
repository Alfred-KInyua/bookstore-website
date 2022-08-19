import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './items/Books';
import Categories from './items/Categories';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
