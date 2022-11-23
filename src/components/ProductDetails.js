import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import axios from "axios";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

// Components
// import { BASE_URL } from "../services/api";

// Styles
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  //   useEffect(() => {
  //     const [data, setData] = useState([]);
  //     axios.get(`${BASE_URL}/products/${id}`).then((response) => setData(response.data));
  //   }, []);

  const { id } = useParams();

  const data = useSelector(state => state.productsState);
  const product = data.products[id - 1];
  const { title, price, description, category, image } = product;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>Category:</span> {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price}$</span>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
