import { Box } from '@mui/material';
import ManageSubscriptionCard from './ManageSubscriptionCard/ManageSubscriptionCard';
import ManageSubscriptionChooseBtn from './ManageSubscriptionChooseBtns/ManageSubscriptionChooseBtns';
import { ManageSubscriptionCardData } from '../../utils/constants';
import ManageSubscriptionAbout from './ManageSubscriptionAbout/ManageSubscriptionAbout';

import PartnerSite from '../Instructions/PartnerSite/PartnerSite';
import SubscribtionInstruction from '../Instructions/SubscribtionInstruction/SubscribtionInstruction';

const styles = {
  container: {
    margin: '38px 20px 78px'
  }
};

export default function ManageSubscription() {
  return (
    <Box sx={styles.container}>
      {ManageSubscriptionCardData.card.map((card, index) => (
        <ManageSubscriptionCard key={index} card={card} />
      ))}
      <ManageSubscriptionChooseBtn />
      <ManageSubscriptionAbout />
      <PartnerSite />
      <SubscribtionInstruction marginTop="32px" />
    </Box>
  );
}
