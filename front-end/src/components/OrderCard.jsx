import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../styles/components/orderCard.css';

function OrderCard({
  orderId,
  status,
  saleDate,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
}) {
  const dateFormat = moment.utc(saleDate).format('DD/MM/YY');

  return (
    <section className="c-order-card">
      <div
        className="c-order-number"
        data-testid="seller_orders__element-order-id-<id>"
      >
        <span>Pedido</span>
        <span>{orderId}</span>
      </div>
      <div className="c-order-details">
        <div className="wrapper-order-status">
          <span
            data-testid="seller_orders__element-delivery-status-<id>"
          >
            {status}
          </span>
          <div className="wrapper-order-info">
            <span
              data-testid="seller_orders__element-order-date-<id>"
            >
              {dateFormat}
            </span>
            <span
              data-testid="seller_orders__element-card-price-<id>"
            >
              R$
              {' '}
              {totalPrice}
            </span>
          </div>
        </div>
        <div className="c-address">
          <span
            data-testid="seller_orders__element-card-address-<id>"
          >
            {deliveryAddress}
          </span>
          <span>{deliveryNumber}</span>
        </div>
      </div>
    </section>
  );
}

OrderCard.propTypes = {
  orderId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
};

export default OrderCard;
