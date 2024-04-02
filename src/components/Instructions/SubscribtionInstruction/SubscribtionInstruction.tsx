import { Box, Typography } from '@mui/material';
import InstructionIcon from '../../../assets/InstructionIcon.svg?react';
import { InstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

interface SubscribtionInstructionProps {
  marginTop?: string;
}
const font = { color: '#489865', fontSize: '14px', fontFamily: 'Inter', fontWeight: '500' };

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center'
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

export default function SubscribtionInstruction({ marginTop }: SubscribtionInstructionProps) {
  return (
    <Box sx={{ ...styles.container, marginTop: marginTop ? marginTop : '32px' }}>
      <InstructionIcon style={styles.icon} />
      <Link to="" style={styles.link}>
        <Typography sx={{ ...font }} component="h3">
          {InstructionData.titleSubscribtion}
        </Typography>
      </Link>
    </Box>
  );
}
