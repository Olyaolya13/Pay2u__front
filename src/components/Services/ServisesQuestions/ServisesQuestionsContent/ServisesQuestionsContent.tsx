import { Box, Typography } from '@mui/material';
import ServisesQuestionsSelect from '../ServisesQuestionsSelect/ServisesQuestionsSelect';
import { ServisesQuestionsTitleData } from '../../../../utils/constants';
import { ServisesQuestionsSelectData } from '../../../../utils/constants';

export default function ServisesQuestionsContent() {
  const styles = {
    container: {
      backgroundColor: '#F9F9F9',
      borderRadius: '16px',
      padding: '28px 0',
      marginTop: '20px',
      width: '335px'
    },
    title: {
      color: '#489865',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '700'
    }
  };
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>{ServisesQuestionsTitleData.title}</Typography>
      {ServisesQuestionsSelectData.select.map((select, index) => (
        <ServisesQuestionsSelect key={index} select={select} />
      ))}
    </Box>
  );
}
