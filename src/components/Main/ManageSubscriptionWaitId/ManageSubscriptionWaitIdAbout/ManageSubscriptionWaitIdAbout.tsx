import { Box } from '@mui/material';
import ManageSubscriptionWaitIdAboutContent from './ManageSubscriptionWaitIdAboutContent/ManageSubscriptionWaitIdAboutContent';
import ManageSubscriptionWaitIdAboutPartner from './ManageSubscriptionWaitIdAboutPartner/ManageSubscriptionWaitIdAboutPartner';

const styles = {
  container: { margin: '48px 0 0  ' },
  partner: { margin: '20px 0 0 ' }
};

export default function ManageSubscriptionWaitIdAbout() {
  return (
    <Box sx={styles.container}>
      <ManageSubscriptionWaitIdAboutContent />
      <Box sx={styles.partner}>
        <ManageSubscriptionWaitIdAboutPartner />
      </Box>
    </Box>
  );
}
