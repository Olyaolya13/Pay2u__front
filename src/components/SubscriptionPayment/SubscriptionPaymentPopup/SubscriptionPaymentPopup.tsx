import { Box, Modal, Typography } from '@mui/material';
import FilterPopupBtn from '../../../assets/FilterPopupBtn.svg?react';
import AutopayConnectIcon from '../../../assets/AutopayConnectIcon.svg?react';
import SubmitButton from '../../SubmitBtn/SubmitBtn';
import { useNavigate } from 'react-router-dom';
import { AutopaymentPopupData } from '../../../utils/constants';

interface SubscriptionPaymentPopupProps {
  open: boolean;
  onClose: () => void;
}
const font = { fontFamily: 'Inter', fontSize: '16px', fontWeight: '400' };

const styles = {
  container: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  title: {
    ...font,
    fontSize: '18px',
    fontWeight: '700'
  },
  done: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  sum: { ...font, fontWeight: '700' },
  subtitle: { ...font, fontSize: '14px', paddingTop: '5px' },
  date: { color: '#E86513', marginLeft: '10px' },
  popover: {
    padding: '12px 20px 64px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    top: '116px',
    bottom: '0',
    left: 0,
    width: '335px'
  },
  icon: { width: '74px', height: '74px', margin: '20px 0' },
  text: { margin: '30px 0 ', textAlign: 'center' }
};

export default function SubscriptionPaymentPopup({ open, onClose }: SubscriptionPaymentPopupProps) {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    onClose();
    navigate('/services');
    window.scroll(0, 0);
  };

  return (
    <Modal sx={styles.container} open={open} onClose={onClose}>
      <Box sx={styles.popover}>
        <Box sx={styles.done}>
          <FilterPopupBtn />
          <Typography sx={styles.title}>Подписка оплачена</Typography>
          <AutopayConnectIcon style={styles.icon} />
        </Box>
        <Box sx={styles.text}>
          <Typography sx={styles.sum}>299 &#8381;</Typography>
          <Typography sx={styles.sum}>FDJ264999SHK0</Typography>
          <Typography sx={styles.subtitle}>
            Активировать до
            <span style={styles.date}>{AutopaymentPopupData.date}.</span>
          </Typography>
        </Box>
        <SubmitButton
          title="Скопировать и перейти на сайт"
          width="335px"
          height="56px"
          onClick={handleApplyClick}
        />
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
