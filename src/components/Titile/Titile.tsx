import './Title.css';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface TitleProps {
  title?: string;
  all?: string;
  link?: string;
  padding?: string;
  fontSize?: string;
  onClick?: () => void;
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: '18px'
  },
  subtitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: '18px',
    color: '#489865'
  }
};

export default function Title({ title, all, link, padding, fontSize, onClick }: TitleProps) {
  return (
    <Box
      sx={{
        ...styles.container,
        padding: padding ? padding : '0',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}
      onClick={onClick}
    >
      <Typography component="h2" sx={{ ...styles.title, fontSize: fontSize ? fontSize : '18px' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'inline-block' }}>
        <Link to={link || ''} className="title__link">
          <Typography component="h2" sx={styles.subtitle}>
            {all}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
