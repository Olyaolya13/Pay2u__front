import KIcon from '../../../../assets/KIcon.svg?react';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import { CardCatalogData } from '../../../../types/types';

interface ServicesCatalogCardProps {
  card: CardCatalogData;
}

export default function ServicesCatalogCard({ card }: ServicesCatalogCardProps) {
  const styles = {
    container: {
      maxWidth: '202px',
      height: '82px',
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center'
    },
    text: {
      display: 'flex'
    },
    image: {
      width: '65px',
      height: '70px'
    },
    Imagecontainer: {
      marginLeft: '2px',
      display: 'flex',
      justifyContent: 'end',
      width: '70px',
      height: '70px',
      borderRadius: '16px',
      boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
      overflow: 'hidden'
    },
    Cardcontainer: {
      padding: '0 0 0 12px'
    },
    title: {
      textAlign: 'start',
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '1.25'
    },
    subtitle: {
      marginTop: '2px',
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '1.25',
      letterSpacing: '1px'
    }
  };

  return (
    <Card sx={styles.container}>
      <Box sx={styles.Imagecontainer}>
        <CardMedia component="img" sx={styles.image} image={card.image} alt={card.alt} />
      </Box>
      <Box sx={styles.Cardcontainer}>
        <Typography component="p" sx={styles.title}>
          {card.title}
        </Typography>
        <Box sx={styles.text}>
          <Typography component="p" sx={styles.subtitle}>
            {card.discount}
          </Typography>
          <KIcon />
        </Box>
      </Box>
    </Card>
  );
}
