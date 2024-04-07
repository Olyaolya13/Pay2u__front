import { Box, Typography } from '@mui/material';
import Title from '../../../Titile/Titile';
import { SubscriptionPaymentContentData } from '../../../../utils/constants';

const font = {
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '400'
};

const styles = {
  container: { marginTop: '15px', borderBottom: '.4px solid #E2E2E2', textAlign: 'start' },
  aboutContainer: { margin: '0 20px' },
  sum: { ...font, fontWeight: '700', paddingRight: '4px' },
  about: { ...font, fontSize: '14px', color: '#676879' },
  number: { ...font, color: '#676879' },
  text: {
    display: 'flex'
  },
  textContainer: {
    marginTop: '28px'
  },
  numberContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '28px 0 16px'
  }
};

export default function SubscriptionPaymentContent() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.aboutContainer}>
        <Title title="Подписка Иви на 1 месяц" fontSize="18px" />
        <Box sx={styles.textContainer}>
          <Box sx={styles.text}>
            <Typography component="p" sx={styles.sum}>
              {SubscriptionPaymentContentData.sum} &#8381;
            </Typography>
            <Typography component="p" sx={styles.about}>
              {SubscriptionPaymentContentData.subtile}
            </Typography>
          </Box>
          <Box sx={{ ...styles.text, paddingTop: '10px' }}>
            <Typography component="p" sx={styles.sum}>
              {SubscriptionPaymentContentData.sumMonth} &#8381;
            </Typography>
            <Typography component="p" sx={styles.about}>
              {SubscriptionPaymentContentData.text}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.numberContainer}>
          <Typography component="p" sx={styles.number}>
            {SubscriptionPaymentContentData.textNumber}
          </Typography>
          <Typography component="p" sx={{ ...font, paddingTop: '4px' }}>
            {SubscriptionPaymentContentData.phone}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
