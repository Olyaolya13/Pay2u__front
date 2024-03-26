import { Box, Typography } from '@mui/material';
import Title from '../../Titile/Titile';
import InfoIcon from '../../../assets/InfoIcon.svg?react';
import MySubscriptionsWaitActiveCard from './MySubscriptionsWaitActiveCard/MySubscriptionsWaitActiveCard';
import {
  MySubscriptionsWaitActiveCardData,
  MySubscriptionsWaitActiveData
} from '../../../utils/constants';

export default function MySubscriptionsWaitActive() {
  const styles = {
    container: { margin: ' 0 20px ' },
    text: { display: 'flex' },
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
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.text}>
          <Title title={MySubscriptionsWaitActiveData.title}></Title> <InfoIcon />
        </Box>
        <Typography component="p" sx={styles.subtitle}>
          {MySubscriptionsWaitActiveData.subtitle} {MySubscriptionsWaitActiveData.period} г.
        </Typography>
      </Box>
      {MySubscriptionsWaitActiveCardData.card.map((card, index) => (
        <MySubscriptionsWaitActiveCard key={index} card={card} />
      ))}
    </>
  );
}
