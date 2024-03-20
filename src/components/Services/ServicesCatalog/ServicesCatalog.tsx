import { Box } from '@mui/material';
import Title from '../../Titile/Titile';
import { ServicesCatalogData } from '../../../utils/constants';
import ServicesCatalogCard from '../ServicesCatalogCard/ServicesCatalogCard';
import { ServicesCatalogCardData } from '../../../utils/constants';

export default function ServicesCatalog() {
  const styles = {
    container: {
      margin: '32px 0 0'
    },
    card: {
      display: 'grid',
      gridTemplateRows: 'repeat(3, 80px) ',
      gridTemplateColumns: 'repeat(2, 200px) ',
      gridAutoFlow: 'column',
      columnGap: '61px',
      rowGap: '10px',
      margin: '28px 0'
    },
    title: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '16px',
      width: '311px',
      lineHeight: '1.25'
    }
  };
  return (
    <Box sx={styles.container}>
      <Title title={ServicesCatalogData.title} all={ServicesCatalogData.all} />
      <Box sx={styles.card}>
        {ServicesCatalogCardData.cards.map((card, index) => (
          <ServicesCatalogCard key={index} card={card} />
        ))}
      </Box>
    </Box>
  );
}
