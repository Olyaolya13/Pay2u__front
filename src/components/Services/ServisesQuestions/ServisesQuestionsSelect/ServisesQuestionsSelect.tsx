import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ArrowSelectIcon from '../../../../assets/ArrowSelectIcon.svg?react';
import { ServisesQuestionsSelectata } from '../../../../types/types';

interface ServisesQuestionsSelectProps {
  select?: ServisesQuestionsSelectata;
}

export default function ServisesQuestionsSelect({ select }: ServisesQuestionsSelectProps) {
  const styles = {
    container: {
      backgroundColor: '#F9F9F9',
      boxShadow: 'none',
      borderBottom: '.4px solid #E2E2E2'
    },
    title: {
      width: '275px',
      fontWeight: '400',
      fontFamily: 'Inter',
      FontSize: '14px',
      textAlign: 'start',
      letterSpacing: 0,
      height: '60px'
    },
    subtitle: {
      width: '275px',
      fontWeight: '400',
      fontFamily: 'Inter',
      fontSize: '12px',
      textAlign: 'start',
      color: '#676879'
    },
    text: {
      paddingTop: '0'
    }
  };
  return (
    <Box>
      <Accordion sx={styles.container}>
        <AccordionSummary
          expandIcon={<ArrowSelectIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={styles.title}>{select?.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.text}>
          <Typography sx={styles.subtitle}>{select?.subtitle}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
