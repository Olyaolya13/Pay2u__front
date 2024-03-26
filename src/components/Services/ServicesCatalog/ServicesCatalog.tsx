import { Box } from '@mui/material';
import Title from '../../Titile/Titile';
import { ServicesCatalogData } from '../../../utils/constants';
import ServicesCatalogCard from './ServicesCatalogCard/ServicesCatalogCard';
import { ServicesCatalogCardData } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ServicesCatalog() {
  const navigate = useNavigate();

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
      margin: '24px 0 0'
    },
    title: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '16px',
      width: '311px',
      lineHeight: '1.25'
    }
  };

  const handleClick = () => {
    navigate('/categories');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    return () => {
      unlisten();
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
