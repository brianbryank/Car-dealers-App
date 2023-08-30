import React, { useState, useEffect } from 'react';

const ProductList = ({ products, onItemClick }) => {
  return (
    <div>
      <h3>Product List</h3>
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
