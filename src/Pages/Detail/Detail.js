import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import loading_img from "../../images/loading_img.jpg";
import "./Detail.css";

const Detail = () => {
  const product = useParams();
  const [productDetail, setProductDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const url = `https://fakestoreapi.com/products/${product.id}`;

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setError(false);
          setIsLoaded(true);
          setProductDetails(res);
        });
    } catch (err) {
      setError(true);
      setProductDetails([]);
      setIsLoaded(true);
    }
  }, [url]);

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
      <div className="product-description">
        <h3>{productDetail.title}</h3>
        <img src={productDetail.image} alt="product img" />
        <p className="product-description-para">{productDetail.description}</p>
        <div className="product-features">
          <p>$ {productDetail.price}</p>
          <p>{productDetail.category}</p>
        </div>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    );
  }
};

export default Detail;
