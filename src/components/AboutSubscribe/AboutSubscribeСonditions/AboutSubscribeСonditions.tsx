import { Box, Typography } from '@mui/material';

interface AboutSubscribeСonditionsProps {
  text: string;
}

const font = { lineHeight: '1.25', fontFamily: 'Inter', fontSize: '14px', textAlign: 'start' };

const styles = {
  subtitle: { ...font, marginTop: '12px' }
};

export default function AboutSubscribeСonditions({ text }: AboutSubscribeСonditionsProps) {
  return (
    <Box>
      <Typography component="p" sx={styles.subtitle}>
        {text}
      </Typography>
    </Box>
  );
}
