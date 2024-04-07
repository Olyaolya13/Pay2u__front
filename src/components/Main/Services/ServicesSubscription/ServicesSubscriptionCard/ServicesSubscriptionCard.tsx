import style from './ServicesSubscriptionCard.module.scss';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import TransitionIcon from '../../../../../assets/TransitionIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import {
  ServicesSubscriptionData,
  ServicesSubscriptionImageData
} from '../../../../../utils/constants';
import BlackSquareWithCounter from '../../../../BlackSquareWithCounter/BlackSquareWithCounterю';

const font = {
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '400',
  color: '#489865',
  lineHeight: '1.25'
};

const styles = {
  container: {
    position: 'relative',
    padding: '18px 16px 16px 20px',
    marginTop: '19px',
    display: 'flex',
    flexDirection: 'column',
    border: '.4px solid #E2E2E2',
    borderRadius: '16px',
    boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)'
  },
  containerImage: { display: 'flex', marginTop: '12px' },
  containerTitle: { display: 'flex', justifyContent: 'space-between' },
  containerSum: { display: 'flex', marginTop: '10px' },
  image: { width: '40px', height: '40px' },
  subtitle: {
    ...font,
    textAlign: 'center',
    fontSize: '14px',
    color: '#676879'
  },
  sum: {
    ...font,
    textAlign: 'center',
    fontSize: '14px',
    color: '#676879'
  }
};

export default function ServicesSubscriptionCard() {
  const navigate = useNavigate();
  const visibleImages = ServicesSubscriptionImageData.card.slice(0, 5);
  const hiddenCount = ServicesSubscriptionImageData.card.length - 5;

  const handleClick = () => {
    navigate('/subscriptions');
    window.scrollTo(0, 0);
  };
  return (
    <Card sx={styles.container} onClick={handleClick}>
      <Box sx={styles.containerTitle}>
        <Typography component="p" sx={{ ...font }}>
          {ServicesSubscriptionData.title}
        </Typography>
        <TransitionIcon onClick={handleClick} className={style.subscription__icon} />{' '}
      </Box>
      <Box sx={styles.containerImage}>
        {ServicesSubscriptionImageData.card.map((data, index) => (
          <CardMedia
            key={index}
            component="img"
            sx={{
              ...styles.image,
              marginLeft: index === 0 ? '0' : '-8px'
            }}
            image={data.image}
            alt={data.alt}
          />
        ))}
        {ServicesSubscriptionImageData.card.length === 4 && visibleImages && hiddenCount && (
          <BlackSquareWithCounter count={hiddenCount} />
        )}
      </Box>
      <Box sx={styles.containerSum}>
        <Typography component="p" sx={styles.subtitle}>
          {ServicesSubscriptionData.writeOff}
        </Typography>
        <Typography component="p" sx={styles.sum}>
          &nbsp;{ServicesSubscriptionData.sum} &#8381;
        </Typography>
      </Box>
    </Card>
  );
}
