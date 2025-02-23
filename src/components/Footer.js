import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '40px 20px',
      }}
    >

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 200px)', 
          gap: '20px',
          justifyContent: 'center',    
          textAlign: 'center',         
        }}
      >

        <div>
          <h4
            style={{
              marginBottom: '10px',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}
          >
            Exclusive
          </h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
            Subscribe
          </p>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.4', marginBottom: '10px' }}>
            Get 10% off your first order
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '0.5rem',
                borderRadius: '4px 0 0 4px',
                border: '1px solid #ccc',
                outline: 'none',
              }}
            />
            <button
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '0 4px 4px 0',
                backgroundColor: '#fff',
                color: '#000',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              ➤
            </button>
          </div>
        </div>

        {/* Column 2: Support */}
        <div>
          <h4
            style={{
              marginBottom: '10px',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}
          >
            Support
          </h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
            1234, Park Street<br />
            DL - 111, India
          </p>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
            test@stremail.com
          </p>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
            +91-999-999-9999
          </p>
        </div>


        <div>
          <h4
            style={{
              marginBottom: '10px',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}
          >
            Account
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              fontSize: '0.9rem',
              lineHeight: '1.6',
            }}
          >
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>


        <div>
          <h4
            style={{
              marginBottom: '10px',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}
          >
            Quick Link
          </h4>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              fontSize: '0.9rem',
              lineHeight: '1.6',
            }}
          >
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>


      <div
        style={{
          borderTop: '1px solid #444',
          paddingTop: '10px',
          textAlign: 'center',
          fontSize: '0.9rem',
        }}
      >
        © Copyright Harmoni 2025. All right reserved
      </div>
    </footer>
  );
}

export default Footer;
