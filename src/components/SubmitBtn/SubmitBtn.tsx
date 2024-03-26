import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface SubmitButtonProps {
  title?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeigth?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  hoverBackgroundColor?: string;
  focusBackgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function SubmitButton({
  title,
  width,
  height,
  fontSize,
  fontWeigth,
  backgroundColor,
  disabled,
  borderRadius,
  color,
  hoverBackgroundColor,
  focusBackgroundColor,
  onClick
}: SubmitButtonProps) {
  const styles = {
    container: {
      textTransform: 'none',
      backgroundColor: backgroundColor ? backgroundColor : '#168E2C',
      width: width ? width : '299px',
      height: height ? height : '44px',
      borderRadius: borderRadius ? borderRadius : '16px',
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
      fontWeight: fontWeigth ? fontWeigth : '500',
      color: color ? color : '#fff'
    },
    h2: {
      lineHeight: '1.25'
    }
  };
  return (
    <Button
      variant="contained"
      disableElevation
      sx={styles.container}
      disabled={disabled}
      onClick={onClick}
    >
      <Typography component="h2" sx={styles.title}>
        {title}
      </Typography>
    </Button>
  );
}
