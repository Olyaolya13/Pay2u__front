import { Box, Typography } from '@mui/material';
import {
  ManageSubscriptionWaitIdCardData,
  ManageSubscriptionWaitIdContentData,
  ManageSubscriptionWaitIdPromoData
} from '../../../../utils/constants';
import ManageSubscriptionWaitIdCard from '../ManageSubscriptionWaitIdCard/ManageSubscriptionWaitIdCard';
import SubmitButtonWithIcon from '../../../Btns/SubmitBtnWithIcon';
import CopyIcon from '../../../../assets/CopyIcon.svg?react';

const font = { fontFamily: 'Inter', fontSize: '14px', fontWeight: '400', lineHeight: '1.25' };

const styles = {
  container: { margin: '24px 0 48px' },
  subtitle: {
    ...font,
    color: '#E86513',
    textAlign: 'start',
    marginBottom: '8px'
  },
  promo: {
    ...font,
    color: '#489865',
    fontSize: '16px',
    fontWeight: '700'
  },
  promoText: {
    ...font,
    fontSize: '18px'
  },
  promoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '28px'
  }
};

export default function ManageSubscriptionWaitIdContent() {
  return (
    <Box sx={styles.container}>
      <Typography component="p" sx={styles.subtitle}>
        {ManageSubscriptionWaitIdContentData.title} {ManageSubscriptionWaitIdContentData.period} г.
      </Typography>
      {ManageSubscriptionWaitIdCardData.card.map((card, index) => (
        <ManageSubscriptionWaitIdCard key={index} card={card} />
      ))}
      <Box sx={styles.promoContainer}>
        <Typography component="p" sx={styles.promoText}>
          {ManageSubscriptionWaitIdPromoData.title}
        </Typography>
        <Typography component="p" sx={styles.promo}>
          {ManageSubscriptionWaitIdPromoData.promo}
        </Typography>
      </Box>
      <SubmitButtonWithIcon
        width="335px"
        height="56px"
        title="Скопировать и перейти на сайт"
        icon={<CopyIcon />}
        fontSize="14px"
      />
    </Box>
  );
}
