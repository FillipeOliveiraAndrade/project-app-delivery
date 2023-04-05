import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import context from '../context/Context';
import '../styles/components/headerProducts.css';

export default function HeaderProducts() {
  // const history = useHistory();
  const { loggedUser } = useContext(context);

  // const handleRedirectProducts = () => {
  //   history.push('/customer/products');
  // };

  // const handleRedirectOrders = () => {
  //   history.push('/customer/orders');
  // };

  // const handleLogout = () => {
  //   setLoggedUser({
  //     name: '',
  //     email: '',
  //     token: '',
  //     role: '' });
  //   history.push('/login');
  // };

  return (
    <header className="c-navbar">
      <a
        href="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
        className="item-navbar"
      >
        PRODUTOS
      </a>

      <a
        href="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
        className="meus-pedidos"
      >
        MEUS PEDIDOS
      </a>

      <p
        data-testid="customer_products__element-navbar-user-full-name"
        className="item-navbar"
      >
        { (loggedUser.name)
          ? loggedUser.name : 'Fulana da Silva' }
      </p>
      <a
        href="/login"
        data-testid="customer_products__element-navbar-link-logout"
        className="item-navbar"
      >
        Sair
      </a>
    </header>
  );
}
