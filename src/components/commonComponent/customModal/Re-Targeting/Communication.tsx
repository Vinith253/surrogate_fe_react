import { Button } from '@mui/material';
import React, { useState } from 'react';
import CustomModal from '../CustomModal';

function Communication() {
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
        Surrogate selection
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Choose the mode of communication'}
        close={'Cancel'}
        submit={'Re-Target'}
        product_label={product_label}
      />
    </div>
  );
}

export default Communication;

const product_label = [
  {
    id: 1,
    label: 'SMS',
    defaultChecked: false,
  },
  {
    id: 2,
    label: 'Whatsapp',
    defaultChecked: false,
  },
  {
    id: 3,
    label: 'Mail',
    defaultChecked: false,
  },
  {
    id: 4,
    label: 'Call',
    defaultChecked: false,
  },
];
