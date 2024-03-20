import './Header.css';
import { useLocation, Link } from 'react-router-dom';
import TimeIcon from '../../assets/HeaderIcon.svg?react';
import Arrow from '../../assets/HeaderArrow.svg?react';
import { Box, Typography } from '@mui/material';

import { HeaderData } from '../../utils/constants';

export default function Header() {
  const location = useLocation();

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '58px 16px 0 20px'
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
  } else if (location.pathname === '/sell-history') {
    title = HeaderData.sellHistory;
  } else if (location.pathname === '/subscriptions') {
    title = HeaderData.subscriptions;
  } else if (location.pathname === '/catalog') {
    title = HeaderData.catalog;
  }

  const handleBackClick = () => {
    console.log('click back');
  };

  return (
    <Box sx={styles.container}>
      <Arrow className="header__arrow" onClick={handleBackClick} />
      <Typography component="h2" sx={styles.title}>
        {title}
      </Typography>
      {location.pathname === '/services' && (
        <Link to="/sell-history" className="header__link">
          <TimeIcon className="header__icon" />
        </Link>
      )}
    </Box>
  );
}
