import './HistoryProgress.css'
import { useState } from 'react';
import { MobileStepper, Box } from '@mui/material';
import SubmitButton from '../../SubmitBtn/SubmitBtn';
import HistoryContent from '../HistoryContent/HistoryContent';
import { HistoryContentData } from '../../../utils/constants';
import CloseIcon from '../../../assets/CloseIcon.svg?react'

export default function HistoryProgress() {
  const [activeStep, setActiveStep] = useState(0);

  const styles = {
    container: {
      position:'relative',
      textAlign: 'center',
      backgroundColor: '#2B2D32'
    },
    stepper:{
      backgroundColor: '#2B2D32',
      padding:'104px 154px 0'
    }
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const history = HistoryContentData.history[activeStep]; 

  return (

    <Box sx={styles.container}>
      <CloseIcon className='history__close-icon'/>
      <MobileStepper
      sx={{
        ...styles.stepper,
        '& .MuiMobileStepper-dot': {
          backgroundColor: '#C2C2C2', 
          marginRight: '12px', 
        },
        '& .MuiMobileStepper-dotActive': {
          backgroundColor: '#FFF764', 
        },
      }}
        variant="dots"
        steps={HistoryContentData.history.length}
        position="static"
        activeStep={activeStep}
        backButton={''}
        nextButton={''}
      />
      <HistoryContent history={history} />
      <SubmitButton onClick={handleNext} title="Далее" width='335px' height='56px' />
    </Box>
  );
}
