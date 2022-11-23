import React, { useState } from 'react';
import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function OrgUploadSuccess() {
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
        Org- Upload success
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        successModalTitle={'Organisation is Uploaded Successfully'}
        successModalMsg={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in consectetur sapien a consequat.'
        }
        btn={' Close'}
      />
    </div>
  );
}

export default OrgUploadSuccess;
