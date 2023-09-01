import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = ({ addToCart }) => {
  let { index } = useParams();
  const [product, setProduct] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);
  useEffect(() => {
    try {
      fetch("http://ecommerce.muersolutions.com/api/v1/products", {
        method: "GET",
        headers: { "Content-Security-Policy": "upgrade-insecure-requests" },
      })
        .then((res) => res.json())
        .then((data) => setProduct(data[index]));
    } catch (error) {
      alert(error);
    }
  }, [index]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true);
  };

  if (!product) {
    return <div>loading...</div>;
  }

  return (
    <div className="product-container">
      <div className="product">
        <img
          src={product.product_full_image}
          alt={product.product_name}
          className="product-image"
        />
        <p className="product-name">{product.product_name}</p>
        <h2 className="product-price">${product.unit_price}</h2>
        <h6>Description: {product.product_description}</h6>
        <p>Rank: {product.ranking}</p>
        <h6>Created On: {product.created}</h6>
        <button
          onClick={() => handleAddToCart(product)}
          className="add-to-cart-button"
          disabled={addedToCart}
        >
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
