import React, { useState } from 'react';

import { Button } from '@mui/material';

import CustomModal from '../CustomModal';

function Calculated() {
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
        Calculated
      </Button>

      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'How Its Calculated?'}
        duplicateRoleCloseBtn={' Close'}
        modalContent={
          'Lorem ipsum dolor sit amet consectetur. Ut velit placerat vestibulum sit sollicitudin nullam nascetur. Nec at sed proin consectetur. Pellentesque id ut blandit scelerisque diam. Duis convallis diam placerat amet. Vestibulum neque consectetur et amet mauris purus nullam iaculis. In adipiscing viverra nunc mattis ultricies cras elit. Tincidunt dictum faucibus interdum cras aliquet. Non lacus.'
        }
      />
    </div>
  );
}

export default Calculated;
