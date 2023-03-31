import { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import '../styles/pages/sellerOrder.css';
import Context from '../context/Context';

export default function SellerOrder() {
  const [userLocaStorage, setUserLocaStorage] = useState({});
  const { sales } = useContext(Context);

  useEffect(() => {
    setUserLocaStorage(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <div>
      <Header
        userName={ userLocaStorage.name }
      />
      <div className="c-seller-order">
        {
          sales.map((sale) => (
            <OrderCard
              key={ sale.id }
              orderId={ sale.id }
              status={ sale.status }
              saleDate={ sale.sale_date }
              totalPrice={ sale.totalPrice }
              deliveryAddress={ sale.delivery_address }
              deliveryNumber={ sale.delivery_number }
            />
          ))
        }
      </div>
    </div>
  );
}
