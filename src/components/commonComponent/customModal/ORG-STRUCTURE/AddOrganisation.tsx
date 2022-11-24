import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function AddOrganisation() {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [pauseMethod, setPauseMethod] = useState('DSA');
  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const pauseMethodChange = (value: any) => {
    setPauseMethod(value);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add organisation
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Add Organisation'}
        pause_content={'Select Channel type to add Organisation'}
        close={'Close'}
        submit={'Proceed'}
        radioValuOne={'DSA'}
        radioValuTwo={'Fintech'}
        pauseMethodChecking={(arg1: string) => pauseMethodChange(arg1)}
      />
    </div>
  );
}

export default AddOrganisation;
