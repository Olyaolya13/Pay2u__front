import { Box } from '@mui/material';
import MySubscriptionsWaitActive from './MySubscriptionsWaitActive/MySubscriptionsWaitActive';
import MySubscriptionsActive from './MySubscriptionsActive/MySubscriptionsActive';
import MySubscriptionsInvalid from './MySubscriptionsInvalid/MySubscriptionsInvalid';

export default function MySubscriptions() {
  const styles = {
    container: { margin: '38px 0 140px' }
  };
  return (
    <Box sx={styles.container}>
      <MySubscriptionsWaitActive />
      <MySubscriptionsActive />
      <MySubscriptionsInvalid />
    </Box>
  );
}
