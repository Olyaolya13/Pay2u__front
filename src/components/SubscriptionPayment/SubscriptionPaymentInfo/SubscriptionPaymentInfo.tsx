import { Box, Typography, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import SubscriptionPaymentInstruction from '../../Instructions/SubscriptionPaymentInstruction/SubscriptionPaymentInstruction';
import { SubscriptionPaymentInfoData } from '../../../utils/constants';

const font = {
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: '400'
};

const styles = {
  container: { margin: '38px 20px 29px' },
  containerCheck: { display: 'flex', alignItems: 'center' },
  link: {
    textDecoration: 'none'
  },
  text: { ...font, color: '#489865', paddingLeft: '4px' },
  benefitContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '56px 0 12px',
    borderBottom: '.4px solid #E2E2E2'
  }
};

export default function SubscriptionPaymentInfo() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.containerCheck}>
        <Checkbox
          disableRipple
          color="success"
          sx={{
            color: '#168E2C',
            padding: '0 7px 0  0',
            '& .MuiButtonBase-root .MuiCheckbox-root.Mui-checked': {
              color: '#168E2C'
            }
          }}
        />
        <Typography component="p" sx={{ ...font }}>
          {SubscriptionPaymentInfoData.agreeText}
        </Typography>
        <Link to="" style={styles.link}>
          <Typography component="p" sx={styles.text}>
            {SubscriptionPaymentInfoData.rulesText}
          </Typography>
        </Link>
      </Box>
      <Box sx={styles.benefitContainer}>
        <SubscriptionPaymentInstruction marginTop="0" />
        <Typography component="p" sx={styles.text}>
          {SubscriptionPaymentInfoData.sum} &#8381; {SubscriptionPaymentInfoData.perMonth}
        </Typography>
      </Box>
    </Box>
  );
}
