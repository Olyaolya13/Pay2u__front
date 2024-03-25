import { Box } from '@mui/material';
import ServicesSubscriptionCard from './ServicesSubscriptionCard/ServicesSubscriptionCard';
import ServicesSubscriptionHistory from './ServicesSubscriptionHistory/ServicesSubscriptionHistory';
import ServicesSubscriptionInfo from './ServicesSubscriptionInfo/ServicesSubscriptionInfo';

export default function ServicesSubscription() {
  const styles = {
    container: {}
  };

  return (
    <Box sx={styles.container}>
      <ServicesSubscriptionCard />
      <ServicesSubscriptionHistory />
      <ServicesSubscriptionInfo />
    </Box>
  );
}
