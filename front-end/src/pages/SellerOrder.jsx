import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import '../styles/pages/sellerOrder.css';

export default function SellerOrder() {
  return (
    <div>
      <Header />
      <div className="c-seller-order">
        <OrderCard />
      </div>
    </div>
  );
}
