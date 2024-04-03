import { Box, CardMedia, Typography } from '@mui/material';
import { CardSellHistoryData } from '../../../../types/types';
import KIcon from '../../../../assets/KIcon.svg?react';

interface SellHistoryCardProps {
  card?: CardSellHistoryData;
}

const font = { fontFamily: 'Inter', fontSize: '14px', fontWeight: '400' };

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
    ...font,
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.28',
    color: '#131313'
  },
  subtitle: {
    ...font,
    color: '#676879'
  },
  sum: {
    ...font,
    fontSize: '16px',
    fontWeight: '700',
    color: '#131313'
  },
  cashback: {
    ...font,
    color: '#C2C2C2',
    paddingRight: '4px'
  },
  period: {
    ...font,
    color: '#489865',
    paddingRight: '4px'
  },
  textIcon: {
    display: 'flex'
  },
  image: { width: '40px', height: '40px' },
  kicon: {
    width: '20px',
    height: '20px'
  }
};

export default function SellHistoryCard({ card }: SellHistoryCardProps) {
  return (
    <Box sx={{ ...styles.container, borderBottom: '.4px solid #E2E2E2' }}>
      <Box sx={styles.card}>
        <CardMedia component="img" sx={styles.image} image={card?.image} alt={card?.alt} />
        <Box sx={styles.text}>
          <Typography component="p" sx={styles.title}>
            {card?.title}
          </Typography>
          <Typography component="p" sx={styles.subtitle}>
            {card?.subtitle}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.card}>
        <Box sx={styles.count}>
          <Typography component="p" sx={styles.sum}>
            {card?.sum} &#8381;
          </Typography>
          <Box sx={styles.textIcon}>
            {card?.cashBack ? (
              <Typography component="p" sx={styles.cashback}>
                начислится {card?.cashBack}
              </Typography>
            ) : (
              <Typography component="p" sx={styles.period}>
                {card?.period}
              </Typography>
            )}
            {!card?.period && <KIcon style={styles.kicon} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
