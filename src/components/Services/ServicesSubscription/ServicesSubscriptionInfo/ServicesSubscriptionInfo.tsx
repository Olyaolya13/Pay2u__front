import './ServicesSubscriptionInfo.css';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TransitionIWhitecon from '../../../../assets/TransitionIWhitecon.svg?react';
import CloseIcon from '../../../../assets/CloseIcon.svg?react';
import { ServicesSubscriptionInfoData } from '../../../../utils/constants';

interface ServicesSubscriptionInfoProps {
  onClose: () => void;
}

export default function ServicesSubscriptionInfo({ onClose }: ServicesSubscriptionInfoProps) {
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
      width: '270px',
      fontSize: '16px',
      fontFamily: 'Inter',
      color: '#F5F5F5',
      lineHeight: '1.25',
      fontWeight: '400',
      textAlign: 'start',
      paddingRight: '10px'
    },
    subtitle: {
      fontSize: '14px',
      fontFamily: 'Inter',
      color: '#F5F5F5',
      lineHeight: '1.25',
      fontWeight: '400',
      textAlign: 'start',
      paddingRight: '8px'
    },
    text: { display: 'flex', alignItems: 'center', marginTop: '15px', width: '194px' }
  };

  const handleOpen = () => {
    navigate('/history');
  };

  return (
    <Box sx={styles.container}>
      <Box>
        <Typography component="p" sx={styles.title}>
          {ServicesSubscriptionInfoData.title}
        </Typography>
        <CloseIcon className="service-subscription__close-icon" onClick={onClose} />
      </Box>
      <Box sx={styles.text} onClick={handleOpen}>
        <Typography sx={styles.subtitle}>{ServicesSubscriptionInfoData.subtitle}</Typography>
        <TransitionIWhitecon onClick={handleOpen} />
      </Box>
    </Box>
  );
}
