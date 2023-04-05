import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { requestData } from '../services/requests';

export default function Provider({ children }) {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await requestData('/sales');
      setSales(data);
    }

    fetchData();
  }, []);

  const contextValue = useMemo(() => ({
    sales,
    products,
    setProducts,
  }), [products, sales]);
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
