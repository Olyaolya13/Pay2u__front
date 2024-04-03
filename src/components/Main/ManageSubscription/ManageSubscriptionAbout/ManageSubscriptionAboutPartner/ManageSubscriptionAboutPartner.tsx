import { Box, Typography } from '@mui/material';
import { ManageSubscriptionAboutPartnerData } from '../../../../../utils/constants';

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

export default function ManageSubscriptionAboutPartner() {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>{ManageSubscriptionAboutPartnerData.text}</Typography>
    </Box>
  );
}
