import { Box, Typography } from '@mui/material';
import ServisesQuestionsSelect from '../../../../QuestionsSelect/QuestionsSelect';
import {
  QuestionsTitleData,
  ServisesQuestionsManageSelectData,
  ServisesQuestionsRegistSelectData
} from '../../../../../utils/constants';

const font = {
  textAlign: 'start',
  color: '#489865',
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: '700'
};

const styles = {
  container: {
    backgroundColor: '#F9F9F9',
    borderRadius: '16px',
    padding: '28px 0',
    marginTop: '20px',
    width: '335px'
  },
  title: {
    ...font,
    paddingLeft: '16px',
    paddingBottom: '10px'
  },
  subtitle: {
    ...font,
    paddingLeft: '16px',
    paddingTop: '28px'
  }
};

export default function ServisesQuestionsContent() {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>{QuestionsTitleData.title}</Typography>
      {ServisesQuestionsManageSelectData.select.map((select, index) => (
        <ServisesQuestionsSelect key={index} select={select} />
      ))}
      <Typography sx={styles.subtitle}>{QuestionsTitleData.subtitle}</Typography>
      {ServisesQuestionsRegistSelectData.select.map((select, index) => (
        <ServisesQuestionsSelect key={index} select={select} />
      ))}
    </Box>
  );
}
