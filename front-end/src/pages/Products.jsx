import React, { useContext, useEffect } from 'react';

import { requestProducts } from '../services/requests';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import Context from '../context/Context';

export default function Producs() {
  const {
    products,
    setProducts,
  } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await requestProducts('/products');
      setProducts(data);
    };

    fetchData();
  }, [setProducts]);

  return (
    <>
      <Header />
      <h1>Products</h1>
      {
        products.map((product) => (
          <ProductsCard
            key={ product.name }
            index={ product.id }
            product={ product }
          />
        ))
      }
    </>
  );
}
