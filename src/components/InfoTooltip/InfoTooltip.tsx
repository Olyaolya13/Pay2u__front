import './InfoTooltip.css';
import { Tooltip, Box, ClickAwayListener } from '@mui/material';
import InfoIcon from '../../assets/InfoIcon.svg?react';
import { useState } from 'react';

interface InfoTooltipProps {
  tooltip?: string;
}

export default function InfoTooltip({ tooltip }: InfoTooltipProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener sx={{ position: 'relative' }} onClickAway={handleTooltipClose}>
      <Tooltip
        arrow
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={tooltip}
        open={open}
        onClose={() => setOpen(false)}
        onClick={handleClick}
        placement="bottom"
        className="text"
      >
        <Box sx={{ display: 'flex', alignItems: 'start' }}>
          <InfoIcon />
        </Box>
      </Tooltip>
    </ClickAwayListener>
  );
}
