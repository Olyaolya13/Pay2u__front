import Button from '@mui/material/Button';
import FilterSlideIcon from '../../../assets/FilterSlideIcon.svg?react';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<FilterSlideIcon />}>
        Send
      </Button>
    </Stack>
  );
}
