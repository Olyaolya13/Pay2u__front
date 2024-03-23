import { Box } from '@mui/material';

import HistoryProgress from './HistoryProgress/HistoryProgress';

export default function History() {
  const styles = {
    container: {
      backgroundColor: '#2B2D32',
      height: '812px'
    }
  };
  return (
    <Box sx={styles.container}>
      <HistoryProgress />
    </Box>
  );
}
