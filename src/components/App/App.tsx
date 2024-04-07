import style from './App.module.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Services from '../Main/Services/Services';
import History from '../Main/History/History';
import SellHistory from '../Main/SellHistory/SellHistory';
import CatalogSubscriptions from '../Main/CatalogSubscriptions/CatalogSubscriptions';
import CategoriesMovie from '../Main/CategoriesMovie/CategoriesMovie';
import MySubscriptions from '../Main/MySubscriptions/MySubscriptions';
import ManageSubscription from '../Main/ManageSubscription/ManageSubscription';
import Autopayment from '../Main/Autopayment/Autopayment';
import Subscribe from '../Main/Subscribe/Subscribe';
import AboutSubscribe from '../Main/AboutSubscribe/AboutSubscribe';
import SubscriptionPayment from '../Main/SubscriptionPayment/SubscriptionPayment';
import ManageSubscriptionWaitId from '../Main/ManageSubscriptionWaitId/ManageSubscriptionWaitId';

export default function App() {
  const location = useLocation();

  if (location.pathname === '/') {
    return <Navigate to="/history" replace />;
  }

  return (
    <main className={style.app}>
      {location.pathname !== '/history' && <Header />}
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/history" element={<History />} />
        <Route path="/sell_history" element={<SellHistory />} />
        <Route path="/catalog" element={<CatalogSubscriptions />} />
        <Route path="/categories" element={<CategoriesMovie />} />
        <Route path="/subscriptions" element={<MySubscriptions />} />
        <Route path="/manage_subcription" element={<ManageSubscription />} />
        <Route path="/autopayment" element={<Autopayment />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/subscribe/id" element={<AboutSubscribe />} />
        <Route path="/subscription_payment" element={<SubscriptionPayment />} />
        <Route path="/manage_subcription/id" element={<ManageSubscriptionWaitId />} />
      </Routes>
    </main>
  );
}
