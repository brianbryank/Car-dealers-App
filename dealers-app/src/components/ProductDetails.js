import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { index } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://ecommerce.muersolutions.com/api/v1/products/`)
      .then(response => response.json())
      .then(data => {
        console.log(data[index]);
        setProduct(data[index]);
      })
      .catch(error => console.error(error));
  }, [index]);

  return (
    <div className="card-container-one">
      <div key={index} className="card-one">
        <div className="card-side card-image">
          <img src={product.product_full_image} alt={product.product_name} />
        </div>
        <div className="card-side card-details">
          <h1>{product.product_name}</h1>
          <p>{product.product_description}</p>
          <ul>
            <li>Ranking: {product.ranking}</li>
            <li>Unit Price: ${product.unit_price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
