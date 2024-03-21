import { Box } from '@mui/material';
import SellHistoryCard from '../SellHistoryCard/SellHistoryCard';
import Title from '../../Titile/Titile';
import {SellHistoryCardMartData,SellHistoryContentMartData,SellHistoryCardFebruaryData,SellHistoryContentFebruaryData,SellHistoryCardJanuaryData,SellHistoryContentJanuaryData} from '../../../utils/constants'



export default function SellHistoryContent() {
  const styles = {
    container: {
      marginTop:'16px'

    }
  };
  return (
    <Box sx={styles.container}>
      <Title title={SellHistoryContentMartData.title} fontSize='16px' padding='16px 0 0 20px'/>
     {SellHistoryCardMartData.card.map((card, index) => (
          <SellHistoryCard key={index} card={card} />
        ))}
           <Title title={SellHistoryContentFebruaryData.title} fontSize='16px' padding='16px 0 0 20px'/>
     {SellHistoryCardFebruaryData.card.map((card, index) => (
          <SellHistoryCard key={index} card={card} />
        ))}
           <Title title={SellHistoryContentJanuaryData.title} fontSize='16px' padding='16px 0 0 20px'/>
     {SellHistoryCardJanuaryData.card.map((card, index) => (
          <SellHistoryCard key={index} card={card} />
        ))}
    </Box>
  );
}
