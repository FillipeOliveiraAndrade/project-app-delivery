import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../context/Context';

function ShoppingCart() {
  const history = useHistory();

  const { productsInTheCart } = useContext(context);

  const [totalPrice, setTotalPrice] = useState(0);

  const cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
  useEffect(() => {
    if (cartItems) {
      const cartTotalPrice = productsInTheCart.reduce(
        (total, item) => total + Number(item.price || item.unitPrice),
        0,
      );
      setTotalPrice(cartTotalPrice);
    }
  }, [productsInTheCart]);

  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
      onClick={ () => history.push('/customer/checkout') }
    >
      <p data-testid="customer_products__checkout-bottom-value">
        { (totalPrice.toFixed(2)).toString().replace('.', ',') }
      </p>
    </button>
  );
}

export default ShoppingCart;
