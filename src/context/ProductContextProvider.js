import React, { useEffect, useState, createContext } from "react";

// API
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };

    fetchAPI();
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
