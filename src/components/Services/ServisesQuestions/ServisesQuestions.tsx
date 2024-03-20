import { Box } from '@mui/material';
import ServisesQuestionsContent from './ServisesQuestionsContent/ServisesQuestionsContent';
import Title from '../../Titile/Titile';
import { ServisesQuestionsData } from '../../../utils/constants';

export default function ServisesQuestions() {
  const styles = {
    container: { marginTop: '32px' }
  };
  return (
    <Box sx={styles.container}>
      <Title title={ServisesQuestionsData.title} />
      <ServisesQuestionsContent />
    </Box>
  );
}
