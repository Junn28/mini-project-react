import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ListProduct from './components/ListProduct';
import Category from './components/Category';
import Contact from './components/Contact';
import DetailProduct from './components/DetailProduct';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar name="ecommerce" />

      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
