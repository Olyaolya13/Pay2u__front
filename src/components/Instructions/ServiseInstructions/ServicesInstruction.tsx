import { Box, Typography } from '@mui/material';
import InstructionIcon from '../../../assets/InstructionIcon.svg?react';
import { InstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

const font = { color: '#489865', fontSize: '14px', fontFamily: 'Inter', fontWeight: '500' };

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '24px'
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

export default function ServicesInstruction() {
  return (
    <Box sx={styles.container}>
      <InstructionIcon style={styles.icon} />
      <Link to="/history" style={styles.link}>
        <Typography sx={{ ...font }} component="h3">
          {InstructionData.titleServise}
        </Typography>
      </Link>
    </Box>
  );
}
