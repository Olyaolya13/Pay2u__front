import { Box, CardMedia, Typography } from '@mui/material';
import SubmitButton from '../../../SubmitBtn/SubmitBtn';
import { CardMySubscriptionsWaitActiveyData } from '../../../../types/types';

interface MySubscriptionsWaitActiveCardProps {
  card: CardMySubscriptionsWaitActiveyData;
}

export default function MySubscriptionsWaitActiveCard({
  card
}: MySubscriptionsWaitActiveCardProps) {
  const styles = {
    container: {
      padding: '12px 20px 20px 20px ',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '.4px solid #E2E2E2'
    },

    card: { display: 'flex', alignItems: 'center' },
    text: {
      textAlign: 'start',
      marginLeft: '16px'
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400'
    },
    subtitle: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400'
    },
    image: { width: '40px', height: '40px' }
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.card}>
        <CardMedia component="img" sx={styles.image} image={card.image} alt={card.alt} />
        <Box sx={styles.text}>
          <Typography component="p" sx={styles.title}>
            {card.title}
          </Typography>
          <Typography component="p" sx={styles.subtitle}>
            На {card.period} месяца
          </Typography>
        </Box>
      </Box>
      <SubmitButton
        title="Активировать"
        width="121px"
        height="34px"
        fontSize="14px"
        fontWeigth="400"
        borderRadius="8px"
      />
    </Box>
  );
}
