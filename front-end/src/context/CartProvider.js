import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import CartContext from './CartContext';

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const cartRef = useRef(cart);

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

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (cartFromLocalStorage) setCart(cartFromLocalStorage);
  }, []);

  useEffect(() => {
    if (cartRef.current !== cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
      cartRef.current = cart;
    }
  }, [cart]);

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
  }), [cart, updateCart]);

  return (
    <CartContext.Provider value={ carContextValue }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
