import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ADD, SUBTRACT, REMOVE } from "../../redux/actions/action";
import { useDispatch } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const [Price, setPrice] = useState(0);
  const getData = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(ADD(item));
  };

  const subtractItem = (item) => {
    dispatch(SUBTRACT(item));
  };

  const deleteItem = (id) => {
    dispatch(REMOVE(id));
  };

  const totalPrice = () => {
    let total = 0;
    getData.map((item, key) => {
      total += item.price * item.quantity;
    });

    setPrice(total.toFixed(2));
  };

  useEffect(() => {
    totalPrice();
  }, [totalPrice]);

  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        Cart Page
      </h1>
      <div className="table-container">
        <table className="table table-striped table-hover">
          <thead className="table-heading">
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product details</th>
              <th scope="col">Remove Product</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">
                    <img className="item-img" src={item.image} alt="item-img" />
                  </th>

                  <td>
                    <div>
                      <p> Name : {item.title}</p>
                      <p>Price : {item.price}</p>
                      <div>
                        <span
                          className="quantity-changer"
                          onClick={() => subtractItem(item)}
                        >
                          -
                        </span>
                        <span style={{ padding: "20px" }}>{item.quantity}</span>
                        <span
                          className="quantity-changer"
                          onClick={() => addItem(item)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h1 style={{ textAlign: "center" }} className="Total-price">
        Total: ${Price}
      </h1>
    </>
  );
};

export default Cart;
