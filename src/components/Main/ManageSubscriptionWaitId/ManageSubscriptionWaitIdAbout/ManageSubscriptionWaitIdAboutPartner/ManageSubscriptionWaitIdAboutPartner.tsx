import { Box, Typography } from '@mui/material';
import {
  ManageSubscriptionAboutData,
  ManageSubscriptionWaitIdAboutPartnerData
} from '../../../../../utils/constants';
import Title from '../../../../Titile/Titile';

const font = { fontSize: '14px', fontWeight: '400', color: '#676879', fontFamily: 'Inter' };

const styles = {
  container: { marginTop: '10px' },
  text: {
    ...font,
    marginTop: '20px',
    lineHeight: '1.25',
    textAlign: 'start'
  }
};

export default function ManageSubscriptionWaitIdAboutPartner() {
  return (
    <Box sx={styles.container}>
      <Title title={ManageSubscriptionAboutData.titlePartner} />
      <Typography sx={styles.text}>{ManageSubscriptionWaitIdAboutPartnerData.text}</Typography>
    </Box>
  );
}
