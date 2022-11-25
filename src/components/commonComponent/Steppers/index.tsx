import React from 'react';
import { Typography, Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './style.scss';

type Props = {
  steps: Array<string>;
};

function Steppers({ steps }: Props) {
  return (
    <Box className="stepper-container">
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((eachStep: string) => (
          <Step key={eachStep}>
            <StepLabel>{eachStep}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Steppers;
