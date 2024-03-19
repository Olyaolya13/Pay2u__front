import { Box } from '@mui/material';
import ServicesInfo from './ServivesInfo/ServivesInfo';

export default function Services() {
  const styles = {
    container: {
      margin: '38px 20px 8px'
    }
  };
  return (
    <Box sx={styles.container}>
      <ServicesInfo />
    </Box>
  );
}
