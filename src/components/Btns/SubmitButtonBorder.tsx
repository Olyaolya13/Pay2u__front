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
  disabled?: boolean;
  onClick?: () => void;
  border?: string;
}

const styles = {
  container: {
    textTransform: 'none'
  },
  title: {
    fontFamily: 'Inter',
    lineHeight: '1.25'
  },
  icon: {
    marginRight: '8px',
    width: '20px',
    height: '22px'
  }
};

export default function SubmitButtonBorder({
  title,
  width,
  height,
  fontSize,
  fontWeigth,
  backgroundColor,
  disabled,
  borderRadius,
  color,
  border,
  onClick
}: SubmitButtonProps) {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        ...styles.container,
        backgroundColor: backgroundColor ? backgroundColor : '#fff',
        width: width ? width : '299px',
        height: height ? height : '44px',
        borderRadius: borderRadius ? borderRadius : '16px',
        border: border ? border : '1px solid #168E2C',
        '&:hover': {
          backgroundColor: '#fff'
        },
        '&:focus': {
          backgroundColor: '#fff'
        }
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <Typography
        component="h2"
        sx={{
          ...styles.title,
          fontSize: fontSize ? fontSize : '16px',
          fontWeight: fontWeigth ? fontWeigth : '700',
          color: color ? color : '#489865'
        }}
      >
        {title}
      </Typography>
    </Button>
  );
}
