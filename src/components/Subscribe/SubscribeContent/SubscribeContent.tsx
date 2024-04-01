import { Box } from '@mui/material';
import SubscribeContentTitle from './SubscribeContentTitle/SubscribeContentTitle';
import SubscribeContentCard from './SubscribeContentCard/SubscribeContentCard';
import { SubscribeContentData } from '../../../utils/constants';

export default function SubscribeContent() {
  const styles = {
    container: {},
    card: { display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }
  };
  return (
    <Box sx={styles.container}>
      {Object.values(SubscribeContentData).map((data, index) => (
        <Box key={index}>
          <SubscribeContentTitle
            title={data.title}
            data={{
              description: data.description,
              cashback: data.cashback
            }}
          />
          <Box sx={styles.card}>
            {data.cards.map((cardData, cardIndex) => (
              <SubscribeContentCard key={cardIndex} data={cardData} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
