import { Box, Typography } from '@mui/material';
import PartnerSiteIcon from '../../../assets/PartnerSiteIcon.svg?react';
import { InstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

interface PartnerSiteProps {
  width?: string;
  height?: string;
  marginTop?: string;
}

export default function PartnerSite({ width, height, marginTop }: PartnerSiteProps) {
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
      marginRight: '9px'
    },
    link: {
      textDecoration: 'none'
    }
  };
  return (
    <Box sx={{ ...styles.container, marginTop: marginTop ? marginTop : '24px' }}>
      <PartnerSiteIcon
        style={{ ...styles.icon, width: width ? width : '15px', height: height ? height : '20px' }}
      />
      <Link to="" style={styles.link}>
        <Typography sx={styles.title} component="h3">
          {InstructionData.titleParnter}
        </Typography>
      </Link>
    </Box>
  );
}
