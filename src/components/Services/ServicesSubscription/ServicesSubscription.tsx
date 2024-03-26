import { Box } from '@mui/material';
import ServicesSubscriptionCard from './ServicesSubscriptionCard/ServicesSubscriptionCard';
import ServicesSubscriptionHistory from './ServicesSubscriptionHistory/ServicesSubscriptionHistory';
import ServicesSubscriptionInfo from './ServicesSubscriptionInfo/ServicesSubscriptionInfo';
import { useState } from 'react';

export default function ServicesSubscription() {
  const [infoVisible, setInfoVisible] = useState(true);

  const handleInfoClose = () => {
    setInfoVisible(false);
  };

  const styles = {
    container: {}
  };

  return (
    <Box sx={styles.container}>
      <ServicesSubscriptionCard />
      <ServicesSubscriptionHistory />
      {infoVisible && <ServicesSubscriptionInfo onClose={handleInfoClose} />}
    </Box>
  );
}
