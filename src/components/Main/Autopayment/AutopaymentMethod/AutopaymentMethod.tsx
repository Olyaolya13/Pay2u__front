import { Box } from '@mui/material';
import AutopaymentCard from '../../../AutopaymentCard/AutopaymentCard';
import { AutopaymentCardData } from '../../../../utils/constants';
import Title from '../../../Titile/Titile';

const styles = {
  container: {
    margin: '38px 20px 0',
    display: 'flex',
    flexDirection: 'column'
  },
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

export default function AutopaymentContent() {
  return (
    <Box sx={styles.container}>
      <Title title="Выбрать способ оплаты" fontSize="14px" />
      <Box sx={styles.card}>
        {AutopaymentCardData.card.map((card, index) => (
          <AutopaymentCard key={index} card={card} />
        ))}
      </Box>
    </Box>
  );
}
