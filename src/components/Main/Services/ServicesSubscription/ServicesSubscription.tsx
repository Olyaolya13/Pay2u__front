import { useState } from 'react';
import ServicesSubscriptionCard from './ServicesSubscriptionCard/ServicesSubscriptionCard';
import ServicesSubscriptionHistory from './ServicesSubscriptionHistory/ServicesSubscriptionHistory';
import ServicesSubscriptionInfo from './ServicesSubscriptionInfo/ServicesSubscriptionInfo';
import { ServiceSubscribeIcon } from '../../../../types/types';

interface ServicesSubscriptionProps {
  services: ServiceSubscribeIcon[];
}

export default function ServicesSubscription({ services }: ServicesSubscriptionProps) {
  const [infoVisible, setInfoVisible] = useState(true);

  const handleInfoClose = () => {
    setInfoVisible(false);
  };

  return (
    <>
      <ServicesSubscriptionCard services={services} />
      <ServicesSubscriptionHistory />
      {infoVisible && <ServicesSubscriptionInfo onClose={handleInfoClose} />}
    </>
  );
}
