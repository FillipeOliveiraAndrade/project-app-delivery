import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/header.css';

function Header({ userName }) {
  return (
    <header className="c-navbar">
      <a
        href="/seller/orders"
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
        {userName}
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

Header.propTypes = {
  userName: PropTypes.string,
}.isRequired;

export default Header;
