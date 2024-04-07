import { Box, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface SubscriptionPaymentPopupInfoProps {
  width?: string;
  height?: string;
  marginTop?: string;
  image: string;
  alt: string;
  title: string;
}
const font = { fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', color: '#131313' };

const styles = {
  container: {
    width: '335px',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    ...font,
    paddingBottom: '8px',
    borderBottom: '.4px solid #E2E2E2',
    width: '306px'
  },
  link: {
    display: 'flex',
    textDecoration: 'none'
  }
};

export default function SubscriptionPaymentPopupInfo({
  width,
  height,
  marginTop,
  image,
  alt,
  title
}: SubscriptionPaymentPopupInfoProps) {
  return (
    <Box sx={{ ...styles.container, marginTop: marginTop ? marginTop : '16px' }}>
      <Link to={title === 'Создать автоплатеж' ? '/autopayment' : ''} style={styles.link}>
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{
            padding: '0 8px 0 0 ',
            width: width ? width : '18px',
            height: height ? height : '18px'
          }}
        />

        <Typography sx={styles.title} component="h3">
          {title}
        </Typography>
      </Link>
    </Box>
  );
}
