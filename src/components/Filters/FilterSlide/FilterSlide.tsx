import Button from '@mui/material/Button';
import FilterSlideIcon from '../../../assets/FilterSlideIcon.svg?react';
import { Typography } from '@mui/material';
import FiltersPopupSlide from '../FilterPopupSlide/FilterPopupSlide';
import { useState } from 'react';

export default function FilterSlide() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    icon: {
      width: '18px',
      height: '18px'
    }
  };
  return (
    <>
      <Button
        disableElevation
        sx={{
          ...styles.button,
          '&:hover': {
            backgroundColor: '#F9F9F9'
          }
        }}
        variant="contained"
        endIcon={<FilterSlideIcon style={styles.icon} />}
        onClick={handleOpen}
      >
        <Typography sx={styles.title}>Фильтр</Typography>
      </Button>
      <FiltersPopupSlide open={open} onClose={handleClose} />
    </>
  );
}
