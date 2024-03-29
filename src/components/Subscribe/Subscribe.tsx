import { Box } from '@mui/material';
import SubscribeCard from './SubscribeCard/SubscribeCard';
import SubscribeCardInfo from './SubscribeCardInfo/SubscribeCardInfo';
import SubscribeInstruction from '../Instructions/SubscribeInstruction/SubscribeInstruction';
import SubscribeContent from './SubscribeContent/SubscribeContent';

export default function Subscribe() {
  const styles = {
    container: { margin: '0 20px 40px' }
  };
  return (
    <Box sx={styles.container}>
      <SubscribeCard />
      <SubscribeInstruction />
      <SubscribeCardInfo />
      <SubscribeContent />
    </Box>
  );
}
