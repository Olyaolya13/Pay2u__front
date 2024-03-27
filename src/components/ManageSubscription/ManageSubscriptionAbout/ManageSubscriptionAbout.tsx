import { Box } from '@mui/material';
import Title from '../../Titile/Titile';
import ManageSubscriptionAboutContent from './ManageSubscriptionAboutContent/ManageSubscriptionAboutContent';

const styles = {
  container: { margin: '48px 0 0 ' }
};

export default function ManageSubscriptionAbout() {
  return (
    <Box sx={styles.container}>
      <Title title="О подписке" />
      <ManageSubscriptionAboutContent />
    </Box>
  );
}
