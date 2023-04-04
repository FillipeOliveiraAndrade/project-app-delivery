import React, { useContext, useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import HeaderProducts from '../components/HeaderProducts';
import TableItens from '../components/TableItens';
import context from '../context/CartContext';
// import { checkout } from '../services/requests';
import '../styles/components/tableItens.css';

export default function Checkout() {
  // const history = useHistory();
  const { cart } = useContext(context);
  const [isDisabled, setIsDisabled] = useState(true);
  // const [cart, setCart] = useState([]);
  const [sellersInfo, setSellersInfo] = useState([]);
  // const [total, setTotal] = useState('0.00');
  const [customerInfo, setCustomerInfo] = useState(
    { sellerId: '', deliveryAddress: '', deliveryNumber: '' },
  );

  useEffect(() => {
    const fetchSellers = async () => {
      const result = await fetch('http://localhost:3000/customer/checkout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: JSON.parse(localStorage.getItem('user')).token,
        },
      });
      const data = await result.json();
      setSellersInfo(data);
    };
    fetchSellers();

    // setCart(JSON.parse(localStorage.getItem('cart')));
  }, []);

  console.log(cart);

  useEffect(() => {
    setIsDisabled(
      !customerInfo.deliveryAddress.length > 0
      || !customerInfo.deliveryNumber.length > 0,
    );
  }, [customerInfo]);

  // const formatTotal = (newTotal) => {
  //   const strTotal = Number(newTotal).toFixed(2);
  //   const formatedTotal = strTotal.replace('.', ',');
  //   return formatedTotal;
  // };

  // useEffect(() => {
  //   const newTotal = cart.reduce((acc, order) => {
  //     const floatPrice = parseFloat(order.price);
  //     acc += floatPrice * order.quantity;
  //     return acc;
  //   }, 0);

  //   setTotal(newTotal);
  // }, [orders]);

  const handleChange = ({ target: { name, value } }) => {
    setCustomerInfo((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  // const handleFinalize = async (event) => {
  //   event.preventDefault();

  //   const result = await checkout({
  //     ...customerInfo,
  //     totalPrice: total,
  //     products: orders,
  //   });

  //   history.push(`/customer/orders/${result.id}`);
  // };

  const data = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
    'Remover Item',
  ];

  return (
    <section>
      { console.log('cartItems', cart.items)}
      <HeaderProducts />
      <section className="main-section">
        <h1>Finalizar Pedido</h1>
        <table>
          <thead>
            <tr>
              {data.map((item) => (
                <th key={ item }>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              cart
                && (
                  cart.items.map((order, index) => (
                    <TableItens order={ order } key={ order.id } index={ index } />
                  ))
                )
            }
          </tbody>
        </table>
        <section>
          <span>Total: </span>
          <span data-testid="customer_checkout__element-order-total-price">
            {cart.total.toFixed(2).replace('.', ',')}
          </span>
        </section>
      </section>
      <section className="address-section">
        <h2>Detalhes e Endereço para Entrega</h2>
        <form className="form-address">
          <label htmlFor="sellerId" className="fields-address">
            <span>P. Vendedora Responsável</span>
            <br />
            <select
              id="sellerId"
              name="sellerId"
              data-testid="customer_checkout__select-seller"
              onChange={ handleChange }
              value={ customerInfo.sellerId }
            >
              {
                sellersInfo.map((seller) => (
                  <option value={ seller.id } key={ seller.id }>
                    {seller.name}
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="deliveryAddress" className="fields-address">
            <span>Endereço</span>
            <br />
            <input
              className="address"
              id="deliveryAddress"
              data-testid="customer_checkout__input-address"
              type="text"
              name="deliveryAddress"
              value={ customerInfo.deliveryAddress }
              onChange={ handleChange }
              placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
              min="0"
            />
          </label>
          <label htmlFor="deliveryNumber" className="fields-address">
            <span>Número</span>
            <br />
            <input
              id="deliveryNumber"
              data-testid="customer_checkout__input-address-number"
              type="text"
              name="deliveryNumber"
              value={ customerInfo.deliveryNumber }
              onChange={ handleChange }
              placeholder="198"
              min="0"
            />
          </label>
        </form>
        <button
          className="button-submit"
          data-testid="customer_checkout__button-submit-order"
          type="submit"
          name="pedido"
          disabled={ isDisabled }
          // onClick={ handleFinalize }
        >
          FINALIZAR PEDIDO
        </button>
      </section>
    </section>
  );
}
