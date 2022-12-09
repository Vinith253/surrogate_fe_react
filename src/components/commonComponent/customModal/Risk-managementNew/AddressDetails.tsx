import React, { useState } from 'react';

import { Button } from '@mui/material';

import CustomModal from '../CustomModal';

function AddressDetails() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const [textAreaValue, setTextAreaValue] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const addressDetails = [
    {
      Key: 'Address 1',
      value: 'No 45, D-Block Gandhi Nagar Chennai - 600021',
      addressSource: 'Address source',
      billMethod: 'CIBIL',
      selectedAddress: true,
    },
    {
      Key: 'Address 1',
      value: 'No 45, D-Block Gandhi Nagar Chennai - 600021',
      addressSource: 'Address source',
      billMethod: 'CIBIL',
      selectedAddress: false,
    },
    {
      Key: 'Address 1',
      value: 'No 45, D-Block Gandhi Nagar Chennai - 600021',
      addressSource: 'Address source',
      billMethod: 'CIBIL',
      selectedAddress: false,
    },
    {
      Key: 'Address 1',
      value: 'No 45, D-Block Gandhi Nagar Chennai - 600021',
      addressSource: 'Address source',
      billMethod: 'CIBIL',
      selectedAddress: false,
    },
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {' '}
        Calculated
      </Button>

      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'User Traceability - Address Details'}
        duplicateRoleCloseBtn={' Close'}
        addressDetails={addressDetails}
      />
    </div>
  );
}

export default AddressDetails;
