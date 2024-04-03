import { Box, Modal, Typography } from '@mui/material';
import FilterPopupBtn from '../../../../assets/FilterPopupBtn.svg?react';
import AutopayConnectIcon from '../../../../assets/AutopayConnectIcon.svg?react';
import SubmitButtonWithIcon from '../../../Btns/SubmitBtnWithIcon';
import { useNavigate } from 'react-router-dom';
import {
  AutopaymentPopupData,
  SubscriptionPaymentPopupInfoData,
  SubscriptionPaymentPopupData
} from '../../../../utils/constants';
import CopyIcon from '../../../../assets/CopyIcon.svg?react';
import InfoIconOrange from '../../../../assets/InfoIconOrange.svg';
import SubmitButtonBorder from '../../../Btns/SubmitButtonBorder';
import SubscriptionPaymentPopupInfo from '../../../Instructions/SubscriptionPaymentPopupInfo/SubscriptionPaymentPopupInfo';
import InfoTooltipAutoOpen from '../../../InfoTooltip/InfoTooltipAutoOpen';

interface SubscriptionPaymentPopupProps {
  open: boolean;
  onClose: () => void;
}
const font = { fontFamily: 'Inter', fontSize: '16px', fontWeight: '400' };

const styles = {
  container: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  title: {
    ...font,
    fontSize: '18px',
    fontWeight: '700'
  },
  done: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  sum: { ...font, fontSize: '18px' },
  promo: { ...font, fontSize: '22px', fontWeight: '700', marginTop: '32px' },
  subtitle: { ...font, fontSize: '14px', paddingTop: '5px', color: '#676879', display: 'flex' },
  date: { color: '#E86513', margin: ' 0 5px' },
  popover: {
    padding: '12px 20px 64px',
    backgroundColor: '#fff',
    borderRadius: '16px 16px 0 0 ',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    top: '116px',
    bottom: '0',
    left: 0,
    width: '335px'
  },
  icon: { width: '74px', height: '74px', margin: '20px 0' },
  infoIcon: { width: '18px', height: '18px' },
  text: { margin: '0 0 35px 0 ', textAlign: 'center' },
  instruction: {
    margin: '32px 20px 0'
  }
};

export default function SubscriptionPaymentPopup({ open, onClose }: SubscriptionPaymentPopupProps) {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    onClose();
    navigate('/services');
    window.scroll(0, 0);
  };

  return (
    <Modal sx={styles.container} open={open} onClose={onClose}>
      <Box sx={styles.popover}>
        <Box sx={styles.done}>
          <FilterPopupBtn />
          <Typography sx={styles.title}>{SubscriptionPaymentPopupData.title}</Typography>
          <AutopayConnectIcon style={styles.icon} />
        </Box>
        <Box sx={styles.text}>
          <Typography sx={styles.sum}>{SubscriptionPaymentPopupData.sum} &#8381;</Typography>
          <Typography sx={styles.promo}>FDJ264999SHK0</Typography>
          <Typography sx={styles.subtitle}>
            {SubscriptionPaymentPopupData.activUntil}
            <span style={styles.date}>{AutopaymentPopupData.date}</span>
            <InfoTooltipAutoOpen
              icon={InfoIconOrange}
              tooltip={SubscriptionPaymentPopupData.tooltip}
            />
          </Typography>
        </Box>
        <SubmitButtonWithIcon
          title={SubscriptionPaymentPopupData.CopyBtn}
          width="335px"
          height="56px"
          icon={<CopyIcon />}
          margin="0 0 16px 0"
        />
        <SubmitButtonBorder
          title={SubscriptionPaymentPopupData.returnBtn}
          width="335px"
          height="56px"
          onClick={handleApplyClick}
        />
        <Box sx={styles.instruction}>
          {SubscriptionPaymentPopupInfoData.map((item, index) => (
            <SubscriptionPaymentPopupInfo
              key={index}
              image={item.image}
              alt={item.alt}
              title={item.title}
              width={index === SubscriptionPaymentPopupInfoData.length - 1 ? '15px' : '18px'}
              height={index === SubscriptionPaymentPopupInfoData.length - 1 ? '20px' : '18px'}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
}
