import { Box, Typography } from '@mui/material';
import { SellHistoryDelalizationData } from '../../../../utils/constants.tsx';

const font = {
  fontSize: '14px',
  fontFamily: 'Inter',
  color: '#F5F5F5',
  lineHeight: '1.25',
  fontWeight: '400',
  textAlign: 'start'
};

const styles = {
  container: {
    margin: '0 20px 0',
    background: 'linear-gradient(to right, #28C22E 0%, #197225 100%)',
    boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
    borderRadius: '16px',
    padding: '20px 20px 20px 16px',
    height: '100px'
  },
  title: {
    ...font,
    fontSize: '18px',
    lineHeight: '1.33',
    fontWeight: '700',
    paddingBottom: '4px'
  },
  subtitle: {
    ...font,
    fontSize: '16px',
    paddingBottom: '16px',
    textAlign: 'start'
  }
};

export default function SellHistoryDelalization() {
  return (
    <Box sx={styles.container}>
      <Typography component="p" sx={styles.title}>
        {SellHistoryDelalizationData.title} &#8381;
      </Typography>
      <Typography component="p" sx={styles.subtitle}>
        {SellHistoryDelalizationData.subtitle}
      </Typography>
      <Typography component="p" sx={{ ...font }}>
        {SellHistoryDelalizationData.text}
      </Typography>
    </Box>
  );
}
