import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/orderCard.css';

function OrderDetailCard(props) {
  const {
    id,
    status,
    saleDate,
    totalPrice,
    products,
  } = props;

  return (
    <section className="c-order-card">
      <div
        className="c-order-number"
        data-testid={ `seller_orders__element-order-id-${id}` }
      >
        <span>Pedido</span>
        <span>{id}</span>
        <span>P.Vend: Lacuna</span>
      </div>
      <div className="c-order-details">
        <div className="wrapper-order-status">
          <span
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            {status}
          </span>
          <div className="wrapper-order-info">
            <span
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              {saleDate}
            </span>
            <span
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              { totalPrice }
            </span>
            <button type="button">Marcar como entregue</button>
          </div>
        </div>
        <div className="c-address">
          { products && products.map((p, index) => (
            <div key={ p.productId }>
              <span>{index + 1}</span>
              {/* <span>{ p.salesProducts[0].name}</span> */}
            </div>
          ))}
          <div>
            <span>Numero do item</span>
            <span>Nome do produto</span>
          </div>
          <div>
            <span>Numero do item</span>
            <span>Nome do produto</span>
          </div>
          <div>
            <span>Quantidade</span>
            <span>Valor Unitário</span>
            <span>Sub-Total</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderDetailCard;
