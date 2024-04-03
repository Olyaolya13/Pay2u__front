import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';

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
  icon?: ReactNode;
  margin?: string;
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

export default function SubmitButtonWithIcon({
  title,
  width,
  height,
  fontSize,
  fontWeigth,
  backgroundColor,
  disabled,
  borderRadius,
  color,
  onClick,
  icon,
  margin
}: SubmitButtonProps) {
  return (
    <Button
      variant="contained"
      disableElevation
      startIcon={icon}
      sx={{
        ...styles.container,
        backgroundColor: backgroundColor ? backgroundColor : '#168E2C',
        width: width ? width : '299px',
        height: height ? height : '44px',
        borderRadius: borderRadius ? borderRadius : '16px',
        '&:hover': {
          backgroundColor: '#0A771E'
        },
        '&:focus': {
          backgroundColor: '#0A771E'
        },
        margin: margin ? margin : '0'
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
          color: color ? color : '#fff'
        }}
      >
        {title}
      </Typography>
    </Button>
  );
}
