import { Box, CardMedia, Typography } from '@mui/material';
import InfoIcon from '../../../../../assets/InfoIcon.svg?react';
import {
  ManageSubscriptionWaitIdAboutData,
  ManageSubscriptionAboutData
} from '../../../../../utils/constants';
import Title from '../../../../Titile/Titile';

const font = { fontSize: '14px', fontWeight: '400', fontFamily: 'Inter' };

const styles = {
  container: { marginTop: '8px' },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '.4px solid #E2E2E2',
    padding: '13px 0'
  },
  title: {
    ...font,
    color: '#676879',
    fontWeight: '500'
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    width: '18px',
    height: '18px',
    marginLeft: '7px'
  },
  pay: { width: '32px', height: '18px' }
};

export default function ManageSubscriptionWaitIdAboutContent() {
  return (
    <Box sx={styles.container}>
      <Title title={ManageSubscriptionAboutData.titleSubscription} />
      <Box sx={{ ...styles.text, paddingTop: '24px' }}>
        <Typography sx={styles.title}>Следующее списание</Typography>
        <Typography sx={{ ...font }}>{ManageSubscriptionWaitIdAboutData.date}</Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Стоимость</Typography>
        <Typography sx={{ ...font }}>{ManageSubscriptionWaitIdAboutData.sum} &#8381;</Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Счет списания</Typography>
        <CardMedia
          sx={styles.pay}
          component="img"
          image={ManageSubscriptionWaitIdAboutData.paySystem}
          alt={ManageSubscriptionWaitIdAboutData.alt}
        />
      </Box>
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Номер телефона</Typography>
        <Typography sx={{ ...font }}>{ManageSubscriptionWaitIdAboutData.phoneNumber}</Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Кешбэк </Typography>
        <Typography sx={{ ...font }}>{ManageSubscriptionWaitIdAboutData.cashback}%</Typography>
      </Box>
      <Box sx={styles.text}>
        <Box sx={styles.info}>
          <Typography sx={{ ...styles.title, color: '#489865' }}>Ваша выгода</Typography>
          <InfoIcon style={styles.icon} />
        </Box>
        <Typography sx={{ ...font, color: '#489865' }}>
          ~ {ManageSubscriptionWaitIdAboutData.profit}&#8381;
        </Typography>
      </Box>
    </Box>
  );
}
