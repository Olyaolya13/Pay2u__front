import { Box, CardMedia, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const styles = {
  container: {
    backgroundColor: '#2B2D32',
    height: '139px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: { width: '49px', height: '49px' },
  title: {
    paddingTop: '12px',
    color: '#F9F9F9',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: '16px'
  }
};

export default function AboutSubscribeHeader() {
  const location = useLocation();
  const { image, title } = location.state || {};
  return (
    <Box sx={styles.container}>
      <CardMedia component="img" image={image} sx={styles.icon} />
      <Typography sx={styles.title}>{title}</Typography>
    </Box>
  );
}
