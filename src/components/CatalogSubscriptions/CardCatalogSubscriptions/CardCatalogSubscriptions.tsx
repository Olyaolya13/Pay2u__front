import { Box, CardMedia, Typography } from '@mui/material';
import KIcon from '../../../assets/KIcon.svg?react';
import RaitingIcon from '../../../assets/RaitingIcon.svg?react';
import Okko from '../../../assets/OkkoIcon.svg';

export default function CardCatalogSubscriptions() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '8px',
      padding: '19px 19px 13px 20px'
    },

    card: { display: 'flex', alignItems: 'end' },
    text: {
      textAlign: 'start',
      marginLeft: '12px'
    },
    count: {
      textAlign: 'end',
      width: '138x'
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.28',
      color: '#131313'
    },
    subtitle: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      color: '#676879'
    },
    sum: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '700',
      color: '#131313'
    },
    cashback: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      color: '#C2C2C2',
      paddingRight: '4px'
    },
    period: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      color: '#489865',
      paddingRight: '4px'
    },
    textIcon: {
      display: 'flex'
    },
    image: { width: '40px', height: '40px' }
  };
  return (
    <Box sx={{ ...styles.container, borderBottom: '.4px solid #E2E2E2' }}>
      <Box sx={styles.card}>
        <CardMedia component="img" sx={styles.image} image={Okko} alt="Okko" />
        <Box sx={styles.text}>
          <Typography component="p" sx={styles.title}>
            Okko
          </Typography>
          <KIcon className="sell-history__icon" />
        </Box>

        <Typography component="p" sx={styles.subtitle}>
          Фильмы напрямую от голливудских студий
        </Typography>
        <Box sx={styles.text}>
          <Typography component="p" sx={styles.title}>
            4.2
          </Typography>
          <RaitingIcon />
          <Typography component="p" sx={styles.subtitle}>
            От 199&#8381;/месяц
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
