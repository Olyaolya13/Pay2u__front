import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ArrowSelectIcon from '../../assets/ArrowSelectIcon.svg?react';
import { QuestionsSelectData } from '../../types/types';

interface QuestionsSelectProps {
  select?: QuestionsSelectData;
  backgroundColor?: string;
  fontWeight?: string;
  fontSize?: string;
}

const font = { fontWeight: '400', fontFamily: 'Inter', fontSize: '14px' };

const styles = {
  container: {
    boxShadow: 'none',
    borderBottom: '.4px solid #E2E2E2'
  },
  title: {
    ...font,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'start',
    height: '50px'
  },
  subtitle: {
    ...font,
    width: '287px',
    fontSize: '12px',
    textAlign: 'start',
    color: '#676879'
  },
  text: {
    paddingTop: '0',
    margin: '0'
  }
};

export default function QuestionsSelect({
  select,
  backgroundColor,
  fontWeight,
  fontSize
}: QuestionsSelectProps) {
  return (
    <Box>
      <Accordion
        sx={{
          ...styles.container,
          backgroundColor: backgroundColor ? backgroundColor : '#F9F9F9',
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
          <Typography
            sx={{
              ...styles.title,
              width: select?.width ? select?.width : '263px',
              fontWeight: fontWeight ? fontWeight : '400',
              fontSize: fontSize ? fontSize : '14px'
            }}
          >
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
