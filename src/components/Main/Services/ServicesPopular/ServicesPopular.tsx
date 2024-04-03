import { Box } from '@mui/material';
import ServicesNewCard from '../ServicesCard/ServiceCard';
import Title from '../../../Titile/Titile';
import { ServicesPopularData } from '../../../../utils/constants';
import { ServicesPopularCardData } from '../../../../utils/constants';

const styles = {
  container: {
    margin: '32px 0 0'
  },
  card: {
    display: 'grid',
    gridTemplateRows: 'repeat(1, 140px)',
    gridTemplateColumns: 'repeat(3, 140px)',
    columnGap: '20px',
    marginTop: '24px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none'
  }
};

export default function ServicesPopular() {
  return (
    <Box sx={styles.container}>
      <Title title={ServicesPopularData.title} all={ServicesPopularData.all} />
      <Box sx={styles.card}>
        {ServicesPopularCardData.cards.map((card, index) => (
          <ServicesNewCard key={index} card={card} />
        ))}
      </Box>
    </Box>
  );
}
