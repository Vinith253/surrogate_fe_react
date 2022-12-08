import React, { useState } from 'react';

import { Button } from '@mui/material';

import CustomModal from '../CustomModal';

function AccountDetais() {
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

  const employeeDetailsRowOne = [
    {
      Key: 'Relationship with bank',
      value: 'Existing to Bank',
    },
    {
      Key: 'Account Type',
      value: 'Savings Account',
    },
    {
      Key: 'Account Holder Name',
      value: 'Antony Jackson',
    },
    {
      Key: 'Account Number',
      value: '8090785645342312',
    },
    {
      Key: 'IFSC Code',
      value: 'YES00001212',
    },
    {
      Key: 'Branch',
      value: 'Chromepet - 600044',
    },
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {' '}
        Account details
      </Button>

      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        employeeDetailsRowOne={employeeDetailsRowOne}
        title={'Employee Details'}
        duplicateRoleCloseBtn={' Close'}
      />
    </div>
  );
}

export default AccountDetais;
