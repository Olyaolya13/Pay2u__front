import { Box } from '@mui/material';
import Title from '../../../Titile/Titile';
import MySubscriptionsInvalidCard from './MySubscriptionsInvalidCard/MySubscriptionsInvalidCard';
import {
  MySubscriptionsInvalidCardData,
  MySubscriptionsInvalidData
} from '../../../../utils/constants';

const font = {
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '1.25'
};

const styles = {
  container: { margin: '16px 0  0  ' },
  text: { display: 'flex', margin: '0 20px' },
  subtitle: {
    ...font,
    color: '#E86513',
    textAlign: 'start',
    marginTop: '24px'
  }
};

export default function MySubscriptionsInvalid() {
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.text}>
          <Title title={MySubscriptionsInvalidData.title}></Title>
        </Box>
      </Box>

      {MySubscriptionsInvalidCardData.card.map((card, index) => (
        <MySubscriptionsInvalidCard key={index} card={card} />
      ))}
    </>
  );
}
