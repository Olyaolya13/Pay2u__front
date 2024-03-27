import { Box, Typography } from '@mui/material';
import PartnerSiteIcon from '../../../assets/PartnerSiteIcon.svg?react';
import { InstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

export default function PartnerSite() {
  const styles = {
    container: {
      margin: '16px 0 0',
      display: 'flex'
    },
    title: {
      color: '#489865',
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: '500'
    }
  };
  return (
    <Box sx={styles.container}>
      <PartnerSiteIcon className="instruction__icon" />
      <Link to="" className="instruction__link">
        <Typography sx={styles.title} component="h3">
          {InstructionData.titleParnter}
        </Typography>
      </Link>
    </Box>
  );
}
