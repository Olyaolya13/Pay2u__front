import { Box, Typography } from '@mui/material';
import AutopaymentCard from '../../../AutopaymentCard/AutopaymentCard';
import {
  SubscriptionPaymentMethodCardData,
  SubscriptionPaymentMethodTitleData
} from '../../../../utils/constants';

const font = {
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '400'
};

const styles = {
  container: { margin: '16px 0 0', borderBottom: '.4px solid #E2E2E2' },
  card: {
    display: 'grid',
    gridTemplateRows: 'repeat(1, 100px)',
    gridTemplateColumns: 'repeat(3, 124px)',
    columnGap: '16px',
    marginTop: '20px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
    margin: '8px  0 10px 20px'
  },
  payText: {
    ...font,
    margin: '0 0 8px 20px',
    color: '#676879',
    textAlign: 'start'
  }
};

export default function SubscriptionPaymentMethod() {
  return (
    <Box sx={styles.container}>
      <Typography component="p" sx={styles.payText}>
        {SubscriptionPaymentMethodTitleData.title}
      </Typography>
      <Box sx={styles.card}>
        {SubscriptionPaymentMethodCardData.card.map((card, index) => (
          <AutopaymentCard key={index} card={card} />
        ))}
      </Box>
    </Box>
  );
}
