import { Box, Typography } from '@mui/material';
import { SellHistoryInfoData } from '../../../../utils/constants';

const font = { fontSize: '14px', fontFamily: 'Inter', lineHeight: '1.28', fontWeight: '400' };

const styles = {
  container: {
    margin: '32px 20px 0',
    backgroundColor: '#F9F9F9',
    borderRadius: '16px',
    boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
    padding: '20px  16px '
  },
  title: {
    ...font,
    color: '#676879',
    textAlign: 'start'
  }
};

export default function SellHistoryInfo() {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title} component="p">
        {SellHistoryInfoData.title}
      </Typography>
    </Box>
  );
}
