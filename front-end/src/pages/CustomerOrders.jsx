import React, { Component } from 'react';
import HeaderCustomer from '../components/HeaderCustomer';
import OrderCard2 from '../components/OrderCard2';
import convertToReais from '../services/convertToReais';

export default class CustomerOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderInfo: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/customer/orders')
      .then((res) => res.json())
      .then((data) => this.setState({ orderInfo: data }));
  }

  formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  };

  render() {
    const { orderInfo } = this.state;
    console.log(orderInfo);

    return (
      <div>
        <h1>CustomerOrders</h1>
        <HeaderCustomer />
        {orderInfo.map((order) => (
          <OrderCard2
            data-testid={ `customer_products__element-order-date-${order.id}` }
            key={ order.id }
            id={ order.id }
            status={ order.status }
            saleDate={ this.formatDate(order.saleDate) }
            totalPrice={ convertToReais(order.totalPrice) }
          />
        ))}
        {/* <p>{orderInfo[0].id}</p> */}
      </div>
    );
  }
}
