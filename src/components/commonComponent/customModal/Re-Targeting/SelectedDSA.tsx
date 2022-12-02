import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function SelectedDSA() {
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
      typeAndDSA: 'DSA 1',
    },
    {
      sNo: '2',
      typeAndDSA: 'DSA 2',
    },
    {
      sNo: '3',
      typeAndDSA: 'DSA 3',
    },
    {
      sNo: '4',
      typeAndDSA: 'DSA 4',
    },
    {
      sNo: '5',
      typeAndDSA: 'DSA 5',
    },
    {
      sNo: '6',
      typeAndDSA: 'DSA 6',
    },
    {
      sNo: '7',
      typeAndDSA: 'DSA 7',
    },
    {
      sNo: '8',
      typeAndDSA: 'DSA 8',
    },
    {
      sNo: '9',
      typeAndDSA: 'DSA 9',
    },
    {
      sNo: '10',
      typeAndDSA: 'DSA 10',
    },
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {' '}
        Selected DSA
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Selected DSA'}
        duplicateRoleCloseBtn={' Close'}
        tableDataLMSRule={tableDataLMSRule}
      />
    </div>
  );
}

export default SelectedDSA;
