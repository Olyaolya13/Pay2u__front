import { Box, CardMedia, Typography } from '@mui/material';
import InfoIcon from '../../../../../assets/InfoIcon.svg?react';
import { ManageSubscriptionAboutContentData } from '../../../../../utils/constants';

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

export default function ManageSubscriptionAboutContent() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Автоплатеж</Typography>
        <Typography
          sx={{
            ...font,
            color: ManageSubscriptionAboutContentData.isConeccted ? '#2A9B67' : '#C2C2C2'
          }}
        >
          {ManageSubscriptionAboutContentData.isConeccted ? 'Подключен' : 'Не подключено'}
        </Typography>
      </Box>
      {ManageSubscriptionAboutContentData.isConeccted === true && (
        <Box sx={styles.text}>
          <Typography sx={styles.title}>Следующее списание</Typography>
          <Typography sx={{ ...font }}>{ManageSubscriptionAboutContentData.date}</Typography>
        </Box>
      )}
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Стоимость</Typography>
        <Typography sx={{ ...font }}>{ManageSubscriptionAboutContentData.sum} &#8381;</Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Счет списания</Typography>
        <CardMedia
          sx={styles.pay}
          component="img"
          image={ManageSubscriptionAboutContentData.paySystem}
          alt={ManageSubscriptionAboutContentData.alt}
        />
      </Box>
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Номер телефона</Typography>
        <Typography sx={{ ...font }}>{ManageSubscriptionAboutContentData.phoneNumber}</Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography sx={styles.title}>Кешбэк </Typography>
        <Typography sx={{ ...font }}>{ManageSubscriptionAboutContentData.cashback}</Typography>
      </Box>
      <Box sx={styles.text}>
        <Box sx={styles.info}>
          <Typography sx={{ ...styles.title, color: '#489865' }}>Ваша выгода</Typography>
          <InfoIcon style={styles.icon} />
        </Box>
        <Typography sx={{ ...font, color: '#489865' }}>
          ~ {ManageSubscriptionAboutContentData.profit}&#8381;
        </Typography>
      </Box>
    </Box>
  );
}
