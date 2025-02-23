import React, { useEffect, useState } from 'react';

function ProductModal({ productId, onClose, onAddToCart }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error('Error fetching product:', err));
    }
  }, [productId]);

  if (!productId || !product) return null;

  const rating = product.rating?.rate || 0;
  const reviewsCount = product.rating?.count || 0;
  const inStock = reviewsCount > 0;

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => Math.max(1, q - 1));



  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart();
    }
    setNotification('Product added to cart');
    setTimeout(() => {
      setNotification('');
      onClose();
    }, 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          width: '90%',
          maxWidth: '600px',
          borderRadius: '10px',
          padding: '20px',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: 'none',
            background: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>


        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
          }}
        >

          <div style={{ flex: '1' }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                maxWidth: '250px',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </div>


          <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ marginBottom: '10px', color: '#000' }}>
              {product.title}
            </h2>


            <div style={{ marginBottom: '10px', color: '#777' }}>
              <span style={{ marginRight: '10px', color: '#f1c40f' }}>
                ★ {rating.toFixed(1)} ({reviewsCount} reviews)
              </span>
              <span style={{ color: inStock ? 'green' : 'red' }}>
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>


            <p style={{ marginBottom: '10px', color: '#555', lineHeight: '1.4' }}>
              {product.description}
            </p>


            <div
              style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: '#333',
              }}
            >
              ${product.price.toFixed(2)}
            </div>


            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '15px',
              }}
            >
              <button
                onClick={handleDecrement}
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                -
              </button>
              <span style={{ fontSize: '1rem' }}>{quantity}</span>
              <button
                onClick={handleIncrement}
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#f1c40f', 
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                +
              </button>
            </div>


            <button
              onClick={handleBuyNow}
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '0.8rem 1.2rem',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              Buy Now
            </button>
          </div>
        </div>


        {notification && (
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '0.9rem',
            }}
          >
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductModal;
