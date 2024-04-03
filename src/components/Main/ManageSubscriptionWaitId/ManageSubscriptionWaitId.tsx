import { Box } from '@mui/material';
import ManageSubscriptionWaitIdAbout from './ManageSubscriptionWaitIdAbout/ManageSubscriptionWaitIdAbout';
import PartnerSite from '../../Instructions/PartnerSite/PartnerSite';
import SubscribtionInstruction from '../../Instructions/SubscribtionInstruction/SubscribtionInstruction';
import ManageSubscriptionWaitIdContent from './ManageSubscriptionWaitIdContent/ManageSubscriptionWaitIdContent';

const styles = {
  container: { margin: '38px 20px 78px' },
  partner: { margin: '20px 0 0 ' }
};

export default function ManageSubscriptionWaitId() {
  return (
    <Box sx={styles.container}>
      <ManageSubscriptionWaitIdContent />
      <ManageSubscriptionWaitIdAbout />
      <PartnerSite />
      <SubscribtionInstruction marginTop="32px" />
    </Box>
  );
}
