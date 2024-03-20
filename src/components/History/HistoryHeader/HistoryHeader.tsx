import { Box } from '@mui/material';
import HistoryProgress from '../HistoryProgress/HistoryProgress';

export default function HistoryHeader() {
  const styles = {
    container: {
      paddingTop: '124px',
      backgroundColor: '#2B2D32'
    }
  };
  return (
    <Box sx={styles.container}>
      <HistoryProgress />
      <h2>kfedofeo</h2>
    </Box>
  );
}
