import { Box } from '@mui/material';
// import ServicesInfo from './ServivesInfo/ServivesInfo';
import ServicesCatalog from './ServicesCatalog/ServicesCatalog';
import ServicesNew from './ServicesNew/ServicesNew';
import ServicesPopular from './ServicesPopular/ServicesPopular';
import ServisesQuestions from './ServisesQuestions/ServisesQuestions';
import ServicesInstruction from '../../Instructions/ServiseInstructions/ServicesInstruction';
import ServicesSubscription from './ServicesSubscription/ServicesSubscription';
import { ServiceSubscribeIcon } from '../../../types/types';

interface ServicesProps {
  services: ServiceSubscribeIcon[];
}

export default function Services({ services }: ServicesProps) {
  const styles = {
    container: {
      margin: '38px 20px 78px'
    }
  };
  return (
    <Box sx={styles.container}>
      {/* <ServicesInfo /> */}
      <ServicesSubscription services={services} />
      <ServicesCatalog />
      <ServicesNew />
      <ServicesPopular />
      <ServisesQuestions />
      <ServicesInstruction />
    </Box>
  );
}
