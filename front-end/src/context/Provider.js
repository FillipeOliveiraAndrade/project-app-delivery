import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loggedUser, setLoggedUser] = useState({
    name: '',
    email: '',
    token: '',
    role: '',
  });

  const contextValue = useMemo(() => ({
    orders,
    setOrders,
    loggedUser,
    setLoggedUser,
    products,
    setProducts,
  }), [orders, loggedUser, products]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
