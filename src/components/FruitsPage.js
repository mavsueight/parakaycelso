import React from 'react';

const FruitsPage = () => {
  const fruits = [
    { id: 1, name: 'Banana (1kg)', price: 65 },
    { id: 2, name: 'Mango (1kg)', price: 120 },
    { id: 3, name: 'Apple (1kg)', price: 150 },
    { id: 4, name: 'Watermelon', price: 180 },
    { id: 5, name: 'Pineapple', price: 90 },
    { id: 6, name: 'Orange (1kg)', price: 100 },
  ];

  const formatPeso = (amount) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(amount);
  };

  const handleAddToCart = (fruit) => {
    alert(`Added ${fruit.name} to cart!`);
  };

  return (
    <div style={styles.container}>
      <h2>Fruits</h2>
      <div style={styles.grid}>
        {fruits.map(fruit => (
          <div key={fruit.id} style={styles.card}>
            <h3>{fruit.name}</h3>
            <p>{formatPeso(fruit.price)}</p>
            <button style={styles.button} onClick={() => handleAddToCart(fruit)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default FruitsPage;
