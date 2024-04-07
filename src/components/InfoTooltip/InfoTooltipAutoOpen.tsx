import {
  Tooltip,
  Box,
  ClickAwayListener,
  Typography,
  TooltipProps,
  tooltipClasses,
  styled,
  CardMedia
} from '@mui/material';
import React, { useEffect, useState } from 'react';

interface InfoTooltipProps {
  tooltip?: string;
  icon: string;
}

const TextTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#E86513',
    color: '#F5F5F5',
    maxWidth: 311,
    fontSize: theme.typography.pxToRem(12),
    margin: '10px 20px'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#E86513'
  }
}));

const font = { fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '1.25' };

const styles = {
  container: {
    position: 'relative'
  }
};

export default function InfoTooltip({ tooltip, icon }: InfoTooltipProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Box sx={styles.container}>
        <TextTooltip
          arrow
          disableFocusListener
          disableHoverListener
          disableTouchListener
          open={open}
          onClose={() => setOpen(false)}
          onClick={handleClick}
          title={
            <React.Fragment>
              <Typography component="p" sx={{ ...font, padding: '0' }}>
                {tooltip}
              </Typography>
            </React.Fragment>
          }
        >
          <Box sx={{ display: 'flex', alignItems: 'start' }}>
            {icon && <CardMedia component="img" image={icon} />}
          </Box>
        </TextTooltip>
      </Box>
    </ClickAwayListener>
  );
}
