import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/orderCard.css';
import { useHistory } from 'react-router-dom';

function OrderCard2(props) {
  const {
    id,
    status,
    saleDate,
    totalPrice,
  } = props;
  const history = useHistory();
  return (
    <section
      className="c-order-card"
      onClick={ () => history.push(`/customer/orders/${id}`) }
      role="button"
      tabIndex="0"
      onKeyDown={ (e) => {
        if (e.key === 'Enter') {
          history.push(`/customer/orders/${id}`);
        }
      } }
    >
      <div
        className="c-order-number"
      >
        <span>Pedido</span>
        <span data-testid={ `customer_orders__element-order-id-${id}` }>{id}</span>
      </div>
      <div className="c-order-details">
        <div className="wrapper-order2-status">
          <span
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            {status}
          </span>
          <div className="wrapper-order-info">
            <span
              data-testid={ `customer_orders__element-order-date-${id}` }
            >
              {saleDate}
            </span>
            <span
              data-testid={ `customer_orders__element-card-price-${id}` }
            >
              { totalPrice }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

OrderCard2.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default OrderCard2;
