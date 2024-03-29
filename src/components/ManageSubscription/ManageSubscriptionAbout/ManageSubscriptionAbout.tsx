import { Box } from '@mui/material';
import Title from '../../Titile/Titile';
import ManageSubscriptionAboutContent from './ManageSubscriptionAboutContent/ManageSubscriptionAboutContent';
import { ManageSubscriptionAboutData } from '../../../utils/constants';
import ManageSubscriptionAboutPartner from './ManageSubscriptionAboutPartner/ManageSubscriptionAboutPartner';

const styles = {
  container: { margin: '48px 0 0  ' },
  partner: { margin: '20px 0 0 ' }
};

export default function ManageSubscriptionAbout() {
  return (
    <Box sx={styles.container}>
      <Box>
        <Title title={ManageSubscriptionAboutData.titleSubscription} />
        <ManageSubscriptionAboutContent />
      </Box>
      <Box sx={styles.partner}>
        <Title title={ManageSubscriptionAboutData.titlePartner} />
        <ManageSubscriptionAboutPartner />
      </Box>
    </Box>
  );
}
