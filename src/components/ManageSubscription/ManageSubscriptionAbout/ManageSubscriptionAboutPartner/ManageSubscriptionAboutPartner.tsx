import { Box, Typography } from '@mui/material';
import ServicesInstruction from '../../../Instructions/ServiseInstructions/ServicesInstruction';
import PartnerSite from '../../../Instructions/PartnerSite/PartnerSite';
import { ManageSubscriptionAboutPartnerData } from '../../../../utils/constants';

const styles = {
  container: { marginTop: '16px' },
  text: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#676879',
    fontFamily: 'Inter',
    textAlign: 'start'
  }
};

export default function ManageSubscriptionAboutPartner() {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>{ManageSubscriptionAboutPartnerData.text}</Typography>
      <PartnerSite />
      <ServicesInstruction marginTop="32px" />
    </Box>
  );
}
