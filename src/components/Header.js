// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts, fetchProductsByCategory } from '../store/slices/productSlice';

function Header() {
  const cartCount = useSelector((state) => state.cart.cartCount);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);


  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      return newMode;
    });
  };


  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category === '') {
      dispatch(fetchAllProducts());
    } else {
      dispatch(fetchProductsByCategory(category));
    }
  };


  const handleSearch = () => {
    const trimmed = searchTerm.trim().toLowerCase();
    if (!trimmed) {
      alert('Please enter a category to search.');
      return;
    }
    const knownCategories = categories.map((cat) => cat.toLowerCase());
    if (knownCategories.includes(trimmed)) {
      dispatch(fetchProductsByCategory(trimmed));
      setSelectedCategory(trimmed);
    } else {
      alert(
        `Category "${searchTerm}" not found.\nAvailable categories: ${categories.join(', ')}`
      );
    }
  };

  return (
    <header
      style={{
        backgroundColor: '#ffcc00',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
      }}
    >
      {/* Left: Brand Name */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <a
          href="/"
          style={{ color: '#000', textDecoration: 'none', cursor: 'pointer' }}
        >
          Harmoni
        </a>
      </div>

      {/* Middle: Navigation Links */}
      <nav style={{ display: 'flex', gap: '1rem' }} aria-label="Main navigation">
        <a
          href="/"
          style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }}
        >
          Home Page
        </a>
        <a
          href="#categories"
          style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }}
        >
          Categories
        </a>
        <a
          href="#contact"
          style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }}
        >
          Contact Us
        </a>
        <a
          href="#more"
          style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }}
        >
          More Options
        </a>
      </nav>

      {/* Right: Search + Dropdown + Cart + Dark Mode Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Search Input */}
        <input
          type="text"
          aria-label="Search products by category"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
          style={{
            padding: '0.4rem 0.8rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />


        <button
          onClick={handleSearch}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '0.4rem 0.8rem',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            fontWeight: '500',
          }}
        >
          Search
        </button>


        <label htmlFor="categorySelect" style={{ display: 'none' }}>
          Select a category
        </label>
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{
            padding: '0.4rem 0.8rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          <option value="">All Products</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>


        <div
          style={{ position: 'relative', cursor: 'pointer' }}
          aria-label="Cart"
        >
          <svg
            width="24"
            height="24"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <path d="M10 20c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm8 1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 3h2l3.6 7.59-1.35 2.44C7.08 13.37 7 13.66 7 14c0 1.1.9 2 2 2h9v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h5.68c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.993.993 0 0019.42 4H5.21l-.94-2H1v2z" />
          </svg>
          {cartCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-10px',
                backgroundColor: '#f00',
                color: '#fff',
                borderRadius: '50%',
                fontSize: '0.7rem',
                padding: '2px 6px',
              }}
            >
              {cartCount}
            </span>
          )}
        </div>


        <button
          onClick={toggleDarkMode}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '0.4rem 0.8rem',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            fontWeight: '500',
          }}
        >
          {isDarkMode ? (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.354a1 1 0 0 1 1 1v2.292a1 1 0 1 1-2 0V5.354a1 1 0 0 1 1-1zM4.354 11a1 1 0 0 1 1-1h2.292a1 1 0 1 1 0 2H5.354a1 1 0 0 1-1-1zM12 17.354a1 1 0 0 1-1-1v-2.292a1 1 0 1 1 2 0v2.292a1 1 0 0 1-1 1zm7.292-6a1 1 0 0 1-1 1h-2.292a1 1 0 1 1 0-2h2.292a1 1 0 0 1 1 1zM6.343 6.343a1 1 0 0 1 1.414 0l1.623 1.623a1 1 0 0 1-1.414 1.414L6.343 7.757a1 1 0 0 1 0-1.414zM15.63 15.63a1 1 0 0 1 1.414 0l1.623 1.623a1 1 0 0 1-1.414 1.414l-1.623-1.623a1 1 0 0 1 0-1.414zM6.343 17.657a1 1 0 0 1 0-1.414l1.623-1.623a1 1 0 1 1 1.414 1.414l-1.623 1.623a1 1 0 0 1-1.414 0zM15.63 8.37a1 1 0 0 1 0 1.414l-1.623 1.623a1 1 0 1 1-1.414-1.414l1.623-1.623a1 1 0 0 1 1.414 0zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
          ) : (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
