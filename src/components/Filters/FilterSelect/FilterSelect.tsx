import style from './FilterSelect.module.scss';
import FilterArrow from '../../../assets/FilterArrow.svg?react';
import { Button, Typography } from '@mui/material';
import FiltersPopupSelect from '../FiltersPopupSelect/FiltersPopupSelect';
import { useState } from 'react';

const font = { fontFamily: 'Inter', fontSize: '14px', fontWeight: '400' };

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
    ...font,
    color: '#131313',
    textTransform: 'none',
    paddingRight: '20px'
  }
};

export default function FilterSelect() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState('По популярности');

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        endIcon={<FilterArrow className={style.arrow__icon} />}
        onClick={handleOpen}
      >
        {selectedOption && <Typography sx={styles.title}>{`${selectedOption}`}</Typography>}
      </Button>
      <FiltersPopupSelect open={open} onClose={handleClose} onSelectOption={handleSelectOption} />
    </>
  );
}
