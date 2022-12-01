import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function RejectionType() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const tableDataLMSRule = [
    {
      sNo: '1',
      typeAndDSA: 'Score',
    },
    {
      sNo: '2',
      typeAndDSA: 'CIBIL',
    },
    {
      sNo: '3',
      typeAndDSA: 'DPD',
    },
    {
      sNo: '4',
      typeAndDSA: 'Income',
    },
    {
      sNo: '5',
      typeAndDSA: 'C4C',
    },
    {
      sNo: '6',
      typeAndDSA: 'Pincode',
    },
    {
      sNo: '7',
      typeAndDSA: 'KYC',
    },
    {
      sNo: '8',
      typeAndDSA: 'Others',
    },
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {' '}
        Rejection Type{' '}
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Rejection Type'}
        duplicateRoleCloseBtn={' Close'}
        tableDataLMSRule={tableDataLMSRule}
      />
    </div>
  );
}

export default RejectionType;
