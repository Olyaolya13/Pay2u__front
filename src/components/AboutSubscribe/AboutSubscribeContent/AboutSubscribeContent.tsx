import { Box, Typography } from '@mui/material';
import AboutSubscribeCard from './AboutSubscribeCard/AboutSubscribeCard';
import { AboutSubscribeCardData, AboutSubscribeCardTitleData } from '../../../utils/constants';

const styles = {
  container: {
    margin: '32px 20px 0'
  },
  title: {
    fontFamily: 'Inter',
    fontSize: '22px',
    fontWeight: '700',
    lineHeight: '1.27',
    textAlign: 'start',
    width: '302px',
    marginBottom: '4px'
  }
};

export default function AboutSubscribeContent() {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>{AboutSubscribeCardTitleData.title}</Typography>
      {AboutSubscribeCardData.map((card, index) => (
        <AboutSubscribeCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          width={index === 2 || index === 3 ? '220px' : ''}
        />
      ))}
    </Box>
  );
}
