import {
  Tooltip,
  Box,
  ClickAwayListener,
  Typography,
  TooltipProps,
  tooltipClasses,
  styled
} from '@mui/material';
import InfoIcon from '../../assets/InfoIcon.svg?react';
import React, { useState } from 'react';

interface InfoTooltipProps {
  tooltip?: string;
}

const TextTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#E86513',
    color: '#F5F5F5',
    maxWidth: 311,
    fontSize: theme.typography.pxToRem(12),
    margin: '20px'
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

export default function InfoTooltip({ tooltip }: InfoTooltipProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

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
            <InfoIcon />
          </Box>
        </TextTooltip>
      </Box>
    </ClickAwayListener>
  );
}
