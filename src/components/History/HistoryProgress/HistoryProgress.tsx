import { useState } from 'react';
import { MobileStepper, Box } from '@mui/material';
import SubmitButton from '../../SubmitBtn/SubmitBtn';
import HistoryContent from '../HistoryContent/HistoryContent';
import { HistoryContentData } from '../../../utils/constants';

export default function HistoryProgress() {
  const [activeStep, setActiveStep] = useState(0);

  const styles = {
    container: {
      textAlign: 'center',
      backgroundColor: '#2B2D32'
    }
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  return (
    <Box>
      <MobileStepper
        sx={styles.container}
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        backButton={''}
        nextButton={''}
      />
      <HistoryContent activeStep={activeStep + 1} />
      <SubmitButton onClick={handleNext} title="Далее" />
    </Box>
  );
}
