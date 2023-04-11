import React, { useContext, useEffect } from 'react';

import { requestProducts } from '../services/requests';
import ProductsCard from '../components/ProductsCard';
import HeaderCustomer from '../components/HeaderCustomer';
import Context from '../context/Context';
import Cart from '../components/Cart';
import '../styles/pages/products.css';

export default function Products() {
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await requestProducts('/products');
      setProducts(data);
    };

    fetchData();
  }, [setProducts]);

  return (
    <div className="c-products">
      <HeaderCustomer />
      <div className="c-cardProduct">
        {
          products.map((product) => (
            <ProductsCard
              key={ product.name }
              index={ product.id }
              product={ product }
            />
          ))
        }
      </div>
      <Cart />
    </div>
  );
}
