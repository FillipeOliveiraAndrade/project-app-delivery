import PropTypes from 'prop-types';
import { useContext } from 'react';
import context from '../context/Context';
import '../styles/components/tableItens.css';

export default function TableItens({ order, index }) {
  const { orders, setOrders } = useContext(context);

  const price = order.price.toFixed(2);
  const formatedPrice = price.replace('.', ',');

  const subTotal = () => {
    const total = (order.quantity * order.price).toFixed(2);
    return total.replace('.', ',');
  };

  const handleCartRemove = (productId) => {
    const filterOrders = orders.filter(({ id }) => id !== productId);
    setOrders(filterOrders);

    return filterOrders;
  };

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
        {formatedPrice}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        {subTotal()}
      </td>
      <td>
        <button
          data-testId={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          name="remove"
          onClick={ handleCartRemove(order.id) }
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
