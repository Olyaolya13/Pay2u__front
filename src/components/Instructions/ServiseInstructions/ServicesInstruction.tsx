import { Box, Typography } from '@mui/material';
import InstructionIcon from '../../../assets/InstructionIcon.svg?react';
import { InstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

export default function ServicesInstruction() {
  const styles = {
    container: {
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
      <InstructionIcon style={styles.icon} />
      <Link to="/history" style={styles.link}>
        <Typography sx={styles.title} component="h3">
          {InstructionData.titleServise}
        </Typography>
      </Link>
    </Box>
  );
}
