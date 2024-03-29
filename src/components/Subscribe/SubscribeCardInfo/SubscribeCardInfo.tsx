import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TransitionGreyIcon from '../../../assets/TransitionGreyIcon.svg?react';
import { SubscribeCardInfoData } from '../../../utils/constants';

export default function SubscribeCardInfo() {
  const navigate = useNavigate();
  const styles = {
    container: {
      marginTop: '32px',
      position: 'relative',
      background: 'linear-gradient(to right, #F9F5A7 0%, #FAED00 100%)',
      boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
      borderRadius: '16px',
      padding: '16px'
    },
    title: {
      width: '270px',
      fontSize: '16px',
      fontFamily: 'Inter',
      lineHeight: '1.25',
      fontWeight: '500',
      textAlign: 'start',
      paddingRight: '10px'
    },
    subtitle: {
      fontSize: '14px',
      fontFamily: 'Inter',
      color: '#676879',
      lineHeight: '1.25',
      fontWeight: '500',
      textAlign: 'start',
      paddingRight: '8px'
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '8px',
      width: '194px'
    }
  };

  const handleOpen = () => {
    navigate('');
  };

  return (
    <Box sx={styles.container}>
      <Box>
        <Typography component="p" sx={styles.title}>
          {SubscribeCardInfoData.title}
        </Typography>
      </Box>
      <Box sx={styles.text} onClick={handleOpen}>
        <Typography sx={styles.subtitle}>{SubscribeCardInfoData.text}</Typography>
        <TransitionGreyIcon />
      </Box>
    </Box>
  );
}