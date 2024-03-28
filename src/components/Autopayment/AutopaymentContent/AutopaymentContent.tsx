import { Box, Switch, Typography } from '@mui/material';
import SubmitButton from '../../SubmitBtn/SubmitBtn';

export default function AutopaymentContent() {
  const styles = {
    container: {}
  };
  return (
    <Box sx={styles.container}>
      <Box>
        <Typography component="p">Подписка</Typography>
        <Typography component="p">Изи Иви</Typography>
      </Box>
      <Box>
        <Typography component="p">Сумма</Typography>
        <Typography component="p">199 &#8381;</Typography>
      </Box>
      <Box>
        <Typography component="p">Дата начала</Typography>
        <Typography component="p">10.04.2024</Typography>
      </Box>
      <Box>
        <Typography component="p">Периодичность</Typography>
        <Typography component="p">Раз в месяц</Typography>
      </Box>
      <Box>
        <Typography component="p">Уведомление об автоплатеже </Typography>
        <Typography component="p">За 2 дня до списания отправим СМС или Push</Typography>
        <Switch defaultChecked />
      </Box>
      <SubmitButton title="Подключить" />
    </Box>
  );
}
