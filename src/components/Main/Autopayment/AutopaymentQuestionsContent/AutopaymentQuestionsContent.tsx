import { Box } from '@mui/material';
import QuestionsSelect from '../../../QuestionsSelect/QuestionsSelect';
import { AutopaymentQuestionsContentData } from '../../../../utils/constants';

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '28px 0 0'
  }
};

export default function AutopaymentQuestionsContent() {
  return (
    <Box sx={styles.container}>
      {AutopaymentQuestionsContentData.select.map((select, index) => (
        <QuestionsSelect
          key={index}
          select={select}
          backgroundColor="#fff"
          fontSize="16px"
          fontWeight="500"
        />
      ))}
    </Box>
  );
}
