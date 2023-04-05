import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerOrder from './pages/SellerOrder';
import SellerOrderDetails from './pages/SellerOrderDetails';
import Admin from './pages/Admin';
import CartProvider from './context/CartProvider';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/admin/manage" component={ Admin } />
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <CartProvider>
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders" component={ CustomerOrders } />
        <Route exact path="/customer/orders/:id" component={ CustomerOrderDetails } />
      </CartProvider>
      <Route exact path="/seller/orders" component={ SellerOrder } />
      <Route exact path="/seller/orders/:id" component={ SellerOrderDetails } />
    </Switch>
  );
}
