import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "./shared/Cart";

// Redux
import { checkout, clear } from "../redux/cart/cartAction";

// Styles
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Items:</span> {state.itemsCounter}
          </p>
          <p>
            <span>Total Payment:</span> {`${state.total} $`}
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.clear} onClick={() => dispatch(clear())}>
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch(checkout())}
            >
              Check Out
            </button>
          </div>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3>Want to Buy ?</h3>
          <Link to="/products">Go to Shop</Link>
        </div>
      )}

      {state.checkout && (
        <div className={styles.complete}>
          <h3>Checked out Successfully</h3>
          <Link to="/products">Buy More!</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
