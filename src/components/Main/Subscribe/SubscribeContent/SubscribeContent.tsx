import { Box } from '@mui/material';
import SubscribeContentTitle from './SubscribeContentTitle/SubscribeContentTitle';
import SubscribeContentCard from './SubscribeContentCard/SubscribeContentCard';
import { SubscribeContentData } from '../../../../utils/constants';

const styles = {
  container: {},
  card: { display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none' }
};

export default function SubscribeContent() {
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
