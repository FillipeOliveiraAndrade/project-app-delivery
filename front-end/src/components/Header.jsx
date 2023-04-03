import React from 'react';
import '../styles/components/header.css';

function Header() {
  return (
    <header className="c-navbar">
      <a
        href="/seller/orders/:id"
        data-testid="customer_products__element-navbar-link-orders"
        className="item-navbar"
      >
        Pedidos
      </a>
      <div className="c-empty" />
      <p
        data-testid="customer_products__element-navbar-user-full-name"
        className="item-navbar"
      >
        Fulana da silva
      </p>
      <a
        href="/seller/orders/:id"
        data-testid="customer_products__element-navbar-link-logout"
        className="item-navbar"
      >
        Sair
      </a>
    </header>
  );
}

export default Header;
