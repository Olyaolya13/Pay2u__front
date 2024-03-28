import { Box } from '@mui/material';
import AutopaymentMethod from './AutopaymentMethod/AutopaymentMethod';
import AutopaymentContent from './AutopaymentContent/AutopaymentContent';
import AutopaymentQuestionsContent from './AutopaymentQuestionsContent/AutopaymentQuestionsContent';

export default function Autopayment() {
  const styles = {
    container: {}
  };
  return (
    <Box sx={styles.container}>
      <AutopaymentMethod />
      <AutopaymentContent />
      <AutopaymentQuestionsContent />
    </Box>
  );
}
