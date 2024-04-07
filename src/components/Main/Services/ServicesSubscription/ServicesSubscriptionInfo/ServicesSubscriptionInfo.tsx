import style from './ServicesSubscriptionInfo.module.scss';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TransitionIWhitecon from '../../../../../assets/TransitionIWhitecon.svg?react';
import CloseIcon from '../../../../../assets/CloseIcon.svg?react';
import { ServicesSubscriptionInfoData } from '../../../../../utils/constants';

interface ServicesSubscriptionInfoProps {
  onClose: () => void;
}

const font = {
  fontSize: '16px',
  fontFamily: 'Inter',
  color: '#F5F5F5',
  lineHeight: '1.25',
  fontWeight: '400',
  textAlign: 'start'
};

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
    ...font,
    width: '270px',
    paddingRight: '10px'
  },
  subtitle: {
    ...font,
    fontSize: '14px',
    paddingRight: '8px'
  },
  text: { display: 'flex', alignItems: 'center', marginTop: '15px', width: '194px' }
};

export default function ServicesSubscriptionInfo({ onClose }: ServicesSubscriptionInfoProps) {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate('/history');
  };

  return (
    <Box sx={styles.container}>
      <Box>
        <Typography component="p" sx={styles.title}>
          {ServicesSubscriptionInfoData.title}
        </Typography>
        <CloseIcon className={style.close__icon} onClick={onClose} />
      </Box>
      <Box sx={styles.text} onClick={handleOpen}>
        <Typography sx={styles.subtitle}>{ServicesSubscriptionInfoData.subtitle}</Typography>
        <TransitionIWhitecon onClick={handleOpen} />
      </Box>
    </Box>
  );
}
