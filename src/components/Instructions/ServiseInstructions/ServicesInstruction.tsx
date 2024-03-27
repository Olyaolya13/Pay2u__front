import './ServicesInstruction.css';
import { Box, Typography } from '@mui/material';
import InstructionIcon from '../../../assets/InstructionIcon.svg?react';
import { InstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

interface ServicesInstructionProps {
  marginTop?: string;
}

export default function ServicesInstruction({ marginTop }: ServicesInstructionProps) {
  const styles = {
    container: {
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
    <Box sx={{ ...styles.container, marginTop: marginTop ? marginTop : '24px' }}>
      <InstructionIcon className="instruction__icon" />
      <Link to="" className="instruction__link">
        <Typography sx={styles.title} component="h3">
          {InstructionData.titleServise}
        </Typography>
      </Link>
    </Box>
  );
}
