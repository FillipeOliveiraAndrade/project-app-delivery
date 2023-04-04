import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import context from '../context/Context';
import CartContext from '../context/CartContext';
import '../styles/components/cart.css';

function Cart() {
  const history = useHistory();
  // const { productsInTheCart } = useContext(context);
  const { cart: { total } } = useContext(CartContext);

  // const [totalPrice, setTotalPrice] = useState(0);

  // const cartItems = JSON.parse(localStorage.getItem('shoppingCart'));
  // useEffect(() => {
  //   if (cartItems) {
  //     const cartTotalPrice = productsInTheCart.reduce(
  //       (total, item) => total + Number(item.price || item.unitPrice),
  //       0,
  //     );
  //     setTotalPrice(cartTotalPrice);
  //   }
  // }, [productsInTheCart, cartItems]);

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
        {/* { (totalPrice.toFixed(2)).toString().replace('.', ',') } */}
        { total.toFixed(2).toString().replace('.', ',') }
      </span>
    </button>
  );
}

export default Cart;
