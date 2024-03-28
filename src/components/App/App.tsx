import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Services from '../Services/Services';
import History from '../History/History';
import SellHistory from '../SellHistory/SellHistory';
import CatalogSubscriptions from '../CatalogSubscriptions/CatalogSubscriptions';
import CategoriesMovie from '../CategoriesMovie/CategoriesMovie';
import MySubscriptions from '../MySubscriptions/MySubscriptions';
import ManageSubscription from '../ManageSubscription/ManageSubscription';
import { useEffect, useState } from 'react';
import * as Api from '../../utils/utils';
import Autopayment from '../Autopayment/Autopayment';

const AppRouter: React.FC = () => {
  const location = useLocation();
  const [service, setService] = useState('');

  if (location.pathname === '/') {
    return <Navigate to="/history" replace />;
  }

  // useEffect(() => {
  //   Api.getServices()
  //     .then(data => {
  //       setService(data);
  //       console.log('Services', data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <main>
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
      </Routes>
    </main>
  );
};

export default AppRouter;
