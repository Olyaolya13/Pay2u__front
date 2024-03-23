import { Box } from '@mui/material';
import Title from '../../Titile/Titile';
import CardCatalogSubscriptions from '../CardCatalogSubscriptions/CardCatalogSubscriptions';
import {
  ContentCatalogSubscriptionsMovieData,
  SubscriptionsCardCatalogMovieData,
  ContentCatalogSubscriptionsReadData,
  SubscriptionsCardCatalogReadData,
  ContentCatalogSubscriptionsComboData,
  SubscriptionsCardCatalogComboData
} from '../../../utils/constants.tsx';

export default function ContentCatalogSubscriptions() {
  const styles = {
    container: { margin: '24px 0 0' }
  };
  return (
    <Box sx={styles.container}>
      <Title
        title={ContentCatalogSubscriptionsMovieData.title}
        all={ContentCatalogSubscriptionsMovieData.all}
        padding="10px 0 4px"
      />
      {SubscriptionsCardCatalogMovieData.card.map((card, index) => (
        <CardCatalogSubscriptions key={index} card={card} />
      ))}
      <Title
        title={ContentCatalogSubscriptionsReadData.title}
        all={ContentCatalogSubscriptionsReadData.all}
        padding="24px 0 4px"
      />
      {SubscriptionsCardCatalogReadData.card.map((card, index) => (
        <CardCatalogSubscriptions key={index} card={card} />
      ))}
      <Title
        title={ContentCatalogSubscriptionsComboData.title}
        all={ContentCatalogSubscriptionsComboData.all}
        padding="28px 0 4px "
      />
      {SubscriptionsCardCatalogComboData.card.map((card, index) => (
        <CardCatalogSubscriptions key={index} card={card} />
      ))}
    </Box>
  );
}
