import { Box } from '@mui/material';
import MySubscriptionsWaitActive from './MySubscriptionsWaitActive/MySubscriptionsWaitActive';

export default function MySubscriptions() {
  const styles = {
    container: { margin: '32px 0 0' }
  };
  return (
    <Box sx={styles.container}>
      <MySubscriptionsWaitActive />
    </Box>
  );
}
