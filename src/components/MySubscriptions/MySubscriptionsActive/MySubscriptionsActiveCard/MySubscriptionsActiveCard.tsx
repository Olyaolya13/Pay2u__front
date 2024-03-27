import { Box, CardMedia, Typography } from '@mui/material';
import { CardMySubscriptionsActiveData } from '../../../../types/types';

interface MySubscriptionsActiveCardProps {
  card: CardMySubscriptionsActiveData;
  onClick?: () => void;
}

export default function MySubscriptionsActiveCard({
  card,
  onClick
}: MySubscriptionsActiveCardProps) {
  const styles = {
    main: {
      padding: '19px 19px 13px 20px',
      borderBottom: '.4px solid #E2E2E2'
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start'
    },
    icon: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    card: { display: 'flex', alignItems: 'end' },
    text: {
      textAlign: 'start'
    },
    count: {
      textAlign: 'end',
      width: '138x'
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.28'
    },
    subtitle: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400'
    },
    sum: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '700',
      color: '#2A9B67'
    },
    description: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '500',
      color: '#676879'
    },
    period: {
      textAlign: 'start',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      color: '#2A9B67',
      marginLeft: '52px'
    },

    image: { width: '40px', height: '40px', marginRight: '12px' }
  };
  return (
    <>
      {card.isActive && (
        <Box sx={styles.main} onClick={onClick}>
          <Box sx={styles.container}>
            <Box sx={styles.icon}>
              <CardMedia component="img" sx={styles.image} image={card.image} alt={card.alt} />
              <Box sx={styles.text}>
                <Typography component="p" sx={styles.title}>
                  {card.title}
                </Typography>
                <Typography component="p" sx={styles.subtitle}>
                  {card.period}
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.card}>
              <Box sx={styles.count}>
                <Typography component="p" sx={styles.sum}>
                  {card.sum} &#8381;
                </Typography>
                <Typography component="p" sx={styles.description}>
                  {card.description}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography component="p" sx={styles.period}>
            До {card.activeUntill}
          </Typography>
        </Box>
      )}
    </>
  );
}
