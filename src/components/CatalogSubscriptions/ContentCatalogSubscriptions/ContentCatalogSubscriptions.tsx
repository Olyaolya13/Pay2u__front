import { Box } from '@mui/material';
import Title from '../../Titile/Titile';
import CardCatalogSubscriptions from '../CardCatalogSubscriptions/CardCatalogSubscriptions';
import {
  ContentCatalogSubscriptionsData,
  SubscriptionsCardCatalogMovieData
} from '../../../utils/constants.tsx';

export default function ContentCatalogSubscriptions() {
  const styles = {
    container: { margin: '24px 0 0 ' }
  };
  return (
    <Box sx={styles.container}>
      <Title
        title={ContentCatalogSubscriptionsData.title}
        fontSize="16px"
        padding="16px 0 4px 20px"
      />
      {SubscriptionsCardCatalogMovieData.card.map((card, index) => (
        <CardCatalogSubscriptions key={index} card={card} />
      ))}
    </Box>
  );
}
