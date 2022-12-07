import React, { useState } from 'react';

import { Button } from '@mui/material';

import CustomModal from '../CustomModal';

function ReasonForRejection() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const [textAreaValue, setTextAreaValue] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const textareaonchangeFun = (e: any) => {
    setButtonDisabled(textAreaValue.length > 6 ? false : true);
    setTextAreaValue(e.target.value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {' '}
        Reason For Rejection
      </Button>

      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Enter Reason For Rejection'}
        textarea_title={'Add Reasons'}
        maxLength={'Maximum of 500 words'}
        close={'Cancel'}
        submit={'Reject'}
        textAreaHeight={'230px'}
        textAreaValue={textAreaValue}
        buttonDisabled={buttonDisabled}
        textareaonchangeFun={textareaonchangeFun}
      />
    </div>
  );
}

export default ReasonForRejection;
