import style from './HistoryContent.module.scss';
import { Box, CardMedia, Typography } from '@mui/material';
import { HistoryContentPage } from '../../../../types/types';

interface HistoryContentProps {
  activeStep?: number;
  history?: HistoryContentPage;
}

const font = {
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '400',
  color: '#fff'
};

const styles = {
  container: {
    backgroundColor: '#2B2D32',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  },
  title: {
    ...font,
    textAlign: 'start',
    fontSize: '22px',
    fontWeight: '700',
    lineHeight: '1.27'
  },
  text: {
    ...font,
    textAlign: 'start',
    fontSize: '16px',
    fontWeight: '700',
    letterSpacing: '2%',
    color: '#A0D9B0'
  },
  subtitle: {
    ...font,
    lineHeight: '1.25',
    textAlign: 'start'
  },
  faq: {
    ...font,
    paddingBottom: '24px',
    width: '335px',
    textAlign: 'start',
    fontSize: '14px',
    lineHeight: '1.25'
  },
  image: { width: '230px', height: '205px', paddingLeft: '87px' }
};

export default function HistoryContent({ activeStep, history }: HistoryContentProps) {
  return (
    <Box
      sx={{
        ...styles.container,
        padding: history?.paddingContainer ? history.paddingContainer : '80px 20px 0',
        height: history?.heightContainer ? history.heightContainer : '530px'
      }}
    >
      <Typography
        sx={{
          ...styles.title,
          width: history?.widthText ? history.widthText : '335px',
          paddingBottom: history?.paddingBottomTitle ? history.paddingBottomTitle : '54px'
        }}
      >
        {activeStep}
        {history?.title} <span className={style.discount}>{history?.span}</span>
        {history?.text}
      </Typography>
      <CardMedia
        component="img"
        image={history?.image}
        alt=""
        sx={{
          ...styles.image,
          width: history?.width ? history.width : '205px',
          height: history?.height ? history.height : '205px',
          padding: history?.padding ? history?.padding : '0 0 0 65px'
        }}
      />
      <Typography
        sx={{
          ...styles.subtitle,
          width: history?.widthsubTitle ? history.widthsubTitle : '310px',
          paddingTop: history?.paddingTopSubtitle ? history.paddingTopSubtitle : '52px'
        }}
      >
        {history?.subtitle}
      </Typography>
      {history?.faq?.map((faq, index) => (
        <Box key={index}>
          <Typography sx={styles.text}>{faq.question}</Typography>
          <Typography sx={styles.faq}>{faq.answer}</Typography>
        </Box>
      ))}
    </Box>
  );
}
