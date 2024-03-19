import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Services from '../Services/Services';

const AppRouter: React.FC = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
    </main>
  );
};

export default AppRouter;
