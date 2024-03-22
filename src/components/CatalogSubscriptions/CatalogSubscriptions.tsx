import { Box } from '@mui/material';
import SearchCatalogSubscriptions from '../Search/Search';
import ContentCatalogSubscriptions from './ContentCatalogSubscriptions/ContentCatalogSubscriptions';
import Title from '../Titile/Titile';

export default function CatalogSubscriptions() {
  const styles = {
    container: { margin: '38px 20px 0', height: '100vh' }
  };
  return (
    <Box sx={styles.container}>
      <Title title="Кино" all="Все" />
      <SearchCatalogSubscriptions />
      <ContentCatalogSubscriptions />
    </Box>
  );
}
