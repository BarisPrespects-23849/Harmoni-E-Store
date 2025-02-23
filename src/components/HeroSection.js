import React from 'react';

function HeroSection() {
  return (
    <section
      className="fade-in"
      style={{
        background: 'linear-gradient(to right, #fff 50%, #fff9c4 50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 20px',
        minHeight: '500px',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '20px',
          fontWeight: '700',
          color: '#000',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
        }}
      >
        Welcome to <span style={{ textDecoration: 'underline' }}>My Store</span>
      </h1>

      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '20px',
          color: '#333',
        }}
      >
        Your Shopping Destination
      </h2>

      <p
        style={{
          maxWidth: '600px',
          margin: '0 auto 30px',
          color: '#555',
          lineHeight: '1.6',
          fontSize: '1.2rem',
        }}
      >
        Discover a wide range of products tailored just for you. Shop with ease and find exactly what you need.
      </p>

      <button
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '14px 28px',
          fontSize: '1rem',
          fontWeight: '600',
          borderRadius: '5px',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#444')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#000')}
      >
        Shop Now
      </button>
    </section>
  );
}

export default HeroSection;
