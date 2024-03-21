import './ServicesInstruction.css';
import { Box, Typography } from '@mui/material';
import InstructionIcon from '../../../assets/InstructionIcon.svg?react';
import { ServicesInstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

export default function ServicesInstruction() {
  const styles = {
    container: {
      margin: '24px 0 0',
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
      <InstructionIcon className="instruction__icon" />
      <Link to="" className="instruction__link">
        <Typography sx={styles.title} component="h3">
          {ServicesInstructionData.title}
        </Typography>
      </Link>
    </Box>
  );
}
