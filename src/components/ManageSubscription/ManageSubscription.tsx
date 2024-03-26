import { Box } from '@mui/material';
import ManageSubscriptionCard from './ManageSubscriptionCard/ManageSubscriptionCard';
import ManageSubscriptionChooseBtn from './ManageSubscriptionChooseBtns/ManageSubscriptionChooseBtns';
import { ManageSubscriptionCardData } from '../../utils/constants';

const styles = {
  container: {
    margin: '38px 20px 0'
  }
};

export default function ManageSubscription() {
  return (
    <Box sx={styles.container}>
      {ManageSubscriptionCardData.card.map((card, index) => (
        <ManageSubscriptionCard key={index} card={card} />
      ))}
      <ManageSubscriptionChooseBtn />
    </Box>
  );
}
