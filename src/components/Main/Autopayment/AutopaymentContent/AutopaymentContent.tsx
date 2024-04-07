import './AutopaymentContent.module.scss';
import { Box, FormControlLabel, Switch, SwitchProps, Typography, styled } from '@mui/material';
import SubmitButton from '../../../Btns/SubmitBtn';
import { AutopaymentContentData } from '../../../../utils/constants';
import AutopaymentPopup from '../AutopaymentPopup/AutopaymentPopup';
import { useState } from 'react';

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

const font = { fontFamily: 'Inter', fontSize: '16px', fontWeight: '400' };

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
    ...font,
    paddingBottom: '4px',
    color: '#676879'
  },
  subtitlePush: {
    ...font,
    fontSize: '14px',
    color: '#676879',
    width: '175px',
    paddingTop: '4px',
    lineHeight: '1.25'
  }
};

export default function AutopaymentContent() {
  const [open, setOpen] = useState(false);

  const handleOpenPopup = () => {
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          Подписка
        </Typography>
        <Typography component="p" sx={{ ...font }}>
          {AutopaymentContentData.title}
        </Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          Сумма
        </Typography>
        <Typography component="p" sx={{ ...font }}>
          {AutopaymentContentData.sum} &#8381;
        </Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          Дата начала
        </Typography>
        <Typography component="p" sx={{ ...font }}>
          {AutopaymentContentData.date}
        </Typography>
      </Box>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          Периодичность
        </Typography>
        <Typography component="p" sx={{ ...font }}>
          {AutopaymentContentData.long}
        </Typography>
      </Box>
      <Box sx={styles.push}>
        <Box sx={styles.textPush}>
          <Typography component="p" sx={{ ...font }}>
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
      <SubmitButton title="Подключить" width="335px" height="56px" onClick={handleOpenPopup} />
      <AutopaymentPopup open={open} onClose={handleClosePopup} />
    </Box>
  );
}
