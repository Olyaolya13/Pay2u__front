import { Box } from '@mui/material';
import Title from '../../../Titile/Titile.tsx';
import { useNavigate } from 'react-router-dom';
import CardCatalog from '../../../CardCatalog/CardCatalog.tsx';
import {
  ContentCatalogSubscriptionsMovieData,
  SubscriptionsCardCatalogMovieData,
  ContentCatalogSubscriptionsReadData,
  SubscriptionsCardCatalogReadData,
  ContentCatalogSubscriptionsComboData,
  SubscriptionsCardCatalogComboData
} from '../../../../utils/constants.tsx';

const styles = {
  container: { margin: '24px 0 0' }
};

export default function ContentCatalogSubscriptions() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/categories');
    window.scrollTo(0, 0);
  };

  const handleOpen = () => {
    navigate('/subscribe');
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={styles.container}>
      <Title
        title={ContentCatalogSubscriptionsMovieData.title}
        all={ContentCatalogSubscriptionsMovieData.all}
        onClick={ContentCatalogSubscriptionsMovieData.title === 'Кино' ? handleClick : undefined}
        padding="10px 0 4px"
      />
      {SubscriptionsCardCatalogMovieData.card.map((card, index) => (
        <CardCatalog key={index} card={card} onClick={handleOpen} />
      ))}
      <Title
        title={ContentCatalogSubscriptionsReadData.title}
        all={ContentCatalogSubscriptionsReadData.all}
        padding="24px 0 4px"
      />
      {SubscriptionsCardCatalogReadData.card.map((card, index) => (
        <CardCatalog key={index} card={card} onClick={handleOpen} />
      ))}
      <Title
        title={ContentCatalogSubscriptionsComboData.title}
        all={ContentCatalogSubscriptionsComboData.all}
        padding="28px 0 4px "
      />
      {SubscriptionsCardCatalogComboData.card.map((card, index) => (
        <CardCatalog key={index} card={card} onClick={handleOpen} />
      ))}
    </Box>
  );
}
