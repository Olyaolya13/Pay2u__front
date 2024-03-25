import './ServicesSubscriptionInfo.css';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TransitionIWhitecon from '../../../../assets/TransitionIWhitecon.svg?react';
import CloseIcon from '../../../../assets/CloseIcon.svg?react';
import { useState } from 'react';

export default function ServicesSubscriptionInfo() {
  const navigate = useNavigate();
  const styles = {
    container: {
      marginTop: '32px',
      position: 'relative',
      background: 'linear-gradient(to right, #0057D0 0%, #15B1FF 100%)',
      boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
      borderRadius: '16px',
      padding: '16px'
    },
    title: {
      fontFamily: 'Inter',
      color: '#F5F5F5',
      lineHeight: '1.25',
      fontWeight: '400',
      textAlign: 'start',
      paddingRight: '10px'
    },
    text: { display: 'flex', alignItems: 'center', marginTop: '10px' }
  };

  const handleOpen = () => {
    navigate('/history');
  };

  const [containerVisible, setContainerVisible] = useState(true);

  const handleClose = () => {
    setContainerVisible(false);
  };

  return (
    <Box sx={styles.container}>
      <Box>
        <Typography component="p" sx={styles.title}>
          Оформите подписки на любимые сервисы с выгодным кешбэком и управляйте ими в одном месте
        </Typography>
        <CloseIcon onClick={handleClose} className="service-subscription__close-icon" />
      </Box>
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Подробнее о сервисе</Typography>
        <TransitionIWhitecon onClick={handleOpen} />
      </Box>
    </Box>
  );
}
