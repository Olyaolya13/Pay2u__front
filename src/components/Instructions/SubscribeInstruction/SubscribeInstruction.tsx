import { Box, Typography } from '@mui/material';
import QuestionIcon from '../../../assets/QuestionIcon.svg?react';
import { InstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

export default function SubscribtionInstruction() {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      margin: '14px 20px 20px'
    },
    title: {
      color: '#489865',
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: '500'
    },
    icon: {
      width: '24px',
      height: '24px',
      marginRight: '6px'
    },
    link: {
      textDecoration: 'none'
    }
  };
  return (
    <Box sx={styles.container}>
      <QuestionIcon style={styles.icon} />
      <Link to="" style={styles.link}>
        <Typography sx={styles.title} component="h3">
          {InstructionData.titleSubscribe}
        </Typography>
      </Link>
    </Box>
  );
}
