import React from 'react';

const BakeryPage = () => {
  const bakery = [
    { id: 1, name: 'Bread (Loaf)', price: 40 },
    { id: 2, name: 'Cinnamon Rolls (Pack of 6)', price: 80 },
    { id: 3, name: 'Croissant (Piece)', price: 50 },
    { id: 4, name: 'Muffins (Pack of 4)', price: 70 },
    { id: 5, name: 'Donuts (Pack of 6)', price: 60 },
    { id: 6, name: 'Cookies (Pack of 12)', price: 100 },
  ];

  const formatPeso = (amount) => new Intl.NumberFormat('en-PH', {
    style: 'currency', currency: 'PHP',
  }).format(amount);

  const handleAddToCart = (item) => alert(`Added ${item.name} to cart!`);

  return (
    <div style={styles.container}>
      <h2>Bakery</h2>
      <div style={styles.grid}>
        {bakery.map(item => (
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

export default BakeryPage;
