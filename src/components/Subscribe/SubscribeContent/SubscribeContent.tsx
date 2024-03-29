import { Box } from '@mui/material';
import SubscribeContentTitle from './SubscribeContentTitle/SubscribeContentTitle';
import SubscribeContentCard from './SubscribeContentCard/SubscribeContentCard';
import { SubscribeContentTitleData } from '../../../utils/constants';

export default function SubscribeContent() {
  const styles = {
    container: {}
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.container}>
        {Object.keys(SubscribeContentTitleData).map((title, index) => (
          <SubscribeContentTitle
            key={index}
            title={title}
            data={SubscribeContentTitleData[title as keyof typeof SubscribeContentTitleData]}
          />
        ))}
      </Box>

      <SubscribeContentCard />
    </Box>
  );
}
