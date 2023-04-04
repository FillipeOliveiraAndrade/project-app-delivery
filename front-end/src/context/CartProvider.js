import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import CartContext from './CartContext';

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState('leo');

  const carContextValue = useMemo(() => ({
    cartItems,
    setCartItems,
  }), [cartItems]);

  return (
    <CartContext.Provider value={ carContextValue }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
