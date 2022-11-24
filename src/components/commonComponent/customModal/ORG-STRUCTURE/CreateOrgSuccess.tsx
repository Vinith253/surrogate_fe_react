import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function CreateOrgSuccess() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Organisation success
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        successModalTitle={'Create Organisation'}
        successModalMsg={
          'Your request for creating new organisation is succesfully sent to the reviewer'
        }
        btn={' Close'}
      />
    </div>
  );
}

export default CreateOrgSuccess;
