import { Box, CardMedia, Typography } from '@mui/material';
import { CardMySubscriptionsActiveData } from '../../../../../types/types';

interface MySubscriptionsActiveCardProps {
  card: CardMySubscriptionsActiveData;
}

const font = { fontFamily: 'Inter', fontSize: '14px', fontWeight: '400' };

const styles = {
  main: {
    padding: '19px 19px 13px 20px',
    borderBottom: '.4px solid #E2E2E2'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start'
  },
  icon: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  card: { display: 'flex', alignItems: 'end' },
  text: {
    textAlign: 'start'
  },
  count: {
    textAlign: 'end',
    width: '138x'
  },
  title: {
    ...font,
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.28'
  },

  sum: {
    ...font,
    fontSize: '16px',
    fontWeight: '700',
    color: '#676879'
  },
  description: {
    ...font,
    fontWeight: '500',
    color: '#676879'
  },
  period: {
    ...font,
    textAlign: 'start',
    color: '#C2C2C2',
    marginLeft: '52px'
  },

  image: { width: '40px', height: '40px', marginRight: '12px' }
};

export default function MySubscriptionsInvalidCard({ card }: MySubscriptionsActiveCardProps) {
  return (
    <Box sx={styles.main}>
      <Box sx={styles.container}>
        <Box sx={styles.icon}>
          <CardMedia component="img" sx={styles.image} image={card.image} alt={card.alt} />
          <Box sx={styles.text}>
            <Typography component="p" sx={styles.title}>
              {card.title}
            </Typography>
            <Typography component="p" sx={{ ...font }}>
              {card.period}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.card}>
          <Box sx={styles.count}>
            <Typography component="p" sx={styles.sum}>
              {card.sum} &#8381;
            </Typography>
            <Typography component="p" sx={styles.description}>
              {card.description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography component="p" sx={styles.period}>
        Истекла {card.activeUntill}
      </Typography>
    </Box>
  );
}
