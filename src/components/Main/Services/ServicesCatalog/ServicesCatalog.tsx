import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import Title from '../../../Titile/Titile';
import { ServicesCatalogData } from '../../../../utils/constants';
import ServicesCatalogCard from './ServicesCatalogCard/ServicesCatalogCard';
import { ServicesCatalogCardData } from '../../../../utils/constants';

const font = { fontFamily: 'Inter', fontWeight: '700', fontSize: '16px' };

const styles = {
  container: {
    margin: '32px 0 0'
  },
  card: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, 90px) ',
    gridTemplateColumns: 'repeat(2, 200px) ',
    gridAutoFlow: 'column',
    columnGap: '61px',
    rowGap: '10px',
    margin: '24px 0 0',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none'
  },
  title: {
    ...font,
    width: '311px',
    lineHeight: '1.25'
  }
};

export default function ServicesCatalog() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/categories');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const click = () => {
      window.scrollTo(0, 0);
    };
    return () => {
      click();
    };
  }, []);

  return (
    <Box sx={styles.container}>
      <Title title={ServicesCatalogData.title} all={ServicesCatalogData.all} link="/catalog" />
      <Box sx={styles.card}>
        {ServicesCatalogCardData.cards.map((card, index) => (
          <ServicesCatalogCard
            key={index}
            card={card}
            onClick={card.title === 'Кино' ? handleClick : undefined}
          />
        ))}
      </Box>
    </Box>
  );
}
