import PropTypes from 'prop-types';
import { useContext } from 'react';
import context from '../context/CartContext';
import '../styles/components/tableItens.css';

export default function TableItens({ order, index }) {
  const { removeItemFromCheckout } = useContext(context);

  // const handleCartRemove = (id) => {
  //   const filterOrders = cart.items.filter((product) => product.id !== id);
  //   setCart((prev) => ({
  //     ...prev,
  //     items: filterOrders,
  //   }));

  //   return filterOrders;
  // };

  return (
    <tr>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        {index + 1}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {order.name}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        {order.quantity}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        {order.price.toFixed(2).replace('.', ',')}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        {(order.price * order.quantity).toFixed(2).replace('.', ',')}
      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          name="remove"
          onClick={ () => removeItemFromCheckout(order.id) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

TableItens.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
