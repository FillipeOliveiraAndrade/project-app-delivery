import PropTypes from 'prop-types';
import { useContext } from 'react';
import context from '../context/CartContext';
import '../styles/components/tableItens.css';

export default function TableItens({ order, index }) {
  const { removeItemFromCheckout } = useContext(context);
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        className="td-item"
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
        className="td-description"
      >
        {order.name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        className="td-quantity td-tbody"
      >
        {order.quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        className="td-price td-tbody"
      >
        {order.price.toFixed(2).replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        className="td-sub-total td-tbody"
      >
        {(order.price * order.quantity).toFixed(2).replace('.', ',')}
      </td>
      <td className="td-remove">
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
