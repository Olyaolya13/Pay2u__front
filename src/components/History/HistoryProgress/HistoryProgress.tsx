import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function HistoryProgress() {
  const [progress, setProgress] = useState(0);

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '4px',
      display: 'flex'
    },
    line: {
      backgroundColor: '#D9D9D9',
      borderRadius: '4px',
      flexGrow: 1,
      marginRight: '16px'
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 25));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={styles.container}>
      <LinearProgress
        sx={styles.line}
        variant="determinate"
        value={progress >= 25 ? 100 : progress}
      />
      <LinearProgress sx={styles.line} variant="determinate" value={progress >= 50 ? 100 : 0} />
      <LinearProgress sx={styles.line} variant="determinate" value={progress >= 75 ? 100 : 0} />
      <LinearProgress sx={styles.line} variant="determinate" value={progress >= 100 ? 100 : 0} />
    </Box>
  );
}
