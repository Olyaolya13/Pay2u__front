import { Box, CardMedia, Typography } from '@mui/material';
import SubmitButton from '../../../../Btns/SubmitBtn';
import { CardMySubscriptionsWaitActiveyData } from '../../../../../types/types';
import { useNavigate } from 'react-router-dom';

interface MySubscriptionsWaitActiveCardProps {
  card: CardMySubscriptionsWaitActiveyData;
}
const font = { fontFamily: 'Inter', fontSize: '16px', fontWeight: '400' };

const styles = {
  container: {
    padding: '12px 20px 20px 20px ',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '.4px solid #E2E2E2'
  },
  card: { display: 'flex', alignItems: 'center' },
  textContainer: {
    textAlign: 'start',
    marginLeft: '16px'
  },
  subtitle: {
    ...font,
    fontSize: '14px'
  },
  image: { width: '40px', height: '40px' }
};

export default function MySubscriptionsWaitActiveCard({
  card
}: MySubscriptionsWaitActiveCardProps) {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate('/manage_subcription/id');
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={styles.container} onClick={handleOpen}>
      <Box sx={styles.card}>
        <CardMedia component="img" sx={styles.image} image={card.image} alt={card.alt} />
        <Box sx={styles.textContainer}>
          <Typography component="p" sx={{ ...font }}>
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
