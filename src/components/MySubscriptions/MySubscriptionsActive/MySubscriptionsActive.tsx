import { Box } from '@mui/material';
import Title from '../../Titile/Titile';
import MySubscriptionsActiveCard from './MySubscriptionsActiveCard/MySubscriptionsActiveCard';
import { MySubscriptionsActiveCardData, MySubscriptionsActiveData } from '../../../utils/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MySubscriptionsActive() {
  const navigate = useNavigate();
  const styles = {
    container: { margin: '16px 0  0  ' },
    text: { display: 'flex', margin: '0 20px' },
    subtitle: {
      color: '#E86513',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      textAlign: 'start',
      lineHeight: '1.25',
      marginTop: '24px'
    }
  };

  const handleOpen = () => {
    navigate('/manage_subcription ');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.text}>
          <Title title={MySubscriptionsActiveData.title}></Title>
        </Box>
      </Box>

      {MySubscriptionsActiveCardData.card.map((card, index) => (
        <React.Fragment key={index}>
          <MySubscriptionsActiveCard card={card} onClick={card.isActive ? handleOpen : undefined} />
        </React.Fragment>
      ))}
    </>
  );
}
