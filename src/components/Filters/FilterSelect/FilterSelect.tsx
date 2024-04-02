import './FilterSelect.css';
import FilterArrow from '../../../assets/FilterArrow.svg?react';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import FiltersPopupSelect from '../FiltersPopupSelect/FiltersPopupSelect';
import { useState } from 'react';

interface FilterSelectProps {
  onClick: (selectedOption: string) => void;
}

export default function FilterSelect({ onClick }: FilterSelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState('');

  const styles = {
    container: { position: 'relative', width: '175px' },
    button: {
      backgroundColor: '#F9F9F9',
      borderRadius: '16px',
      height: '36px',
      padding: '0',
      textAlign: 'start',
      width: '175px'
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      color: '#131313',
      textTransform: 'none',
      paddingRight: '20px'
    }
  };

  const handleSelectOption = option => {
    setSelectedOption(option);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        disableElevation
        sx={{
          ...styles.button,
          '&:hover': {
            backgroundColor: '#F9F9F9'
          }
        }}
        variant="contained"
        endIcon={<FilterArrow className="filter__icon" />}
        onClick={handleOpen}
      >
        <Typography sx={styles.title}>По популярности</Typography>
      </Button>
      <FiltersPopupSelect open={open} onClose={handleClose} onSelectOption={handleSelectOption} />
    </Box>
  );
}
