import React from 'react';

const DairyPage = () => {
  const dairy = [
    { id: 1, name: 'Fresh Milk (1L)', price: 95 },
    { id: 2, name: 'Cheddar Cheese (250g)', price: 120 },
    { id: 3, name: 'Yogurt (500ml)', price: 70 },
    { id: 4, name: 'Butter (225g)', price: 110 },
    { id: 5, name: 'Cream Cheese (250g)', price: 130 },
    { id: 6, name: 'Chocolate Milk (1L)', price: 100 },
  ];

  const formatPeso = (amount) => new Intl.NumberFormat('en-PH', {
    style: 'currency', currency: 'PHP',
  }).format(amount);

  const handleAddToCart = (item) => alert(`Added ${item.name} to cart!`);

  return (
    <div style={styles.container}>
      <h2>Dairy Products</h2>
      <div style={styles.grid}>
        {dairy.map(item => (
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
  ... // same styles as above
};

export default DairyPage;
