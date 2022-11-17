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
        // successModalMsg={
        //   'Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer'
        // }
        accessLibraryMsg={'Here you can copy the link and share it'}
        btn={' Close'}
      />
    </div>
  );
}

export default AccessLibraryModal;
