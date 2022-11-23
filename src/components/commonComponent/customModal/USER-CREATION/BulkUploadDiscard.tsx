import { Button } from '@mui/material';
import React, { useState } from 'react';
import CustomModal from '../CustomModal';

function BulkUploadDiscard() {
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
        BulkUpload Discard
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        successModalTitle={'Do You want to discard?'}
        discardModalMsg={
          'Want to discard corrections for error entires in the excel sheet and continue upload cards'
        }
        yesContinueBtn={'Yes, Continue'}
        closeBtn={'Close'}
      />
    </div>
  );
}

export default BulkUploadDiscard;
