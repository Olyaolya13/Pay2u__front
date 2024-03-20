import { Box } from '@mui/material';
import ServicesInfo from './ServivesInfo/ServivesInfo';
import ServicesCatalog from './ServicesCatalog/ServicesCatalog';
import ServicesNew from './ServicesNew/ServicesNew';

export default function Services() {
  const styles = {
    container: {
      margin: '38px 20px 0'
    }
  };
  return (
    <Box sx={styles.container}>
      <ServicesInfo />
      <ServicesCatalog />
      <ServicesNew />
    </Box>
  );
}
