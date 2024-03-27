import { Box } from '@mui/material';
import ManageSubscriptionCard from './ManageSubscriptionCard/ManageSubscriptionCard';
import ManageSubscriptionChooseBtn from './ManageSubscriptionChooseBtns/ManageSubscriptionChooseBtns';
import { ManageSubscriptionCardData } from '../../utils/constants';
import ManageSubscriptionAbout from './ManageSubscriptionAbout/ManageSubscriptionAbout';

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
      <ManageSubscriptionAbout />
    </Box>
  );
}
