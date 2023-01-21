import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ADD } from "../../redux/actions/action";
import { SUBTRACT } from "../../redux/actions/action";
import { REMOVE } from "../../redux/actions/action";
import { useDispatch } from "react-redux";

const Cart = () => {
  const [Price, setPrice] = useState(0);
  console.log(Price);
  const getData = useSelector((state) => state.cartReducer.cart);
  console.log(getData);
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
    setPrice(total);
  };

  useEffect(() => {
    totalPrice();
  }, [totalPrice]);

  return (
    <>
      <h1>Helloo cart</h1>
      {getData.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <h1>{item.price}</h1>
            <div style={{ padding: "20px" }}>
              <span onClick={() => subtractItem(item)}>-</span>
              <span style={{ padding: "20px" }}>{item.quantity}</span>
              <span onClick={() => addItem(item)}>+</span>
            </div>
            <button
              onClick={() => deleteItem(item.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
            <br />
            <br />
          </div>
        );
      })}

      <p>Total: ${Price}</p>
    </>
  );
};

// const compare = () => {let data = getData.filter((item) => item.id === id);if (data.length === 0) {return true;} else {return false;

export default Cart;
