import { useEffect, useState } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import '../styles/pages/sellerOrder.css';

// TODO:
//
export default function SellerOrder() {
  const [userLocaStorage, setUserLocaStorage] = useState({});

  useEffect(() => {
    setUserLocaStorage(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <div>
      <Header
        userName={ userLocaStorage.name }
      />
      <div className="c-seller-order">
        <OrderCard />
      </div>
    </div>
  );
}
