import React from 'react';
import '../styles/components/orderCard.css';

function OrderCard() {
  return (
    <section className="c-order-card">
      <div
        className="c-order-number"
        data-testid="seller_orders__element-order-id-<id>"
      >
        <span>Pedido</span>
        <span>0001</span>
      </div>
      <div className="c-order-details">
        <div className="wrapper-order-status">
          <span
            data-testid="seller_orders__element-delivery-status-<id>"
          >
            Pendente
          </span>
          <div className="wrapper-order-info">
            <span
              data-testid="seller_orders__element-order-date-<id>"
            >
              08/04/21
            </span>
            <span
              data-testid="seller_orders__element-card-price-<id>"
            >
              R$ 23,80
            </span>
          </div>
        </div>
        <div className="c-address">
          <span
            data-testid="seller_orders__element-card-address-<id>"
          >
            Rua Irmãos Monteiro, bairro pedras,
          </span>
          <span>851</span>
        </div>
      </div>
    </section>
  );
}

export default OrderCard;
