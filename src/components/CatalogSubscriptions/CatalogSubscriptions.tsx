import { Box } from '@mui/material';
import ContentCatalogSubscriptions from './CatalogContentSubscriptions/CatalogContentSubscriptions';
import SearchCatalogSubscriptions from '../Search/Search';

export default function CatalogSubscriptions() {
  const styles = {
    container: { margin: '38px 20px 78px' }
  };
  return (
    <Box sx={styles.container}>
      <SearchCatalogSubscriptions />
      <ContentCatalogSubscriptions />
    </Box>
  );
}
