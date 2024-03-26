import { Box, Typography } from '@mui/material';
import SubmitButton from '../../SubmitBtn/SubmitBtn';
import { ServicesData } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';

export default function ServicesInfo() {
  const navigate = useNavigate();
  const styles = {
    container: {
      background: 'linear-gradient(to right, #28C22E 0%, #197225 100%)',
      boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.08)',
      borderRadius: '16px',
      padding: '20px 20px 20px 16px'
    },
    title: {
      fontFamily: 'Inter',
      color: '#F5F5F5',
      lineHeight: '1.25',
      fontWeight: '400',
      paddingBottom: '16px',
      textAlign: 'start'
    }
  };

  const handleOpen = () => {
    navigate('/history');
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={styles.container}>
      <Typography component="p" sx={styles.title}>
        {ServicesData.text}
      </Typography>
      <SubmitButton
        title={ServicesData.btn}
        backgroundColor="#F9F9F9"
        hoverBackgroundColor="#F9F9F9"
        focusBackgroundColor="#F9F9F9"
        color="#489865"
        onClick={handleOpen}
      />
    </Box>
  );
}
