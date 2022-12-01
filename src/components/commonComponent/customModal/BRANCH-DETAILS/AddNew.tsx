import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function AddNew() {
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
        Add New
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Add Organisation'}
        pause_content={'Select Channel type to add Organisation'}
        close={'Close'}
        submit={'Proceed'}
        radioValuOne={'State'}
        radioValuTwo={'Zone'}
        radioValueThree={'District'}
        radioValueFour={'Branch'}
        pauseMethodChecking={(arg1: string) => pauseMethodChange(arg1)}
      />
    </div>
  );
}

export default AddNew;
