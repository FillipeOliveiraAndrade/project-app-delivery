import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../context/CartContext';
import '../styles/components/cart.css';

function Cart() {
  const history = useHistory();
  const { cart: { total } } = useContext(CartContext);

  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
      onClick={ () => history.push('/customer/checkout') }
      className="btn-cart"
      disabled={ total === 0 }
    >
      <span>Ver carrinho: </span>
      <span data-testid="customer_products__checkout-bottom-value">
        { total.toFixed(2).toString().replace('.', ',') }
      </span>
    </button>
  );
}

export default Cart;
