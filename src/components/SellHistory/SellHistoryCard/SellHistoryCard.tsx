import './SellHistoryCard.css'
import { Box, CardMedia, Typography } from '@mui/material';
import {CardSellHistoryData } from '../../../types/types';
import KIcon from '../../../assets/KIcon.svg?react'

interface SellHistoryCardProps {
  card?: CardSellHistoryData;
}

export default function SellHistoryCard({card}:SellHistoryCardProps) {
  const styles = {
    container: {
      width:'395px',
      display: 'flex',
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius: '8px',
      padding:'20px 16px 20px',
     
    },

    card: { display: 'flex', alignItems: 'end',width:'390px'  },
    text: {
      textAlign: 'start',
      marginLeft: '12px'
    },
    count: {
      textAlign: 'end',

    },
    title: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.28',
      color: '#131313',
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
      paddingRight:'4px'
    },
    period:{  
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '400',
    color: '#489865',
    paddingRight:'4px'},
    textIcon:{
      display:'flex'
    },
    image: { width: '40px', height: '40px' }
  };
  return (
    <Box sx={{...styles.container, borderBottom: '.4px solid #E2E2E2'}}>
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
      {card?.sum}&#8381;
          </Typography>
          <Box sx={styles.textIcon}>
  {card?.cashBack ? (
    <Typography component="p" sx={styles.cashback}>
      {card?.cashBack}
    </Typography>
  ) : (
    <Typography component="p" sx={styles.period}>
      {card?.period}
    </Typography>
  )}
  <KIcon className='sell-history__icon'/>
</Box>
        </Box>
        </Box>
      </Box>

  );
}
