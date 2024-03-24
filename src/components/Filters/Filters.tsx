import { Box } from '@mui/material';
import FilterSelect from './FilterSelect/FilterSelect';
import FilterSlide from './FilterSlide/FilterSlide';

export default function Filters() {
  const styles = {
    container: {}
  };

  return (
    <Box sx={styles.container}>
      <FilterSelect />
      <FilterSlide />
    </Box>
  );
}
