import { Box, Typography } from '@mui/material';
import OkIcon from '../../../../assets/OkIcon.svg?react';

interface AboutSubscribeCardProps {
  title: string;
  subtitle: string;
  width?: string;
}

const font = {
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '1.25',
  textAlign: 'start'
};
const styles = {
  container: { display: 'flex', alignItems: 'center', marginTop: '22px' },
  icon: { width: '24px', height: '24px', marginRight: '20px' },
  title: { ...font },
  subtitle: { ...font, color: '#676879', marginTop: '4px' }
};

export default function AboutSubscribeCard({ title, subtitle, width }: AboutSubscribeCardProps) {
  return (
    <Box sx={styles.container}>
      <OkIcon style={styles.icon} />
      <Box sx={{ width: width ? width : '271px' }}>
        <Typography component="p" sx={styles.title}>
          {title}
        </Typography>
        <Typography component="p" sx={styles.subtitle}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
