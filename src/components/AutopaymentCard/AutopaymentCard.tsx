import { Box, Button, CardMedia, Typography } from '@mui/material';
import { CardAutopaymentData } from '../../types/types';

interface ManageSubscriptionBtnProps {
  card: CardAutopaymentData;
  onClick?: () => void;
}

export default function AutopaymentCard({ card, onClick }: ManageSubscriptionBtnProps) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      textTransform: 'none',
      backgroundColor: '#fff',
      width: '124px',
      height: '94px',
      boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
      border: '.2px solid',
      borderRadius: '16px',
      '&:hover': {
        backgroundColor: '#fff'
      },
      '&:focus': {
        backgroundColor: '#fff'
      }
    },
    text: { display: 'flex', width: '100px', alignItems: 'center', justifyContent: 'center' },
    title: {
      color: '#676879',
      fontSize: '10px',
      fontFamily: 'Inter',
      fontWeight: '400'
    },
    image: {
      width: '40px',
      height: '40px'
    },
    number: {
      color: '#131313',
      fontSize: '10px',
      fontFamily: 'Inter',
      fontWeight: '400',
      width: '100px'
    }
  };

  return (
    <Button onClick={onClick} disableElevation variant="contained" sx={styles.container}>
      <CardMedia sx={styles.image} component="img" image={card.image} alt={card.alt} />
      <Box sx={styles.text}>
        {card.number && (
          <Typography component="p" sx={styles.number}>
            {card.number}
          </Typography>
        )}
        <Typography component="p" sx={styles.title}>
          {card.title}
        </Typography>
      </Box>
    </Button>
  );
}
