import { useState } from 'react';
import ServicesSubscriptionCard from './ServicesSubscriptionCard/ServicesSubscriptionCard';
import ServicesSubscriptionHistory from './ServicesSubscriptionHistory/ServicesSubscriptionHistory';
import ServicesSubscriptionInfo from './ServicesSubscriptionInfo/ServicesSubscriptionInfo';

export default function ServicesSubscription() {
  const [infoVisible, setInfoVisible] = useState(true);

  const handleInfoClose = () => {
    setInfoVisible(false);
  };

  return (
    <>
      <ServicesSubscriptionCard />
      <ServicesSubscriptionHistory />
      {infoVisible && <ServicesSubscriptionInfo onClose={handleInfoClose} />}
    </>
  );
}
