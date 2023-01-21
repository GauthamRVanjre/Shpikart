import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loading_img from "../images/loading_img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE } from "../redux/actions/action";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getData = useSelector((state) => state.cartReducer.cart);

  // redux operations
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(ADD(product));
  };

  const removeProduct = (id) => {
    dispatch(REMOVE(id));
  };

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
              <div className="col-sm-12 col-md-6 col-lg-4 product-card">
                <div
                  key={product.id}
                  className="card"
                  style={{ width: "18rem" }}
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="product_image"
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 10)}...
                    </h5>
                    <p className="card-text">
                      {product.description.substring(0, 30)}
                      ...
                    </p>

                    <p className="product-price">Price: $ {product.price}</p>
                    {getData.some((item) => item.id === product.id) ? (
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="btn btn-danger"
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addProduct(product)}
                        className="btn btn-primary"
                      >
                        Add to Cart
                      </button>
                    )}
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
