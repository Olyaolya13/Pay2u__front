import { Box } from '@mui/material';
import SellHistoryCard from '../SellHistoryCard/SellHistoryCard';
import Title from '../../Titile/Titile';
import {SellHistoryCardData} from '../../../utils/constants'



export default function SellHistoryContent() {
  const styles = {
    container: {
      marginTop:'32px'

    }
  };
  return (
    <Box sx={styles.container}>
      <Title title='Март' fontSize='16px' padding='0 0 0 20px'/>
     {SellHistoryCardData.card.map((card, index) => (
          <SellHistoryCard key={index} card={card} />
        ))}
    </Box>
  );
}
