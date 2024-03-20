import { Box } from '@mui/material';
import HistoryHeader from '../HistoryHeader/HistoryHeader';

export default function HistoryContent() {
  const styles = {
    container: {
      backgroundColor: '#2B2D32'
    }
  };
  return (
    <Box sx={styles.container}>
      <HistoryHeader />
    </Box>
  );
}
