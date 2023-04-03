import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const contextValue = useMemo(() => ({
    products,
    setProducts,
  }), [products]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
