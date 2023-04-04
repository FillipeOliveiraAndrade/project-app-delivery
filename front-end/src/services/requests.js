import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const requestLogin = async (endpoint, body) => api.post(endpoint, body);

const requestProducts = async (endpoint) => api.get(endpoint);

export async function checkout(
  { products, sellerId, totalPrice, deliveryAddress, deliveryNumber },
) {
  try {
    const { data } = await api.post(
      '/customer/checkout',
      {
        products,
        sellerId: Number(sellerId),
        totalPrice,
        deliveryAddress,
        deliveryNumber: Number(deliveryNumber),
      },
      {
        headers: {
          authorization: JSON.parse(localStorage.getItem('user')).token,
        },
      },
    );

    return data;
  } catch (error) {
    return error;
  }
}

export async function sellers() {
  try {
    const { data } = await api.get('/seller');

    return data;
  } catch (error) {
    return error;
  }
}

export {
  requestLogin,
  requestProducts,
};
