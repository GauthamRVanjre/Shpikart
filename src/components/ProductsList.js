import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loading_img from "../images/loading_img.jpg";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
          setError(false);
          setIsLoaded(true);
          setProducts(res);
        });
    } catch (err) {
      setError(true);
      setProducts([]);
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) {
    return (
      <>
        <img className="loading_img" src={loading_img} alt="loading_img" />
      </>
    );
  } else if (error) {
    return <>Something went wrong....</>;
  } else {
    return (
      <div className="productList">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-4 product-card">
                <div
                  key={product.id}
                  className="card"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="product_image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 10)}...
                    </h5>
                    <Link to={`/product/${product.id}`}>
                      <p className="card-text">
                        {product.description.substring(0, 30)}
                        ...
                      </p>
                    </Link>
                    <div className="product-features">
                      <span>$ {product.price}</span>
                      <span>{product.category}</span>
                    </div>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default ProductsList;
