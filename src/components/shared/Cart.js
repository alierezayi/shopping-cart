import React from "react";

// Redux
import { decrease, increase, removeItem } from "../../redux/cart/cartAction";

// Functions
import { shorten } from "../../helper/functions";

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Styles
import styles from "./Cart.module.css"
import { useDispatch } from "react-redux";

const Cart = (props) => {
  const { image, title, price, quantity } = props.data;
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <img src={image} className={styles.productImage} alt="product" />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch(decrease(props.data))}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch(removeItem(props.data))
            }
          >
            <img src={trashIcon} alt="trash" style={{ width: "20px" }} />
          </button>
        )}
        <button onClick={()=> dispatch(increase(props.data))}>+</button>
      </div>
    </div>
  );
};

export default Cart;
