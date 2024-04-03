import { Box } from '@mui/material';
import SubscribeCard from '../../SubscribeCard/SubscribeCard';
import SubscriptionPaymentContent from './SubscriptionPaymentContent/SubscriptionPaymentContent';
import SubscriptionPaymentInfo from './SubscriptionPaymentInfo/SubscriptionPaymentInfo';
import SubscriptionPaymentMethod from './SubscriptionPaymentMethod/SubscriptionPaymentMethod';

const styles = {
  container: { margin: '14px 0 70px' }
};

export default function SubscriptionPayment() {
  return (
    <Box sx={styles.container}>
      <SubscribeCard />
      <SubscriptionPaymentContent />
      <SubscriptionPaymentMethod />
      <SubscriptionPaymentInfo />
    </Box>
  );
}
