import { Box } from '@mui/material';
import CardSearchCatalogSubscriptions from '../CardCatalogSubscriptions/CardCatalogSubscriptions';

export default function ContentSearchCatalogSubscriptions() {
  const styles = {
    container: {}
  };
  return (
    <Box sx={styles.container}>
      <CardSearchCatalogSubscriptions />
    </Box>
  );
}
