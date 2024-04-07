import { Box, CardMedia, Typography } from '@mui/material';
import { CardNewData } from '../../../../types/types';

interface ServicesNewCardProps {
  card: CardNewData;
}

const font = { fontFamily: 'Inter', fontSize: '14px', fontWeight: '500', color: '#F5F5F5' };

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
    ...font,
    fontWeight: '700',
    lineHeight: '1.28',
    marginTop: '12px'
  },
  subtitle: {
    ...font,
    marginTop: '5px',
    lineHeight: '1.28'
  },
  image: { width: '40px', height: '40px', marginLeft: '16px', marginTop: '16px' }
};

export default function ServicesCard({ card }: ServicesNewCardProps) {
  return (
    <Box sx={{ ...styles.container, backgroundImage: card.background }}>
      <Box sx={styles.card}>
        <CardMedia component="img" sx={styles.image} image={card.image} alt={card.alt} />
        <Box sx={styles.text}>
          <Typography component="p" sx={styles.title}>
            {card.title}
          </Typography>
          <Typography component="p" sx={styles.subtitle}>
            {card.cashBack} кэшбек
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
