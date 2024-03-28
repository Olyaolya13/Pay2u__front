import { Box } from '@mui/material';
import AutopaymentMethod from './AutopaymentMethod/AutopaymentMethod';
import AutopaymentInfo from './AutopaymentInfo/AutopaymentInfo';
import AutopaymentContent from './AutopaymentContent/AutopaymentContent';

export default function Autopayment() {
  const styles = {
    container: {}
  };
  return (
    <Box sx={styles.container}>
      <AutopaymentMethod />
      <AutopaymentInfo />
      <AutopaymentContent />
    </Box>
  );
}
