import React, { useState, useEffect } from 'react';

const ProductList = ({ products, onItemClick }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href="#" onClick={() => onItemClick(product)}>
                <img src={product.image}/>
              {product.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
