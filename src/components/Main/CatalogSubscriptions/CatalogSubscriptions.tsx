import { Box } from '@mui/material';
import ContentCatalogSubscriptions from './CatalogContentSubscriptions/CatalogContentSubscriptions';
import SearchCatalogSubscriptions from '../../Search/Search';

const styles = {
  container: { margin: '38px 20px 78px' }
};
export default function CatalogSubscriptions() {
  return (
    <Box sx={styles.container}>
      <SearchCatalogSubscriptions />
      <ContentCatalogSubscriptions />
    </Box>
  );
}
