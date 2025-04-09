import React from 'react';

const MeatPage = () => {
  const meat = [
    { id: 1, name: 'Chicken Breast (1kg)', price: 250 },
    { id: 2, name: 'Pork Belly (1kg)', price: 300 },
    { id: 3, name: 'Beef Sirloin (1kg)', price: 450 },
    { id: 4, name: 'Ground Beef (1kg)', price: 350 },
    { id: 5, name: 'Fish Fillet (1kg)', price: 400 },
    { id: 6, name: 'Lamb Chops (1kg)', price: 550 },
  ];

  const formatPeso = (amount) => new Intl.NumberFormat('en-PH', {
    style: 'currency', currency: 'PHP',
  }).format(amount);

  const handleAddToCart = (item) => alert(`Added ${item.name} to cart!`);

  return (
    <div style={styles.container}>
      <h2>Meat</h2>
      <div style={styles.grid}>
        {meat.map(item => (
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

export default MeatPage;
