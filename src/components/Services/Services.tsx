import { Box } from '@mui/material';
// import ServicesInfo from './ServivesInfo/ServivesInfo';
import ServicesCatalog from './ServicesCatalog/ServicesCatalog';
import ServicesNew from './ServicesNew/ServicesNew';
import ServicesPopular from './ServicesPopular/ServicesPopular';
import ServisesQuestions from './ServisesQuestions/ServisesQuestions';
import ServicesInstruction from './ServicesInstruction/ServicesInstruction';
import ServicesSubscription from './ServicesSubscription/ServicesSubscription';

export default function Services() {
  const styles = {
    container: {
      margin: '38px 20px 78px'
    }
  };
  return (
    <Box sx={styles.container}>
      {/* <ServicesInfo /> */}
      <ServicesSubscription />
      <ServicesCatalog />
      <ServicesNew />
      <ServicesPopular />
      <ServisesQuestions />
      <ServicesInstruction />
    </Box>
  );
}
