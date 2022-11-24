import { Button } from '@mui/material';
import React, { useState } from 'react';
import CustomModal from '../CustomModal';

function CancelBulkUploadDiscard() {
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
        Cancel BulkUpload Discard
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        successModalTitle={'Do you want to Cancel Bulk upload ?'}
        discardModalMsg={
          'Lorem ipsum dolor sit amet consectetur. Sit orci at ac vivamus. Pretium sollicitudin phasellus et quis.'
        }
        yesContinueBtn={'Yes, Continue'}
        closeBtn={'Close'}
      />
    </div>
  );
}

export default CancelBulkUploadDiscard;
