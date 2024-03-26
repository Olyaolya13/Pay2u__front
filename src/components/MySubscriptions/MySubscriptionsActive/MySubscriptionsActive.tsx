import { Box } from '@mui/material';
import Title from '../../Titile/Titile';
import MySubscriptionsActiveCard from './MySubscriptionsActiveCard/MySubscriptionsActiveCard';
import { MySubscriptionsActiveCardData } from '../../../utils/constants';

export default function MySubscriptionsActive() {
  const styles = {
    container: { margin: '16px 0  0  ' },
    text: { display: 'flex', margin: '0 20px' },
    subtitle: {
      color: '#E86513',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      textAlign: 'start',
      lineHeight: '1.25',
      marginTop: '24px'
    }
  };
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.text}>
          <Title title="Активные"></Title>
        </Box>
      </Box>

      {MySubscriptionsActiveCardData.card.map((card, index) => (
        <MySubscriptionsActiveCard key={index} card={card} />
      ))}
    </>
  );
}
