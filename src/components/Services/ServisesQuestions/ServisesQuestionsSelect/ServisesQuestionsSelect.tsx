import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ArrowSelectIcon from '../../../../assets/ArrowSelectIcon.svg?react';
import { ServisesQuestionsSelectData } from '../../../../types/types';

interface ServisesQuestionsSelectProps {
  select?: ServisesQuestionsSelectData;
}

export default function ServisesQuestionsSelect({ select }: ServisesQuestionsSelectProps) {
  const styles = {
    container: {
      backgroundColor: '#F9F9F9',
      boxShadow: 'none',
      borderBottom: '.4px solid #E2E2E2'
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: '400',
      fontFamily: 'Inter',
      fontSize: '14px',
      textAlign: 'start',
      height: '50px'
    },
    subtitle: {
      width: '287px',
      fontWeight: '400',
      fontFamily: 'Inter',
      fontSize: '12px',
      textAlign: 'start',
      color: '#676879'
    },
    text: {
      paddingTop: '0',
      margin: '0'
    }
  };
  return (
    <Box>
      <Accordion
        sx={{
          ...styles.container,
          '& .MuiButtonBase-root ': {
            minHeight: '50px'
          },
          '& .Mui-expanded ': {
            minHeight: '50px'
          }
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowSelectIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            margin: '0',
            height: '50px',
            '& .MuiAccordionSummary-content': {
              margin: '0',
              height: '50px'
            }
          }}
        >
          <Typography sx={{ ...styles.title, width: select?.width ? select?.width : '263px' }}>
            {select?.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.text}>
          <Typography sx={styles.subtitle}>{select?.subtitle}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
