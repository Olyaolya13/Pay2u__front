import { Box, Typography } from '@mui/material';

interface AboutSubscribeСonditionsProps {
  text: string;
}

const styles = {
  subtitle: {
    fontFamily: 'Inter',
    fontSize: '14px',
    textAlign: 'start',
    marginTop: '12px',
    lineHeight: '1.25'
  }
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
