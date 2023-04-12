import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/orderDetailCard.css';

function OrderDetailCard(props) {
  const {
    id,
    status,
    saleDate,
    totalPrice,
    products,
    seller,
  } = props;
  return (
    <section className="c-main-section">
      <div
        className="c-general-info"
      >
        {/* <span>Pedido</span> */}
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
          className="order"
        >
          Pedido
          {' '}
          {id}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P.Vend:
          {' '}
          { seller }
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
          className="date"
        >
          {saleDate}
        </span>
        <span
          data-testid={
            `customer_order_details__element-order-details-label-delivery-status-${id}`
          }
          className={ `status-${status}` }
        >
          {status}
        </span>
        <button
          data-testid="customer_order_details__button-delivery-check"
          type="button"
          className="btn-entregue"
          disabled={ status === 'Pendente' }
        >
          Marcar como entregue
        </button>
      </div>
      <table className="c-productDetail">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { products && products.map((p, index) => (
            <tr key={ index + 1 }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
                className="td-item"
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-name-${index}`
                }
                className="td-description"
              >
                { p.Product.name}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index}`
                }
                className="td-quantity td-tbody"
              >
                { p.quantity}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${index}`
                }
                className="td-price td-tbody"
              >
                R$
                {(p.Product.price).toString().replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
                className="td-sub-total td-tbody sub-total"
              >
                R$
                { (p.Product.price * p.quantity)
                  .toFixed(2).toString().replace('.', ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="c-total">
        <span
          data-testid="customer_order_details__element-order-total-price"
        >
          { totalPrice }
        </span>
      </div>
    </section>
  );
}

const productType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
});

const productsType = PropTypes.shape({
  saleId: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  Product: productType.isRequired,
});

OrderDetailCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(productsType).isRequired,
  seller: PropTypes.string.isRequired,
};

export default OrderDetailCard;
