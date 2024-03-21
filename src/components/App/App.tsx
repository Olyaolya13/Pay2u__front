import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Services from '../Services/Services';
import History from '../History/History';
import SellHistory from '../SellHistory/SellHistory';

const AppRouter: React.FC = () => {
  const location = useLocation();


  if (location.pathname === '/') {
    return <Navigate to="/history" replace />;
  }

  return (
    <main>
     {location.pathname !== '/history' && <Header />}
    <Routes>
      <Route path="/services" element={<Services />} />
      <Route path="/history" element={<History />} /> 
      <Route path='/sell-history' element={<SellHistory/>}/>
    </Routes>
  </main>
  );
};

export default AppRouter;
