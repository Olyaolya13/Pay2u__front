import { Box } from '@mui/material';
import PartnerSite from '../PartnerSite/PartnerSite';
import SubscribeInstruction from '../SubscribeInstruction/SubscribeInstruction';
import SubscriptionInstruction from '../SubscribtionInstruction/SubscribtionInstruction';

const styles = {
  container: { margin: '44px  0 42px 20px' }
};

export default function AboutSubscribeInstructions() {
  return (
    <Box sx={styles.container}>
      <PartnerSite width="20px" height="20px" marginTop="0" />
      <SubscribeInstruction margin="30px 0 0 " title="Что делать, если у меня уже есть подписка " />
      <SubscriptionInstruction marginTop="30px" />
    </Box>
  );
}
