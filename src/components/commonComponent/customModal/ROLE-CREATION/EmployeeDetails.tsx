import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function EmployeeDetails() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const employeeDetailsRowOne = [
    {
      Key: 'Employee Name',
      value: 'Parithi',
    },
    {
      Key: 'Employee ID',
      value: 'YES211',
    },
    {
      Key: 'Date of Joining',
      value: '10/07/2022',
    },
    {
      Key: 'Mobile Number',
      value: '9876543210',
    },
    {
      Key: 'Email ID',
      value: 'Parithi@yes.com',
    },
  ];

  const employeeDetailsRowTwo = [
    {
      Key: 'Designation',
      value: 'Sales Manager',
    },
    {
      Key: 'Reporting Head',
      value: 'Ganesh',
    },
    {
      Key: 'Role Access Type',
      value: 'Reviewer',
    },
    {
      Key: 'Employee Status',
      value: 'Active',
    },
  ];

  const employeeDetailsRowThree = [
    {
      Key: 'State',
      value: 'Tamil Nadu',
    },
    {
      Key: 'Zone',
      value: 'South Zone',
    },
    {
      Key: 'District',
      value: 'Dindigul',
    },
    {
      Key: 'Branch',
      value: 'palani',
    },
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {' '}
        Employee Details
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        employeeDetailsRowOne={employeeDetailsRowOne}
        employeeDetailsRowTwo={employeeDetailsRowTwo}
        employeeDetailsRowThree={employeeDetailsRowThree}
        title={'Employee Details'}
        duplicateRoleCloseBtn={' Close'}
      />
    </div>
  );
}

export default EmployeeDetails;
