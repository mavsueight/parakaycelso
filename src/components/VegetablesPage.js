import React from 'react';

const VegetablesPage = () => {
  const veggies = [
    { id: 1, name: 'Carrots (1kg)', price: 60 },
    { id: 2, name: 'Potatoes (1kg)', price: 55 },
    { id: 3, name: 'Cabbage (1 head)', price: 45 },
    { id: 4, name: 'Tomatoes (1kg)', price: 70 },
    { id: 5, name: 'Eggplant (1kg)', price: 65 },
    { id: 6, name: 'Onions (1kg)', price: 80 },
  ];

  const formatPeso = (amount) => new Intl.NumberFormat('en-PH', {
    style: 'currency', currency: 'PHP',
  }).format(amount);

  const handleAddToCart = (item) => alert(`Added ${item.name} to cart!`);

  return (
    <div style={styles.container}>
      <h2>Vegetables</h2>
      <div style={styles.grid}>
        {veggies.map(item => (
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

export default VegetablesPage;
