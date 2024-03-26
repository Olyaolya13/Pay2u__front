import { Box } from '@mui/material';
import ManageSubscriptionBtn from './ManageSubscriptionBtn/ManageSubscriptionBtn';
import { ManageSubscriptionBtnData } from '../../../utils/constants';

const styles = {
  container: { display: 'flex', justifyContent: 'space-between', marginTop: '40px' }
};

export default function ManageSubscriptionChooseBtn() {
  return (
    <Box sx={styles.container}>
      {ManageSubscriptionBtnData.card.map((card, index) => (
        <ManageSubscriptionBtn key={index} card={card} />
      ))}
    </Box>
  );
}
