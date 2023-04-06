import React, { Component } from 'react';
import HeaderCustomer from '../components/HeaderCustomer';
import OrderDetailCard from '../components/OrderDetailCard';

export default class CustomerOrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDetails: [],
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const parts = url.split('/');
    const num = parts[parts.length - 1];
    fetch(`http://localhost:3001/customer/orders/${num}`)
      .then((res) => res.json())
      .then((data) => this.setState({ orderDetails: data }));
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
    const { orderDetails } = this.state;
    console.log(orderDetails.products);
    return (
      <>
        <h1>CustomerOrderDetails</h1>
        <HeaderCustomer />
        {orderDetails.sale && (<OrderDetailCard
          key={ orderDetails.sale.id }
          id={ orderDetails.sale.id }
          status={ orderDetails.sale.status }
          saleDate={ this.formatDate(orderDetails.sale.sale_date) }
          totalPrice={ orderDetails.sale.totalPrice }
          products={ orderDetails.products }
          seller={ orderDetails.sale.seller.name }
        />)}
      </>
    );
  }
}
