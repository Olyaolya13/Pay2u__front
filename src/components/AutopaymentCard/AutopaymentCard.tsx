import { Box, Button, CardMedia, Typography } from '@mui/material';
import { CardAutopaymentData } from '../../types/types';

interface ManageSubscriptionBtnProps {
  card: CardAutopaymentData;
  onClick?: () => void;
}

const font = { fontSize: '14px', fontFamily: 'Inter', fontWeight: '400' };

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
  text: {
    display: 'flex',
    width: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '12px'
  },
  title: {
    ...font,
    color: '#676879'
  },
  image: {
    width: '40px',
    height: '40px'
  },
  number: {
    ...font,
    color: '#131313',
    width: '100px'
  }
};

export default function AutopaymentCard({ card, onClick }: ManageSubscriptionBtnProps) {
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
