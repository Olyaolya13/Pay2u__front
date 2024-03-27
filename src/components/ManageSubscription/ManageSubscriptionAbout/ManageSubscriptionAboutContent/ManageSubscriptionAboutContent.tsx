import { Box, Typography } from '@mui/material';
import SBPPay from '../../../../assets/SBPPay.svg?react';
import InfoIcon from '../../../../assets/InfoIcon.svg?react';

const styles = {
  container: {},
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '.4px solid #E2E2E2',
    padding: '16px 0'
  }
};

export default function ManageSubscriptionAboutContent() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.text}>
        <Typography>Автоплатеж</Typography>
        <Typography>Не подключен</Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography>Стоимость</Typography>
        <Typography>597 &#8381;</Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography>Счет списания</Typography>
        <SBPPay />
      </Box>
      <Box sx={styles.text}>
        <Typography>Номер телефона</Typography>
        <Typography>+ 7 (900) 000-07-07</Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography>Кешбэк </Typography>
        <Typography>5 %</Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography>
          Ваша выгода <InfoIcon />
        </Typography>

        <Typography>~ 150 &#8381;</Typography>
      </Box>
    </Box>
  );
}
