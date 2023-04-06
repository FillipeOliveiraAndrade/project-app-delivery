import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderProducts from '../components/HeaderProducts';
import TableItens from '../components/TableItens';
import carContext from '../context/CartContext';
import { requestSales } from '../services/requests';
// import { checkout } from '../services/requests';
import '../styles/components/tableItens.css';

export default function Checkout() {
  const history = useHistory();
  const { cart, setCart, INITIAL_STATE } = useContext(carContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [sellersInfo, setSellersInfo] = useState([{ id: 2, name: 'Fulana' }]);
  const [customerInfo, setCustomerInfo] = useState(
    { deliveryAddress: '', deliveryNumber: '' },
  );

  // TODO:
  // - pegar o email do usuário
  // - pegar o id do vendedor
  // - salvar as info na tabela sales e retornar o id

  async function checkout(event) {
    console.log('entrou');
    event.preventDefault();
    setSellersInfo([{ id: 2, name: 'Fulana' }]);

    const cartItems = cart.items
      .map(({ id, quantity }) => ({ productId: id, quantity }));

    const payload = {
      email: 'zebirita@email.com',
      sellerId: sellersInfo[0].id,
      totalPrice: cart.total,
      deliveryAddress: customerInfo.deliveryAddress,
      deliveryNumber: customerInfo.deliveryNumber,
      cartItems,
    };

    const { data: saleId } = await requestSales('/sales', payload);
    setCart(INITIAL_STATE);
    history.push(`/customer/orders/${saleId}`);
  }

  useEffect(() => {
    setIsDisabled(
      !customerInfo.deliveryAddress.length > 0
      || !customerInfo.deliveryNumber.length > 0,
    );
  }, [customerInfo]);

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
            {cart
              && cart.items.map((order, index) => (
                <TableItens
                  order={ order }
                  key={ order.id }
                  index={ index }
                />
              ))}
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
              value={ sellersInfo[0].name }
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
          onClick={ checkout }
        >
          FINALIZAR PEDIDO
        </button>
      </section>
    </section>
  );
}
