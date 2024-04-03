import { Box, Typography } from '@mui/material';
import Title from '../../../Titile/Titile';
import InfoTooltip from '../../../InfoTooltip/InfoTooltip';
import InfoIcon from '../../../../assets/InfoIcon.svg';
import MySubscriptionsWaitActiveCard from './MySubscriptionsWaitActiveCard/MySubscriptionsWaitActiveCard';
import {
  MySubscriptionsWaitActiveCardData,
  MySubscriptionsWaitActiveData,
  InfoTooltipData
} from '../../../../utils/constants';

const font = { fontFamily: 'Inter', fontSize: '14px', fontWeight: '400', lineHeight: '1.25' };

const styles = {
  container: { margin: ' 0 20px ' },
  text: { display: 'flex' },
  subtitle: {
    ...font,
    color: '#E86513',
    textAlign: 'start',
    marginTop: '22px',
    marginBottom: '8px'
  }
};

export default function MySubscriptionsWaitActive() {
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.text}>
          <Title title={MySubscriptionsWaitActiveData.title}></Title>
          <InfoTooltip tooltip={InfoTooltipData.titleSubscription} icon={InfoIcon} />
        </Box>
        <Typography component="p" sx={styles.subtitle}>
          {MySubscriptionsWaitActiveData.subtitle} {MySubscriptionsWaitActiveData.period}г.
        </Typography>
      </Box>
      {MySubscriptionsWaitActiveCardData.card.map((card, index) => (
        <MySubscriptionsWaitActiveCard key={index} card={card} />
      ))}
    </>
  );
}
