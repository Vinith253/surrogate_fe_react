import { Divider, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import './createRole.scss';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import { AccordianLayover } from '../../../../components/commonComponent/CustomAccordian/Accordian';
import { FooterButton } from '../../../../components/commonComponent/FooterButton/FooterButton';
import { useState } from 'react';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';
import { useNavigate } from 'react-router-dom';

export const CreateRole = () => {
  const [createRoleSelection, setCreateRoleSelection] =
  useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const handleSubmitClick = () => {
    setCreateRoleSelection(true)
  }
  return (
    <Stack>
      <Stack>
        <Box className="create-header-container">
          <ScreenHeader
            title="Create Role"
            info="From here you can create access presets to assign with users in Users creation."
            showBackButton={true}
          />
        </Box>

        <Box className="second-header-container">
          <Typography>Role Detail</Typography>
          <Divider className="divider-style" />
          <Box>
            <Typography
              className="textfield-text-style"
              variant="body1"
              color="textPrimary"
            >
              Role Name
            </Typography>
            <TextField
              hiddenLabel
              placeholder="Enter Role Name"
              variant="outlined"
              inputProps={{
                style: {
                  fontSize: '14px',
                  color: 'black',
                  width: '240px',
                  padding: '15px',
                },
              }}
              // onChange={(e) => handleChange(e, id)}
              // value={value}
            >
              "Enter Role Name"
            </TextField>
          </Box>
        </Box>
        <Box className="second-header-container">
          <Typography>Module Access Control</Typography>
          <Divider className="checkbox-divider-style" />
          <AccordianLayover />
        </Box>
        <Box className="divide"></Box>
       <FooterButton
       cancel='Cancel'
       submit='Submit'
       handleSubmitClick={handleSubmitClick}
       handleCancelClick={goBack}/>
       {createRoleSelection && (
        <CustomModal
          openSuccess={createRoleSelection}
          handleCloseSuccess={goBack}
          successModalTitle={'Role Created Successfully'}
          successModalMsg={'Your request for creating new role is successfully sent to the Reviewer.'}
          btn={'Close'}
        />
      )}
      </Stack>
    </Stack>
  );
};