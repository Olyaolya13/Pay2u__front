import style from './ServicesSubscriptionHistory.module.scss';
import { Box, Card, Typography } from '@mui/material';
import TransitionIcon from '../../../../../assets/TransitionIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import { ServicesSubscriptionHistoryData } from '../../../../../utils/constants';

const font = { fontFamily: 'Inter', fontSize: '14px', fontWeight: '400', lineHeight: '1.25' };

const styles = {
  container: {
    position: 'relative',
    padding: '18px 22px 16px 20px',
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
    border: '.4px solid #E2E2E2',
    borderRadius: '16px',
    boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)'
  },
  containerTitle: { display: 'flex', justifyContent: 'space-between' },
  containerSum: { display: 'flex', justifyContent: 'space-between', marginTop: '8px' },
  image: { width: '40px', height: '40px' },
  title: {
    ...font,
    fontSize: '16px',
    color: '#489865',
    marginBottom: '4px'
  },
  sum: {
    ...font,
    textAlign: 'center',
    fontWeight: '700',
    color: '#168E2C'
  },
  sumMinus: {
    ...font,
    textAlign: 'center',
    fontWeight: '700',
    color: '#676879'
  }
};

export default function ServicesSubscriptionHistory() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sell_history');
    window.scrollTo(0, 0);
  };
  return (
    <Card sx={styles.container} onClick={handleClick}>
      <Box sx={styles.containerTitle}>
        <Typography component="p" sx={styles.title}>
          {ServicesSubscriptionHistoryData.title}
        </Typography>
        <TransitionIcon onClick={handleClick} className={style.history__icon} />
      </Box>
      <Box sx={styles.containerSum}>
        <Typography component="p" sx={{ ...font }}>
          {ServicesSubscriptionHistoryData.subtitlePlus}
        </Typography>
        <Typography component="p" sx={styles.sum}>
          {ServicesSubscriptionHistoryData.sumPlus} &#8381;
        </Typography>
      </Box>
      <Box sx={styles.containerSum}>
        <Typography component="p" sx={{ ...font }}>
          {ServicesSubscriptionHistoryData.subtitleMinus}
        </Typography>
        <Typography component="p" sx={styles.sumMinus}>
          {ServicesSubscriptionHistoryData.sumMinus} &#8381;
        </Typography>
      </Box>
    </Card>
  );
}
