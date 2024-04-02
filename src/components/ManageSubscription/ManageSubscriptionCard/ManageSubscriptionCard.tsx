import { Box, CardMedia, Typography } from '@mui/material';
import { CardManageSubscriptionData } from '../../../types/types';

interface ManageSubscriptionCardProps {
  card: CardManageSubscriptionData;
}
const font = { fontFamily: 'Inter', fontSize: '14px', fontWeight: '400' };

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start'
  },
  icon: { display: 'flex' },
  text: {
    textAlign: 'end'
  },
  title: {
    ...font,
    fontSize: '22px',
    fontWeight: '700',
    paddingLeft: '12px'
  },
  description: {
    ...font,
    fontWeight: '500'
  },
  period: {
    ...font,
    color: '#489865'
  },
  image: { width: '40px', height: '40px' }
};

export default function ManageSubscriptionCard({ card }: ManageSubscriptionCardProps) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.icon}>
        <CardMedia component="img" sx={styles.image} image={card.image} alt={card.alt} />
        <Typography component="h2" sx={styles.title}>
          {card.title}
        </Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.description}>
          {card.description}
        </Typography>
        <Typography component="p" sx={styles.period}>
          Активна до {card.period} г.
        </Typography>
      </Box>
    </Box>
  );
}
