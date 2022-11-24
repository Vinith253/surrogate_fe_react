import React, { useState } from 'react';

import { Button } from '@mui/material';
import CustomModal from '../CustomModal';

function DuplicateRole() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const existingRoleItem = [
    'Head',
    'Executive',
    'Underwriting Manager',
    'Manager',
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {' '}
        DuplicateRole
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        title={'Duplicate Role'}
        duplicate_role_content={'Select the Existing Role'}
        duplicateRoleCloseBtn={' Close'}
        existingRoleItem={existingRoleItem}
      />
    </div>
  );
}

export default DuplicateRole;
