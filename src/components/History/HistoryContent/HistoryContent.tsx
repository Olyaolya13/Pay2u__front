import './HistoryContent.css';
import { Box, CardMedia, Typography } from '@mui/material';
import CardIcon from '../../../assets/CartIcon.svg';
import { HistoryContentPage } from '../../../types/types';

interface HistoryContentProps {
  activeStep?: number;
  history?: HistoryContentPage;
}

export default function HistoryContent({ activeStep, history }: HistoryContentProps) {
  const styles = {
    container: {
      backgroundColor: '#2B2D32',
      padding: '76px 20px 35px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    title: {
      textAlign: 'start',
      fontFamily: 'Inter',
      fontSize: '22px',
      fontWeight: '700',
      lineHeight: '1,27',
      color: '#fff'
    },
    subtitle: {
      textAlign: 'start',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1,25',
      color: '#fff'
    },

    image: { width: '230px', height: '205px' }
  };
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>
        {activeStep}
        {history?.title} <span className="discount">{history?.span}</span> {history?.title}
      </Typography>
      <CardMedia component="img" image={CardIcon} alt="" sx={styles.image} />
      <Typography sx={styles.subtitle}>{history?.subtitle}</Typography>
    </Box>
  );
}
