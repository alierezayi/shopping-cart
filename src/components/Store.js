import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "./shared/Product";
import Loading from "./shared/Loading";

// Redux
import { fetchProducts } from "../redux/products/productsAction";

// Styles
import styles from "./Store.module.css";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    !productsState.products.length && dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      {productsState.loading ? (
        <Loading />
      ) : productsState.error ? (
        <p>{productsState.error}</p>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
