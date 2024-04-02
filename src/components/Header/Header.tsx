import './Header.css';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import TimeIcon from '../../assets/HeaderIcon.svg?react';
import Arrow from '../../assets/HeaderArrow.svg?react';
import ArrowWhite from '../../assets/ArrowWhite.svg?react';
import { Box, Typography } from '@mui/material';

import { HeaderData } from '../../utils/constants';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '58px 22px 0'
    },
    title: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '16px',
      width: '311px',
      lineHeight: '1.25'
    }
  };

  let title = '';

  if (location.pathname === '/services') {
    title = HeaderData.services;
  } else if (location.pathname === '/sell_history') {
    title = HeaderData.sellHistory;
  } else if (location.pathname === '/subscriptions') {
    title = HeaderData.subscriptions;
  } else if (location.pathname === '/catalog') {
    title = HeaderData.catalog;
  } else if (location.pathname === '/manage_subcription') {
    title = HeaderData.manageSubcription;
  } else if (location.pathname === '/categories') {
    title = HeaderData.categories;
  } else if (location.pathname === '/subscribe') {
    title = HeaderData.subscribe;
  } else if (location.pathname === '/subscription_payment') {
    title = HeaderData.subscriptionPayment;
  } else if (location.pathname === '/autopayment') {
    title = HeaderData.autopayment;
  }

  const handleBackClick = () => {
    navigate(-1);
    window.scroll(0, 0);
  };

  return (
    <Box
      sx={{
        ...styles.container,
        backgroundColor: location.pathname === '/subscribe/id' ? '#2B2D32' : 'transparent'
      }}
    >
      {location.pathname === '/subscribe/id' ? (
        <ArrowWhite className="header__arrow" onClick={handleBackClick} />
      ) : (
        <Arrow className="header__arrow" onClick={handleBackClick} />
      )}
      <Typography component="h2" sx={styles.title}>
        {title}
      </Typography>
      {location.pathname === '/services' && (
        <Link to="/sell_history" className="header__link">
          <TimeIcon className="header__icon" />
        </Link>
      )}
    </Box>
  );
}
