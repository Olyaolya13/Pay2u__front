import { Box } from '@mui/material';
import SubscribeCard from '../SubscribeCard/SubscribeCard';
import SubscriptionPaymentContent from './SubscriptionPaymentContent/SubscriptionPaymentContent';
import SubscriptionPaymentInfo from './SubscriptionPaymentInfo/SubscriptionPaymentInfo';
import SubscriptionPaymentMethod from './SubscriptionPaymentMethod/SubscriptionPaymentMethod';
import SubmitButton from '../SubmitBtn/SubmitBtn';
import SubscriptionPaymentPopup from './SubscriptionPaymentPopup/SubscriptionPaymentPopup';
import { useState } from 'react';

const styles = {
  container: { margin: '14px 0 70px' },
  card: {
    display: 'grid',
    gridTemplateRows: 'repeat(1, 100px)',
    gridTemplateColumns: 'repeat(3, 124px)',
    columnGap: '16px',
    marginTop: '20px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none'
  }
};

export default function SubscriptionPayment() {
  const [open, setOpen] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };
  return (
    <Box sx={styles.container}>
      <SubscribeCard />
      <SubscriptionPaymentContent />
      <SubscriptionPaymentMethod />
      <SubscriptionPaymentInfo />
      <SubmitButton title="Оплатить" width="335px" height="56px" onClick={handleOpenPopup} />
      <SubscriptionPaymentPopup open={open} onClose={handleClosePopup} />
    </Box>
  );
}
