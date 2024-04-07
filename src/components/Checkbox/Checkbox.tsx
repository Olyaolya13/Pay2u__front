import { Checkbox } from '@mui/material';

interface CheckoxIconProps {
  onChange?: () => void;
}

export default function CheckoxIcon({ onChange }: CheckoxIconProps) {
  return (
    <Checkbox
      disableRipple
      onChange={onChange}
      color="success"
      sx={{
        color: '#168E2C',
        padding: '0 7px 0  0',
        '& .MuiButtonBase-root .MuiCheckbox-root.Mui-checked': {
          color: '#168E2C'
        }
      }}
    />
  );
}
