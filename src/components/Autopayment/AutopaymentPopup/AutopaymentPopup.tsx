import { Box, Modal, Typography } from '@mui/material';
import FilterPopupBtn from '../../../assets/FilterPopupBtn.svg?react';
import AutopayConnectIcon from '../../../assets/AutopayConnectIcon.svg?react';
import SubmitButton from '../../SubmitBtn/SubmitBtn';

interface FiltersPopupSelectProps {
  open: boolean;
  onClose: () => void;
}

export default function AutopaymentPopup({ open, onClose }: FiltersPopupSelectProps) {
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
      top: '400px',
      left: 0,
      width: '335px',
      height: '100%'
    }
  };

  function handleClose() {
    onClose();
  }

  const handleApplyClick = () => {
    onClose();
    console.log('btn');
  };

  return (
    <Modal sx={styles.container} open={open} onClose={onClose}>
      <Box sx={styles.popover}>
        <Box sx={styles.text}>
          <FilterPopupBtn />
          <Box>
            <AutopayConnectIcon onClick={handleClose} />
            <Typography sx={styles.title}>Автоплатеж подключен</Typography>
          </Box>
        </Box>
        <Typography>199 &#8381;</Typography>
        <Typography>
          Следующий платеж <span>10.04.2024.</span>
        </Typography>
        <Typography>Напомним за 2 дня до списания.</Typography>
        <SubmitButton
          title="Вернуться на главную"
          width="335px"
          height="56px"
          onClick={handleApplyClick}
        />
      </Box>
    </Modal>
  );
}
