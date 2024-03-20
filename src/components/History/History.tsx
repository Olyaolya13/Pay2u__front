import { Box } from '@mui/material';
import HistoryContent from './HistoryContent/HistoryContent';

export default function History() {
  const styles = {
    container: {
      backgroundColor: '#2B2D32'
    }
  };
  return (
    <Box sx={styles.container}>
      <HistoryContent />
    </Box>
  );
}
