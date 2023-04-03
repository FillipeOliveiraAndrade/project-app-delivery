import React from 'react';
import './HeaderCustomer.css';
import { useHistory } from 'react-router-dom';

/*
  Os itens do navbar estão com a tag <button>,
  mas irei trocar para div, é temporário!
*/

function HeaderCustomer() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  const customerProducts = 'customer_products__element';
  const linkProducts = 'navbar-link-products';
  const linkOrders = 'navbar-link-orders';
  const userFullName = 'navbar-user-full-name';
  const logout = 'navbar-link-logout';

  function redirectForProducts() {
    history.push('/customer/products');
  }

  function redirectForCustomerOrders() {
    history.push('/customer/orders');
  }

  function logoutCustomer() {
    localStorage.removeItem('user');
  }

  return (
    <nav className="nav-container">
      <button
        type="button"
        data-testid={ `${customerProducts}-${linkProducts}` }
        onClick={ redirectForProducts }
      >
        Produtos
      </button>

      <button
        type="button"
        data-testid={ `${customerProducts}-${linkOrders}` }
        onClick={ redirectForCustomerOrders }
      >
        Meus Pedidos
      </button>

      <div data-testid={ `${customerProducts}-${userFullName}` }>
        { name }
      </div>

      <button
        type="button"
        data-testid={ `${customerProducts}-${logout}` }
        onClick={ logoutCustomer }
      >
        Sair
      </button>
    </nav>
  );
}

export default HeaderCustomer;
