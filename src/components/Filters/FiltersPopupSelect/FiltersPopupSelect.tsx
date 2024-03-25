import './FiltersPopupSelect.css';
import { Box, List, ListItemText, MenuItem, Modal, Typography } from '@mui/material';
import FilterPopupBtn from '../../../assets/FilterPopupBtn.svg?react';
import CloseIcon from '../../../assets/CloseIconGreen.svg?react';
import SubmitButton from '../../SubmitBtn/SubmitBtn';

interface FiltersPopupSelectProps {
  open: boolean;
  onClose: () => void;
  onClick: (option: string) => void;
}

export default function FiltersPopupSelect({ open, onClose, onClick }: FiltersPopupSelectProps) {
  const styles = {
    container: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    title: {
      fontFamily: 'Inter',
      fontSize: '22px',
      fontWeight: '700',
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
      top: '200px',
      left: 0,
      width: '335px',
      height: '100%'
    }
  };

  function handleClose() {
    onClose();
  }

  return (
    <Modal sx={styles.container} open={open} onClose={onClose}>
      <Box sx={styles.popover}>
        <Box sx={styles.text}>
          <FilterPopupBtn />
          <Box>
            <Typography sx={styles.title}>Сортировка</Typography>
            <CloseIcon className="filter-popup__icon" onClick={handleClose} />
          </Box>
        </Box>
        <List
          sx={{
            '&.MuiList-root': { padding: '0 0 66px', width: '100%', textAlign: 'start' },
            '& .MuiButtonBase-root': { padding: '0' }
          }}
        >
          {['По популярности', 'По названию', 'Новинки', 'Сначала дешевые', 'Сначала дорогие'].map(
            (option, index) => (
              <MenuItem
                disableRipple
                sx={{
                  '& .MuiButtonBase-root .MuiMenuItem-root': { fontSize: '14px', padding: '0' }
                }}
                key={index}
                onClick={() => onClick(option)}
              >
                <ListItemText
                  primary={option}
                  sx={{
                    '& .MuiTypography-root': { fontSize: '14px', fontWeight: '400' }
                  }}
                />
              </MenuItem>
            )
          )}
        </List>
        <SubmitButton title="Применить" />
      </Box>
    </Modal>
  );
}
