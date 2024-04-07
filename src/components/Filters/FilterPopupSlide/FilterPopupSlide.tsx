import style from './FilterPopupSlide.module.scss';
import { Box, Modal, Typography } from '@mui/material';
import FilterPopupBtn from '../../../assets/FilterPopupBtn.svg?react';
import CloseIcon from '../../../assets/CloseIconGreen.svg?react';
import SubmitButton from '../../Btns/SubmitBtn';
import RatingIcons from '../../Raiting/Raiting';
import Checkbox from '../../Checkbox/Checkbox';
import Title from '../../Titile/Titile';
import { FiltersPopupSlideData } from '../../../utils/constants';

interface FiltersPopupSlideProps {
  open: boolean;
  onClose: () => void;
}

const font = { fontFamily: 'Inter', fontSize: '16px', fontWeight: '400' };

const styles = {
  container: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  title: {
    ...font,
    textTransform: 'none',
    margin: '20px 0 32px',
    fontWeight: '700',
    fontSize: '22px'
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 0'
  },

  subtitle: { ...font },
  text: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  popover: {
    padding: '12px 20px 66px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    top: '116px',
    left: 0,
    width: '335px',
    height: '100%'
  }
};

export default function FiltersPopupSlide({ open, onClose }: FiltersPopupSlideProps) {
  function handleClose() {
    onClose();
  }

  const handleApplyClick = () => {
    onClose();
  };

  return (
    <Modal sx={styles.container} open={open} onClose={onClose}>
      <Box sx={styles.popover}>
        <Box sx={styles.text}>
          <FilterPopupBtn />
          <Box>
            <Typography sx={styles.title}>Фильтры</Typography>
            <CloseIcon className={style.close__icon_slide} onClick={handleClose} />
          </Box>
        </Box>
        <Box>
          <Title title="Стоимость" />
          <Box sx={{ paddingTop: '16px' }}>
            {FiltersPopupSlideData.map((item, index) => (
              <Box key={index} sx={styles.textContainer}>
                <Typography sx={styles.subtitle}>{item} &#8381;</Typography>
                <Checkbox />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ padding: '32px 0 66px' }}>
          <Title title="Рейтинг" />
          <Box sx={{ paddingTop: '16px' }}>
            <RatingIcons />
          </Box>
        </Box>
        <SubmitButton title="Применить" width="335px" height="56px" onClick={handleApplyClick} />
      </Box>
    </Modal>
  );
}
