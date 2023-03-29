import { Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerOrder from './pages/SellerOrder';
import SellerOrderDetails from './pages/SellerOrderDetails';
import Admin from './pages/Admin';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders" component={ CustomerOrders } />
      <Route exact path="/customer/orders/:id" component={ CustomerOrderDetails } />
      <Route exact path="/seller/orders" component={ SellerOrder } />
      <Route exact path="/seller/orders/:id" component={ SellerOrderDetails } />
      <Route exact path="/admin/manage" component={ Admin } />
    </Switch>
  );
}
