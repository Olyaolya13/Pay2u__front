import './AutopaymentContent.css';
import { Box, FormControlLabel, Switch, SwitchProps, Typography, styled } from '@mui/material';
import SubmitButton from '../../SubmitBtn/SubmitBtn';
import { AutopaymentContentData } from '../../../utils/constants';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 45,
  height: 29,
  padding: 0,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#168E2C',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 25,
    height: 25
  },
  '& .MuiSwitch-track': {
    borderRadius: '94px',
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#168E2C',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));

export default function AutopaymentContent() {
  const styles = {
    container: { margin: '25px 0 0' },
    text: {
      padding: '16px 20px',
      textAlign: 'start',
      borderBottom: '.4px solid #E2E2E2'
    },
    push: {
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-between',
      padding: '16px 20px 0',
      marginBottom: '32px'
    },
    textPush: {
      textAlign: 'start',
      width: '270px',
      paddingBottom: '16px'
    },
    title: {
      paddingBottom: '4px',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400',
      color: '#676879'
    },
    subtitle: { fontFamily: 'Inter', fontSize: '16px', fontWeight: '400' },
    subtitlePush: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      color: '#676879',
      width: '175px',
      paddingTop: '4px',
      lineHeight: '1.25'
    }
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          Подписка
        </Typography>
        <Typography component="p" sx={styles.subtitle}>
          {AutopaymentContentData.title}
        </Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          Сумма
        </Typography>
        <Typography component="p" sx={styles.subtitle}>
          {AutopaymentContentData.sum} &#8381;
        </Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          Дата начала
        </Typography>
        <Typography component="p" sx={styles.subtitle}>
          {AutopaymentContentData.date}
        </Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          Периодичность
        </Typography>
        <Typography component="p" sx={styles.subtitle}>
          {AutopaymentContentData.long}
        </Typography>
      </Box>
      <Box sx={styles.push}>
        <Box sx={styles.textPush}>
          <Typography component="p" sx={styles.subtitle}>
            Уведомление об автоплатеже
          </Typography>
          <Typography component="p" sx={styles.subtitlePush}>
            {AutopaymentContentData.text}
          </Typography>
        </Box>
        <FormControlLabel
          label=""
          control={<IOSSwitch defaultChecked />}
          sx={{
            '& .css-18wakdm-MuiFormControlLabel-root': {
              margin: '0 !important'
            }
          }}
        />
      </Box>
      <SubmitButton title="Подключить" width="335px" height="56px" />
    </Box>
  );
}
