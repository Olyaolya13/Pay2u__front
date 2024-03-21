import { Box } from '@mui/material';
import SellHistoryDelalization from './SellHistoryDelalization/SellHistoryDelalization';
import SellHistoryInfo from './SellHistoryInfo/SellHistoryInfo';
import SellHistoryContent from './SellHistoryContent/SellHistoryContent';


export default function SellHistory() {
  const styles = {
    container: {
      margin: '38px 0 78px'
    }
  };
  return (
    <Box sx={styles.container}>
        <SellHistoryDelalization/>
        <SellHistoryInfo/>
        <SellHistoryContent/>
    </Box>
  );
}
