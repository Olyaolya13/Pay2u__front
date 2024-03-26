import { Box } from '@mui/material';
import ManageSubscriptionBtn from './ManageSubscriptionBtn/ManageSubscriptionBtn';

const styles = {
  container: {}
};

export default function ManageSubscriptionChooseBtn() {
  return (
    <Box sx={styles.container}>
      <ManageSubscriptionBtn />
    </Box>
  );
}
