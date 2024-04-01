import { Box, CardMedia, Typography } from '@mui/material';
import SubmitButton from '../../../SubmitBtn/SubmitBtn';
import { useNavigate } from 'react-router-dom';

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

export default function SubscribeContentCard({ data }: { data: SubscribeContentCardProps }) {
  const navigate = useNavigate();
  const styles = {
    container: {
      width: '212px',
      position: 'relative',
      backgroundColor: '#fff',
      boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
      borderRadius: '12px',
      padding: '28px  0 28px 16px'
    },
    text: { textAlign: 'start' },

    title: {
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: '500'
    },
    sum: {
      paddingTop: '8px',
      fontSize: '18px',
      fontFamily: 'Inter',
      fontWeight: '700'
    },
    description: {
      paddingTop: '4px',
      fontSize: '12px',
      fontFamily: 'Inter',
      fontWeight: '400',
      color: '#676879'
    },
    descriptionOneMnth: {
      paddingTop: '4px',
      fontSize: '12px',
      fontFamily: 'Inter',
      fontWeight: '400',
      color: '#676879',
      paddingBottom: '30px'
    },
    about: {
      paddingTop: '8px',
      fontSize: '12px',
      fontFamily: 'Inter',
      fontWeight: '400',
      color: '#676879'
    },
    month: {
      fontSize: '12px',
      fontFamily: 'Inter',
      fontWeight: '400',
      color: '#676879',
      paddingBottom: '16px'
    },

    image: { position: 'absolute', top: '16px', right: '0' },
    btn: { display: 'flex', flexDirection: 'column', alignItems: 'start' }
  };

  const handleOpen = () => {
    navigate('/subscription_payment');
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.text}>
        <Typography component="p" sx={styles.title}>
          {data.title}
        </Typography>
        <Typography component="p" sx={styles.title}>
          <span style={styles.sum}>{data.sum} ₽</span> в месяц
        </Typography>
        {data.title === 'на 1 месяц' ? (
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
          title={`Подключить за ${data.sum} ₽`}
          width="196px"
          height="26px"
          borderRadius="8px"
          fontWeigth="400"
          fontSize="14px"
          onClick={handleOpen}
        />
        <Typography component="p" sx={styles.about}>
          далее {data.about} ₽ {data.payAbout}
        </Typography>
      </Box>
    </Box>
  );
}
