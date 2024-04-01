import { Box, CardMedia, Typography } from '@mui/material';
import SubscribeCardIcon from '../../../assets/SubscribeCardIcon.svg?react';
import { SubscribeCardData } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';

export default function SubscribeCard() {
  const navigate = useNavigate();
  const styles = {
    container: {
      margin: '10px 25px 0 20px  ',
      padding: '16px 0 ',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    card: { display: 'flex', alignItems: 'center' },
    text: {
      textAlign: 'start',
      marginLeft: '16px'
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400'
    },
    subtitle: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      color: '#676879'
    },
    image: { width: '40px', height: '40px' }
  };

  const handleOpen = () => {
    const stateData = {
      image: SubscribeCardData.image,
      title: SubscribeCardData.title
    };

    navigate('/subscribe/id', { state: stateData });
    window.scroll(0, 0);
  };

  return (
    <Box sx={styles.container} onClick={handleOpen}>
      <Box sx={styles.card}>
        <CardMedia
          component="img"
          sx={styles.image}
          image={SubscribeCardData.image}
          alt={SubscribeCardData.alt}
        />

        <Box sx={styles.text}>
          <Typography component="p" sx={styles.title}>
            {SubscribeCardData.title}
          </Typography>
          <Typography component="p" sx={styles.subtitle}>
            {SubscribeCardData.about}
          </Typography>
        </Box>
      </Box>
      <SubscribeCardIcon />
    </Box>
  );
}
