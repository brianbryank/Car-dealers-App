import React, { useState, useEffect } from 'react';

const ProductList = ({ products, onItemClick }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
          <img src={product.image}/>
              {product.name}
              <button onClick={() => onItemClick(product)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
