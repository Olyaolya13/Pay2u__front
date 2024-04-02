import { Box, InputBase, styled, IconButton } from '@mui/material';
import SearchIcon from '../../assets/SearchIcon.svg';

interface SearchProps {
  margin?: string;
}

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    paddingLeft: theme.spacing(0)
  }
}));

const Icon = styled('img')({
  width: '18px',
  height: '18px'
});

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#F9F9F9',
    borderRadius: '16px',
    alignItems: 'center'
  },
  iconButton: {
    padding: '11px 11px 11px 15px'
  }
};

export default function Search({ margin }: SearchProps) {
  const handleIconClick = () => {
    console.log('search');
  };

  return (
    <Box sx={{ ...styles.container, margin: margin ? margin : '38px 0 0 0' }}>
      <IconButton disableRipple sx={styles.iconButton} onClick={handleIconClick}>
        <Icon src={SearchIcon} alt="Search Icon" />
      </IconButton>
      <StyledInputBase placeholder="Что вы ищете?" inputProps={{ 'aria-label': 'search' }} />
    </Box>
  );
}
