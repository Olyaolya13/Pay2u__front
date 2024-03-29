import { Box, Typography } from '@mui/material';
import KIcon from '../../../../assets/KIcon.svg?react';

interface SubscribeContentTitleProps {
  marginTop?: string;
  title: string;
  data: {
    description: string;
    cashback: string;
  };
}

export default function SubscribeContentTitle({
  marginTop,
  title,
  data
}: SubscribeContentTitleProps) {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'Start',
      marginTop: '28px'
    },
    card: { display: 'flex', alignItems: 'end' },
    text: {
      textAlign: 'start',
      width: '250px'
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '1.28'
    },
    subtitle: {
      paddingTop: '8px',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      color: '#676879'
    },

    cashback: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '500',
      paddingLeft: '4px'
    },
    cash: {
      display: 'flex',
      alignItems: 'center'
    },
    kicon: {
      width: '20px',
      height: '20px'
    }
  };
  return (
    <Box sx={{ ...styles.container, marginTop: marginTop ? marginTop : '28px' }}>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          {title}
        </Typography>
        <Typography component="p" sx={styles.subtitle}>
          {data.description}
        </Typography>
      </Box>
      <Box sx={styles.cash}>
        <KIcon style={styles.kicon} />
        <Typography component="p" sx={styles.cashback}>
          {data.cashback}%
        </Typography>
      </Box>
    </Box>
  );
}