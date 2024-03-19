import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface SubmitButtonProps {
  title?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  focusBackgroundColor?: string;
  disabled?: boolean;
}

export default function SubmitButton({
  title,
  width,
  height,
  fontSize,
  backgroundColor,
  disabled,
  color,
  hoverBackgroundColor,
  focusBackgroundColor
}: SubmitButtonProps) {
  const styles = {
    container: {
      textTransform: 'none',
      backgroundColor: backgroundColor ? backgroundColor : '#168E2C',
      width: width ? width : '299px',
      height: height ? height : '44px',
      borderRadius: '16px',
      '&:hover': {
        backgroundColor: hoverBackgroundColor ? hoverBackgroundColor : '#0A771E'
      },
      '&:focus': {
        backgroundColor: focusBackgroundColor ? focusBackgroundColor : '#0A771E'
      }
    },
    title: {
      fontFamily: 'Inter',
      fontSize: fontSize ? fontSize : '16px',
      fontWeight: '500',
      color: color ? color : '#fff'
    },
    h2: {
      lineHeight: '1.25'
    }
  };
  return (
    <Button variant="contained" disableElevation sx={styles.container} disabled={disabled}>
      <Typography component="h2" sx={styles.title}>
        {title}
      </Typography>
    </Button>
  );
}
