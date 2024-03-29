import { Box } from '@mui/material';
import Search from '../Search/Search';
import { SubscriptionsCardCatalogMovieData } from '../../utils/constants.tsx';
import CardCatalog from '../CardCatalog/CardCatalog.tsx';
import Filters from '../Filters/Filters.tsx';
import { useNavigate } from 'react-router-dom';

export default function CategoriesMovie() {
  const navigate = useNavigate();

  const styles = {
    container: { margin: '24px 20px 0', position: 'relative' }
  };

  const handleOpen = () => {
    navigate('/subscribe');
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={styles.container}>
      <Search />
      <Filters />
      {SubscriptionsCardCatalogMovieData.card.map((card, index) => (
        <CardCatalog key={index} card={card} onClick={handleOpen} />
      ))}
    </Box>
  );
}
