import { Box } from '@mui/material';
import ManageSubscriptionBtn from './ManageSubscriptionBtn/ManageSubscriptionBtn';
import { useNavigate } from 'react-router-dom';
import { ManageSubscriptionBtnData } from '../../../../utils/constants';

const styles = {
  container: { display: 'flex', justifyContent: 'space-between', marginTop: '40px' }
};

export default function ManageSubscriptionChooseBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/autopayment');
    window.scrollTo(0, 0);
  };
  return (
    <Box sx={styles.container}>
      {ManageSubscriptionBtnData.card.map((card, index) => (
        <ManageSubscriptionBtn
          key={index}
          card={card}
          onClick={card.title === 'Автоплатеж' ? handleClick : undefined}
        />
      ))}
    </Box>
  );
}
