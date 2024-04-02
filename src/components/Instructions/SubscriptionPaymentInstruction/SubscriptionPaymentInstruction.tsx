import { Box, Typography } from '@mui/material';
import InfoInstructionIcon from '../../../assets/InfoInstructionIcon.svg?react';
import { Link } from 'react-router-dom';

interface PartnerSiteProps {
  width?: string;
  height?: string;
  marginTop?: string;
}

export default function SubscriptionPaymentInstruction({
  width,
  height,
  marginTop
}: PartnerSiteProps) {
  const styles = {
    container: {
      margin: '16px 0 0',
      display: 'flex',
      alignItems: 'center',
      marginTop: '24px'
    },
    title: {
      color: '#489865',
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: '500'
    },
    icon: {
      marginLeft: '9px'
    },
    link: {
      textDecoration: 'none'
    }
  };
  return (
    <Box sx={{ ...styles.container, marginTop: marginTop ? marginTop : '24px' }}>
      <Link to="" style={styles.link}>
        <Typography sx={styles.title} component="h3">
          Ваша выгода
        </Typography>
      </Link>
      <InfoInstructionIcon
        style={{ ...styles.icon, width: width ? width : '18px', height: height ? height : '18px' }}
      />
    </Box>
  );
}
