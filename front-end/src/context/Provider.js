import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { requestData } from '../services/requests';

export default function Provider({ children }) {
  const [sales, setSales] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loggedUser, setLoggedUser] = useState({
    name: '',
    email: '',
    token: '',
    role: '',
  });

  useEffect(() => {
    async function fetchData() {
      const { data } = await requestData('/sales');
      setSales(data);
    }

    fetchData();
  }, []);

  const contextValue = useMemo(() => ({
    sales,
    orders,
    setOrders,
    loggedUser,
    setLoggedUser,
    products,
    setProducts,
  }), [orders, loggedUser, products, sales]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
