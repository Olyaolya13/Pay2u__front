import { Box, Typography } from '@mui/material';
import PartnerSiteIcon from '../../../assets/PartnerSiteIcon.svg?react';
import { InstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

export default function PartnerSite() {
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
      width: '15px',
      height: '20px',
      marginRight: '9px'
    },
    link: {
      textDecoration: 'none'
    }
  };
  return (
    <Box sx={styles.container}>
      <PartnerSiteIcon style={styles.icon} />
      <Link to="" style={styles.link}>
        <Typography sx={styles.title} component="h3">
          {InstructionData.titleParnter}
        </Typography>
      </Link>
    </Box>
  );
}
