import { Box } from '@mui/material';
import SellHistoryDelalization from './SellHistoryDelalization/SellHistoryDelalization';
import SellHistoryInfo from './SellHistoryInfo/SellHistoryInfo';
import SellHistoryContent from './SellHistoryContent/SellHistoryContent';

const styles = {
  container: {
    margin: '38px 0 78px'
  }
};

export default function SellHistory() {
  return (
    <Box sx={styles.container}>
      <SellHistoryDelalization />
      <SellHistoryInfo />
      <SellHistoryContent />
    </Box>
  );
}
