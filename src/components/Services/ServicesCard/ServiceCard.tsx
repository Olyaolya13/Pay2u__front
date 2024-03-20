import { Box, CardMedia, Typography } from '@mui/material';
import { CardNewData } from '../../../types/types';

interface ServicesNewCardProps {
  card: CardNewData;
}

export default function ServicesNewCard({ card }: ServicesNewCardProps) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '16px',
      boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
      width: '140px',
      height: '140px'
    },

    card: { display: 'flex', flexDirection: 'column', alignItems: 'start' },
    text: {
      textAlign: 'start',
      marginLeft: '16px'
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '1.28',
      color: '#F5F5F5',
      marginTop: '12px'
    },
    subtitle: {
      marginTop: '5px',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '1.28',
      color: '#F5F5F5'
    },
    image: { width: '40px', height: '40px', marginLeft: '16px', marginTop: '16px' }
  };
  return (
    <Box sx={{ ...styles.container, backgroundImage: card.background }}>
      <Box sx={styles.card}>
        <CardMedia component="img" sx={styles.image} image={card.image} alt={card.alt} />
        <Box sx={styles.text}>
          <Typography component="p" sx={styles.title}>
            {card.title}
          </Typography>
          <Typography component="p" sx={styles.subtitle}>
            {card.cashBack}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
