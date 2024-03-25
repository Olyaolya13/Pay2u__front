import { Box } from '@mui/material';
import FilterSelect from './FilterSelect/FilterSelect';
import FilterSlide from './FilterSlide/FilterSlide';

export default function Filters() {
  const styles = {
    container: { display: 'flex', justifyContent: 'space-between', margin: '32px 0 0' }
  };

  return (
    <Box sx={styles.container}>
      <FilterSelect />
      <FilterSlide />
    </Box>
  );
}
