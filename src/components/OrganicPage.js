import React from 'react';

const OrganicPage = () => {
  const organic = [
    { id: 1, name: 'Organic Spinach (1kg)', price: 120 },
    { id: 2, name: 'Organic Tomatoes (1kg)', price: 150 },
    { id: 3, name: 'Organic Carrots (1kg)', price: 130 },
    { id: 4, name: 'Organic Cucumbers (1kg)', price: 100 },
    { id: 5, name: 'Organic Bell Peppers (1kg)', price: 180 },
    { id: 6, name: 'Organic Lettuce (1 head)', price: 90 },
  ];

  const formatPeso = (amount) => new Intl.NumberFormat('en-PH', {
    style: 'currency', currency: 'PHP',
  }).format(amount);

  const handleAddToCart = (item) => alert(`Added ${item.name} to cart!`);

  return (
    <div style={styles.container}>
      <h2>Organic Products</h2>
      <div style={styles.grid}>
        {organic.map(item => (
          <div key={item.id} style={styles.card}>
            <h3>{item.name}</h3>
            <p>{formatPeso(item.price)}</p>
            <button style={styles.button} onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '30px', textAlign: 'center' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px', marginTop: '20px',
  },
  card: {
    border: '1px solid #ccc', borderRadius: '12px',
    padding: '15px', backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  button: {
    marginTop: '10px', padding: '10px 15px',
    backgroundColor: '#2e7d32', color: '#fff',
    border: 'none', borderRadius: '6px', cursor: 'pointer',
  },
};

export default OrganicPage;
