import { Box } from '@mui/material';
import AboutSubscribeHeader from './AboutSubscribeHeader/AboutSubscribeHeader';
import AboutSubscribeContent from './AboutSubscribeContent/AboutSubscribeContent';
import AboutSubscribeСonditions from './AboutSubscribeСonditions/AboutSubscribeСonditions';
import { AboutSubscribeСonditionsData } from '../../../utils/constants';
import Title from '../../Titile/Titile';
import SubmitButton from '../../Btns/SubmitBtn';
import { useNavigate } from 'react-router-dom';
import AboutSubscribeInstructions from '../../Instructions/AboutSubscribeInstructions/AboutSubscribeInstructions';

const styles = {
  container: {},
  text: { margin: '32px  20px' }
};

export default function AboutSubscribe() {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate('/subscription_payment');
    window.scroll(0, 0);
  };
  return (
    <Box sx={styles.container}>
      <AboutSubscribeHeader />
      <AboutSubscribeContent />
      <Box sx={styles.text}>
        <Title title="Условия" fontSize="18px" />
        {AboutSubscribeСonditionsData.map((item, index) => (
          <AboutSubscribeСonditions key={index} text={item.text} />
        ))}
      </Box>
      <SubmitButton
        width="335px"
        height="56px"
        title="Перейти к подключению"
        onClick={handleOpen}
      />
      <AboutSubscribeInstructions />
    </Box>
  );
}
