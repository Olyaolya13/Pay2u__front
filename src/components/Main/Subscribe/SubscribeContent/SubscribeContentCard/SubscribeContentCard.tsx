import { Box, CardMedia, Typography } from '@mui/material';
import SubmitButton from '../../../../Btns/SubmitBtn';
import { useNavigate } from 'react-router-dom';
import Benefit30 from '../../../../../assets/Benefit30.svg';
import Benefit50 from '../../../../../assets/Benefit50.svg';

interface SubscribeContentCardProps {
  title: string;
  sum: number;
  description: string;
  image: string;
  alt: string;
  about: number;
  month?: string;
  payAbout: string;
  imageSize: {
    width: string;
    height: string;
  };
}

const font = { fontSize: '14px', fontFamily: 'Inter', fontWeight: '500' };

const styles = {
  container: {
    width: '212px',
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
    borderRadius: '12px',
    padding: '28px  20px 28px 16px',
    margin: '20px 0 32px 20px '
  },
  text: { textAlign: 'start' },
  sum: {
    ...font,
    paddingTop: '8px',
    fontSize: '18px',
    fontWeight: '700'
  },
  description: {
    ...font,
    fontSize: '12px',
    color: '#676879'
  },
  descriptionOneMnth: {
    ...font,
    fontSize: '12px',
    color: '#676879',
    paddingBottom: '30px'
  },
  about: {
    ...font,
    fontSize: '12px',
    color: '#676879',
    marginTop: '4px'
  },
  month: {
    ...font,
    fontSize: '12px',
    color: '#676879',
    paddingBottom: '16px'
  },
  image: { position: 'absolute', top: '16px', right: '0' },
  btn: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  benefit: {
    position: 'absolute',
    top: '-10px',
    left: '28%',
    width: '88px',
    height: '24px'
  }
};

export default function SubscribeContentCard({ data }: { data: SubscribeContentCardProps }) {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate('/subscription_payment');
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.text}>
        <Typography component="p" sx={{ ...font }}>
          {data.title}
        </Typography>
        <Typography component="p" sx={{ ...font }}>
          <span style={styles.sum}>{data.sum} ₽</span> в месяц
        </Typography>
        {data.title === 'На 1 месяц' ? (
          <Typography component="p" sx={styles.descriptionOneMnth}>
            при оплате {data.description}
          </Typography>
        ) : (
          <>
            <Typography component="p" sx={styles.description}>
              при оплате {data.description}
            </Typography>
            <Typography component="p" sx={styles.month}>
              1 раз в {data.month}
            </Typography>
            {data.title !== 'На 1 месяц' && (
              <CardMedia
                component="img"
                image={data.title === 'на 3 месяца' ? Benefit30 : Benefit50}
                alt={data.title === 'на 3 месяца' ? 'Выгода 30%' : 'Выгода 50%'}
                sx={styles.benefit}
              />
            )}
          </>
        )}
      </Box>
      <CardMedia
        component="img"
        image={data.image}
        alt={data.alt}
        sx={{ ...styles.image, width: data.imageSize.width, height: data.imageSize.height }}
      />
      <Box sx={styles.btn}>
        <SubmitButton
          title={`Подключить за 1 ₽`}
          width="196px"
          height="26px"
          borderRadius="8px"
          fontWeigth="400"
          fontSize="14px"
          onClick={handleOpen}
        />
        <Typography component="p" sx={styles.about}>
          Далее {data.about} ₽ {data.payAbout}
        </Typography>
      </Box>
    </Box>
  );
}
