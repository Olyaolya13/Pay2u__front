import style from './FiltersPopupSelect.module.scss';
import { Box, List, ListItemText, MenuItem, Modal, Typography } from '@mui/material';
import FilterPopupBtn from '../../../assets/FilterPopupBtn.svg?react';
import CloseIcon from '../../../assets/CloseIconGreen.svg?react';
import SubmitButton from '../../Btns/SubmitBtn';
import { useState } from 'react';

interface FiltersPopupSelectProps {
  open: boolean;
  onClose: () => void;
  onSelectOption: (option: string) => void;
}

const font = { fontFamily: 'Inter', fontSize: '22px', fontWeight: '700' };

const styles = {
  container: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  title: {
    ...font,
    textTransform: 'none',
    margin: '20px 0 32px'
  },
  text: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  popover: {
    padding: '12px 20px 66px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    top: '301px',
    left: 0,
    width: '335px',
    height: '100%'
  }
};

export default function FiltersPopupSelect({
  open,
  onClose,
  onSelectOption
}: FiltersPopupSelectProps) {
  const handleMenuItemClick = (option: string) => {
    setSelectedOption(option);
  };

  function handleClose() {
    onClose();
  }

  const handleApplyClick = () => {
    onSelectOption(selectedOption);
    onClose();
  };

  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <Modal sx={styles.container} open={open} onClose={onClose}>
      <Box sx={styles.popover}>
        <Box sx={styles.text}>
          <FilterPopupBtn />
          <Box>
            <Typography sx={styles.title}>Сортировка</Typography>
            <CloseIcon className={style.close__icon} onClick={handleClose} />
          </Box>
        </Box>
        <List
          sx={{
            '&.MuiList-root': { padding: '0 0 66px 40px', width: '100%', textAlign: 'start' },
            '& .MuiButtonBase-root': { padding: '0' }
          }}
        >
          {['По популярности', 'По названию', 'Новинки', 'Сначала дешевые', 'Сначала дорогие'].map(
            (option, index) => (
              <MenuItem disableRipple key={index} onClick={() => handleMenuItemClick(option)}>
                <ListItemText
                  primary={option}
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: '14px',
                      padding: '0',
                      color: selectedOption === option ? '#489865' : 'inherit'
                    }
                  }}
                />
              </MenuItem>
            )
          )}
        </List>

        <SubmitButton title="Применить" width="335px" height="56px" onClick={handleApplyClick} />
      </Box>
    </Modal>
  );
}
