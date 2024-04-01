import { Box, Typography } from '@mui/material';
import QuestionIcon from '../../../assets/QuestionIcon.svg?react';
import { InstructionData } from '../../../utils/constants';
import { Link } from 'react-router-dom';

interface SubscribeInstructionProps {
  margin?: string;
  title?: string;
}

export default function SubscribtionInstruction({ margin, title }: SubscribeInstructionProps) {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      color: '#489865',
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: '500'
    },
    icon: {
      width: '20px',
      height: '20px',
      marginRight: '6px'
    },
    link: {
      textDecoration: 'none'
    }
  };
  return (
    <Box sx={{ ...styles.container, margin: margin ? margin : '14px 20px 20px' }}>
      <QuestionIcon style={styles.icon} />
      <Link to="" style={styles.link}>
        <Typography sx={styles.title} component="h3">
          {title ? title : InstructionData.titleSubscribe}
        </Typography>
      </Link>
    </Box>
  );
}
