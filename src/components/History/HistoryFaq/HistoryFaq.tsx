import './HistoryContent.css';
import { Box, CardMedia, Typography } from '@mui/material';
import { HistoryContentPage } from '../../../types/types';

interface HistoryContentProps {
  activeStep?: number;
  history?: HistoryContentPage;
}

export default function HistoryContent({ activeStep, history }: HistoryContentProps) {
  const styles = {
    container: {
      backgroundColor: '#2B2D32',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start'
    },
    text: {

      textAlign: 'start',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '700',
      letterSpacing:'2%',
      color: '#A0D9B0',
    },
    faq: {
      paddingBottom:'24px',
      width:'335px',
      textAlign: 'start',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '1,25',
      color: '#fff'
    },

    image: { width: '230px', height: '205px',paddingLeft:'87px' }
  };
  return (
    <Box sx={{...styles.container, padding: history?.paddingContainer ? history.paddingContainer  : '70px 20px 0',height: history?.heightContainer ? history.heightContainer  : '540px'}}>
    <CardMedia component="img" image={history?.image} alt="" sx={{
    ...styles.image,
    width: history?.width ? history.width : '205px',
    height: history?.height ? history.height : '205px',
    padding:history?.padding? history?.padding:'0 0 0 65px'
  }} />
    {history?.faq?.map((faq, index) => (
        <Box key={index} >
                  {activeStep}
          <Typography sx={styles.text}>{faq.question}</Typography>
          <Typography sx={styles.faq}>{faq.answer}</Typography>
        </Box>
      ))}
  </Box>
  );
}
