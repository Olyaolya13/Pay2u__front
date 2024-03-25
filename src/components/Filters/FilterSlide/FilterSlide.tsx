import Button from '@mui/material/Button';
import FilterSlideIcon from '../../../assets/FilterSlideIcon.svg?react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function FilterSlide() {
  const styles = {
    button: { backgroundColor: '#F9F9F9', borderRadius: '16px', width: '107px', height: '36px' },
    title: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      textAlign: 'center',
      color: '#131313',
      textTransform: 'none'
    },
    image: {
      width: '18px',
      height: '18px'
    }
  };
  return (
    <Stack>
      <Button
        disableElevation
        sx={{
          ...styles.button,
          '&:hover': {
            backgroundColor: '#F9F9F9'
          }
        }}
        variant="contained"
        endIcon={<FilterSlideIcon style={styles.image} />}
      >
        <Typography sx={styles.title}>Фильтр</Typography>
      </Button>
    </Stack>
  );
}
