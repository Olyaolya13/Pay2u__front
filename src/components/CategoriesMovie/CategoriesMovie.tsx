import { Box } from '@mui/material';
import Search from '../Search/Search';
import { SubscriptionsCardCatalogMovieData } from '../../utils/constants.tsx';
import CardCatalog from '../CardCatalog/CardCatalog.tsx';
import Filter from '../Filter/FilterSelect/FilterSelect.tsx';

export default function CategoriesMovie() {
  const styles = {
    container: { margin: '24px 20px 0' }
  };
  return (
    <Box sx={styles.container}>
      <Search />
      <Filter />
      {SubscriptionsCardCatalogMovieData.card.map((card, index) => (
        <CardCatalog key={index} card={card} />
      ))}
    </Box>
  );
}
