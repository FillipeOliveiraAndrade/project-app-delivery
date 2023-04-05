import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import CartContext from './CartContext';

const INITIAL_STATE = {
  items: [],
  total: 0,
};

export default function CartProvider({ children }) {
  const cartStorage = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState(cartStorage ?? INITIAL_STATE);
  localStorage.setItem('cart', JSON.stringify(cart));

  const updateCart = useCallback((product) => {
    const productExist = cart.items.find((item) => item.id === product.id);
    const filteredCart = cart.items.filter((item) => item.id !== product.id);

    if (!productExist) {
      setCart((prevState) => ({ ...prevState, items: [...prevState.items, product] }));
    }

    if (product.quantity > 0) {
      setCart((prevState) => ({ ...prevState, items: [...filteredCart, product] }));
    }

    if (product.quantity === 0) {
      setCart((prevState) => ({ ...prevState, items: filteredCart }));
    }
  }, [cart]);

  const getProductById = useCallback(
    (id) => cart.items.find((item) => item.id === id),
    [cart.items],
  );

  const removeItemFromCheckout = useCallback((id) => {
    const filteredCart = cart.items.filter((item) => item.id !== id);
    setCart((prevState) => ({ ...prevState, items: filteredCart }));
  }, [cart.items]);

  const sumCartItems = useCallback(() => cart.items.reduce((acc, cur) => {
    const value = cur.quantity * cur.price;

    return acc + value;
  }, 0), [cart.items]);

  useEffect(() => {
    setCart((prev) => ({ ...prev, total: sumCartItems() }));
  }, [cart.items, sumCartItems]);

  const carContextValue = useMemo(() => ({
    cart,
    updateCart,
    getProductById,
    removeItemFromCheckout,
  }), [cart, updateCart, getProductById, removeItemFromCheckout]);

  return (
    <CartContext.Provider value={ carContextValue }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
