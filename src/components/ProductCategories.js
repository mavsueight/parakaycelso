import React from 'react';
import { Link } from 'react-router-dom';

function ProductCategories() {
  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        <li><Link to="/fruits">Fruits</Link></li>
        <li><Link to="/vegetables">Vegetables</Link></li>
        <li><Link to="/dairy">Dairy</Link></li>
        <li><Link to="/meat">Meat</Link></li>
        <li><Link to="/organic">Organic</Link></li>
        <li><Link to="/bakery">Bakery</Link></li>
      </ul>
    </div>
  );
}

export default ProductCategories;
