import { Button, CardMedia, Typography } from '@mui/material';
import { BtnManageSubscriptionData } from '../../../../../types/types';

interface ManageSubscriptionBtnProps {
  card: BtnManageSubscriptionData;
  onClick?: () => void;
}

const font = { color: '#131313', fontSize: '10px', fontFamily: 'Inter', fontWeight: '400' };

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'none',
    backgroundColor: '#fff',
    width: '101px',
    height: '74px',
    boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
    border: '.2px solid',
    borderRadius: '16px',
    '&:hover': {
      backgroundColor: '#fff'
    },
    '&:focus': {
      backgroundColor: '#fff',
      boxShadow: 'none'
    }
  },
  title: {
    ...font,
    marginTop: '4px',
    width: '100px'
  },
  image: {
    width: '24px',
    height: '24px'
  }
};

export default function ManageSubscriptionBtn({ card, onClick }: ManageSubscriptionBtnProps) {
  return (
    <Button
      onClick={onClick}
      disableElevation
      variant="contained"
      sx={{ ...styles.container, borderColor: card.borderColor || ' ' }}
    >
      <CardMedia sx={styles.image} component="img" image={card.image} alt={card.alt} />
      <Typography component="p" sx={styles.title}>
        {card.title}
      </Typography>
    </Button>
  );
}
