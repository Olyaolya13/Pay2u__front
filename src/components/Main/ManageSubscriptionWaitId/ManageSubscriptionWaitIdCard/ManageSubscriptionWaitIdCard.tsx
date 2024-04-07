import { Box, CardMedia, Typography } from '@mui/material';
import { CardManageSubscriptionWaitIdCardData } from '../../../../types/types';
import { useNavigate } from 'react-router-dom';

interface ManageSubscriptionWaitIdCardProps {
  card: CardManageSubscriptionWaitIdCardData;
}
const font = { fontFamily: 'Inter', fontSize: '16px', fontWeight: '400' };

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '24px 0 28px'
  },
  title: { ...font, fontSize: '22px', fontWeight: '700', marginLeft: '12px' },
  card: { display: 'flex', alignItems: 'start', width: '120px' },
  textContainer: {
    textAlign: 'end',
    marginLeft: '16px'
  },
  subtitle: {
    ...font,
    fontSize: '14px'
  },
  period: { ...font, color: '#676879', fontSize: '14px' },
  image: { width: '40px', height: '40px', marginRigth: '5px' }
};

export default function ManageSubscriptionWaitIdCard({ card }: ManageSubscriptionWaitIdCardProps) {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate('/manage_subcription/id');
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={styles.container} onClick={handleOpen}>
      <Box sx={styles.card}>
        <CardMedia component="img" sx={styles.image} image={card.image} alt={card.alt} />
        <Typography component="p" sx={styles.title}>
          {card.title}
        </Typography>
      </Box>
      <Box sx={styles.textContainer}>
        <Typography component="p" sx={styles.subtitle}>
          {card.description}
        </Typography>
        <Typography component="p" sx={styles.period}>
          До {card.period}
        </Typography>
      </Box>
    </Box>
  );
}
