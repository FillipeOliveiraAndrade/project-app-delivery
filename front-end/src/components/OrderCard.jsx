import moment from 'moment';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  function handleOrderDetails(id) {
    history.push(`/seller/orders/${id}`);
  }

  return (
    <section
      className="c-order-card"
      onClick={ () => handleOrderDetails(orderId) }
      role="button"
      tabIndex="0"
      onKeyDown={ (e) => {
        if (e.key === 'Enter') {
          handleOrderDetails(orderId);
        }
      } }
    >
      <div
        className="c-order-number"
        data-testid={ `seller_orders__element-order-id-${orderId}` }
      >
        <span>Pedido</span>
        <span>{orderId}</span>
      </div>
      <div className="c-order-details">
        <div className="wrapper-order-status">
          <span
            data-testid={ `seller_orders__element-delivery-status-${orderId}` }
            className={ `btn-status-${status}` }
          >
            {status}
          </span>
          <div className="wrapper-order-info">
            <span
              data-testid={ `seller_orders__element-order-date-${orderId}` }
            >
              {dateFormat}
            </span>
            <span
              data-testid={ `seller_orders__element-card-price-${orderId}` }
            >
              R$
              {' '}
              {totalPrice}
            </span>
          </div>
        </div>
        <div className="c-address">
          <span
            data-testid={ `seller_orders__element-card-address-${orderId}` }
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
  orderId: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.string,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.string,
}.isRequired;

export default OrderCard;
