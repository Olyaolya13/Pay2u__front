import { Box } from '@mui/material';
import FilterSelect from './FilterSelect/FilterSelect';

export default function Filter() {
  const styles = {
    container: {}
  };

  return (
    <Box sx={styles.container}>
      <FilterSelect />
    </Box>
  );
}
