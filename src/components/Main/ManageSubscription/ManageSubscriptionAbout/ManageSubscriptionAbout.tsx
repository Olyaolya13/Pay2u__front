import { Box } from '@mui/material';
import ManageSubscriptionAboutContent from './ManageSubscriptionAboutContent/ManageSubscriptionAboutContent';
import ManageSubscriptionAboutPartner from './ManageSubscriptionAboutPartner/ManageSubscriptionAboutPartner';

const styles = {
  container: { margin: '48px 0 0  ' },
  partner: { margin: '20px 0 0 ' }
};

export default function ManageSubscriptionAbout() {
  return (
    <Box sx={styles.container}>
      <ManageSubscriptionAboutContent />
      <Box sx={styles.partner}>
        <ManageSubscriptionAboutPartner />
      </Box>
    </Box>
  );
}
