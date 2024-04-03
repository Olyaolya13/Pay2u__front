import { Box, Typography } from '@mui/material';

const font = {
  fontFamily: 'Inter',
  fontWeight: '400',
  color: '#F5F5F5',
  fontSize: '14px',
  textAlign: 'center'
};

interface BlackSquareWithCounterProps {
  count?: number;
}

const styles = {
  container: {
    backgroundColor: '#2B2D32',
    borderRadius: '8px',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '-8px'
  }
};

export default function BlackSquareWithCounter({ count }: BlackSquareWithCounterProps) {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={{ ...font }}>
        {`+${count}`}
      </Typography>
    </Box>
  );
}
