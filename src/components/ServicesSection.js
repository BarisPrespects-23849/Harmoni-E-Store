import React from 'react';

function ServicesSection() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap', 
        gap: '2rem',
        padding: '60px 20px',
        backgroundColor: '#fff',
      }}
    >

      <div
        style={{
          textAlign: 'center',
          maxWidth: '250px',
          flex: '1 1 250px',
        }}
      >
        <img
          src="https://img.icons8.com/ios-filled/50/000000/delivery.png"
          alt="Delivery"
          style={{ marginBottom: '10px' }}
        />
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#333',
            textTransform: 'uppercase',
          }}
        >
          Free and Fast Delivery
        </h3>
        <p style={{ color: '#555', lineHeight: '1.4' }}>
          Get your orders delivered quickly to your doorstep.
        </p>
      </div>


      <div
        style={{
          textAlign: 'center',
          maxWidth: '250px',
          flex: '1 1 250px',
        }}
      >
        <img
          src="https://img.icons8.com/ios-filled/50/000000/customer-support.png"
          alt="Customer Service"
          style={{ marginBottom: '10px' }}
        />
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#333',
            textTransform: 'uppercase',
          }}
        >
          24/7 Customer Service
        </h3>
        <p style={{ color: '#555', lineHeight: '1.4' }}>
          We’re here to help you anytime you need us.
        </p>
      </div>


      <div
        style={{
          textAlign: 'center',
          maxWidth: '250px',
          flex: '1 1 250px',
        }}
      >
        <img
          src="https://img.icons8.com/ios-filled/50/000000/money.png"
          alt="Money Back Guarantee"
          style={{ marginBottom: '10px' }}
        />
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#333',
            textTransform: 'uppercase',
          }}
        >
          Money Back Guarantee
        </h3>
        <p style={{ color: '#555', lineHeight: '1.4' }}>
          Not satisfied? Get a full refund within 30 days.
        </p>
      </div>
    </section>
  );
}

export default ServicesSection;
