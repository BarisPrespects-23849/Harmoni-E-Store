// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../store/slices/productSlice';
import { incrementCart } from '../store/slices/cartSlice';

import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProductGrid from '../components/ProductGrid';
import ProductModal from '../components/ProductModal';

function HomePage() {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);

  const [modalProductId, setModalProductId] = useState(null);
  const [notification, setNotification] = useState('');

  useEffect(() => {

    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleSelectProduct = (productId) => {
    setModalProductId(productId);
  };

  const handleCloseModal = () => {
    setModalProductId(null);
  };

  const handleAddToCart = () => {
    dispatch(incrementCart());
    setNotification('Product added to cart');
    setTimeout(() => {
      setNotification('');
    }, 2000);
  };

  return (
    <div style={{ position: 'relative' }}>
      <HeroSection />

      <section
        className="discover-section"
        style={{
          backgroundColor: '#000',
          textAlign: 'center',
          padding: '60px 20px',
          color: '#fff',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
          Discover Your Next Favorite Item
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Browse our extensive collection and find the perfect product tailored just for you.
        </p>
      </section>

      <h2
        className="section-title"
        style={{
          textAlign: 'center',
          marginTop: '40px',
          fontSize: '2rem',
          color: '#333',
        }}
      >
        Explore Our Products
      </h2>

      {status === 'loading' && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {status === 'failed' && (
        <p style={{ textAlign: 'center', color: 'red' }}>
          Failed to load products. Please try again later.
        </p>
      )}
      {status === 'succeeded' && (
        <ProductGrid
          products={products}
          onSelectProduct={handleSelectProduct}
          onAddToCart={handleAddToCart}
        />
      )}

      <ServicesSection />

      {modalProductId && (
        <ProductModal
          productId={modalProductId}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}


      {notification && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '0.9rem',
            zIndex: 10000,
          }}
        >
          {notification}
        </div>
      )}
    </div>
  );
}

export default HomePage;
