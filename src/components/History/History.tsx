import { Box } from '@mui/material';
import HistoryProgress from './HistoryProgress/HistoryProgress';

const styles = {
  container: {
    backgroundColor: '#2B2D32',
    height: '812px'
  }
};

export default function History() {
  return (
    <Box sx={styles.container}>
      <HistoryProgress />
    </Box>
  );
}
