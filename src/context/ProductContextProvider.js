import React, { useEffect, useState, createContext } from "react";

// API
import { getProducts } from "../services/api";

const ProductsContext = createContext();

const ProductContextProvider = (props) => {
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };

    fetchAPI();
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
