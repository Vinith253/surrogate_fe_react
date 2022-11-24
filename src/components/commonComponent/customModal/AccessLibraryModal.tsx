import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from './CustomModal';

function AccessLibraryModal() {
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
        {' '}
        Access Library
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        successModalTitle={'Share the link'}
        accessLibraryMsg={'Here you can copy the link and share it'}
        org_ID={'#12345'}
        org_Name={'Ganesh Agency'}
        channel_type={'DSA'}
        accessLibraryModaBtn={'Link to share'}
        accessLibraryCloseBtn={' Close'}
      />
    </div>
  );
}

export default AccessLibraryModal;
