import React from 'react';

function ProductCard({ product, onSelectProduct, onAddToCart }) {

  const truncateTitle = (title) =>
    title.length > 40 ? title.substring(0, 40) + '...' : title;

  const handleCardClick = () => {
    onSelectProduct(product.id);
  };

  const handleAddClick = (e) => {

    e.stopPropagation();
    onAddToCart();
  };

  return (
    <div
      className="product-card fade-in"  
      onClick={handleCardClick}
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '100%',
          height: '220px',
          objectFit: 'contain',
          backgroundColor: '#f7f7f7',
        }}
      />
      <div className="info" style={{ padding: '1rem', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem', color: '#333' }}>
          {truncateTitle(product.title)}
        </h3>

        {/* Star Rating */}
        <div
          style={{
            marginBottom: '0.5rem',
            color: '#f1c40f', // Yellow star
            fontSize: '0.9rem',
          }}
        >
          {product.rating ? `★ ${product.rating.rate.toFixed(1)}` : 'No rating'}
        </div>

        <div
          className="price"
          style={{
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#e67e22',
            fontSize: '1rem',
          }}
        >
          ${product.price.toFixed(2)}
        </div>
        <button
          onClick={handleAddClick}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#444';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000';
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
