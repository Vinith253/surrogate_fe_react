import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import './createRole.scss';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import { AccordianLayover } from '../../../../components/commonComponent/CustomAccordian/Accordian';
import { FooterButton } from '../../../../components/commonComponent/FooterButton/FooterButton';
import { useEffect, useState } from 'react';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { duplicateRoleData, moduleControlData, viewPageDetails } from './createrole.const';
import {ReactComponent as EditRole} from '../../../../assets/icons/edit_role.svg';

export const CreateRole = () => {
  const { state } = useLocation();
  const [createRoleSelection, setCreateRoleSelection] = useState(false);
  const [roleName, setRoleName] = useState('');
  const [enabled, isEnabled] = useState(false);
  const [displayCategories, setDisplayCategories] = useState<any>(state.roleName.length > 0 ? duplicateRoleData : moduleControlData);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const handleSubmitClick = () => {
    setCreateRoleSelection(true)
  }
  const handleEditRoleClick = () => {
    isEnabled(false)
    setRoleName('Executive')
  }

  useEffect(() => {
    if (state) {
      setRoleName(state.roleName)
      isEnabled(state.isView)
    }
  }, [state]);


  return (
    <Stack>
      <Stack>
        {enabled ?
         <Box className="upper-head-container">
        <Box className="create-header-container">
        <ScreenHeader
          title="View Role - Underwritting Manager"
          info="From here you can create access presets to assign with users in Users creation."
          showBackButton={true}
        />
        <Box>
            <Button
              sx={{ textTransform: 'capitalize' }}
              color="secondary"
              startIcon={<EditRole />}
              aria-haspopup="true"
              onClick={handleEditRoleClick}
              id="basic-button"
            >
              Edit Role
            </Button>
          </Box>
      </Box>
      <div className='viewpage-detail'>
      <div className="underline"></div>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {viewPageDetails?.details?.map((eachItem: any, index: number) => {
              return (
                <Grid item xs={3} key={index}>
                  <div className="each-info">
                    <div className="info-label">{eachItem?.label ?? '--'}</div>
                    <div className="info-value">{eachItem?.value ?? '--'}</div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
          </div>
      </Box>
        : 
        <Stack>
        <Box className="create-header-container " mt='32px'>
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
              onChange={(e) => setRoleName(e.target.value)}
              value={roleName}
            >
              {roleName}
            </TextField>
          </Box>
        </Box>
        </Stack> }

        <Box className="second-header-container">
          <Typography>Module Access Control</Typography>
          <Divider className="checkbox-divider-style" />
          <AccordianLayover 
          data={displayCategories}
          isViewPage={enabled}
          />
        </Box>
        <Box className="divide"></Box>
        {enabled ?
        <FooterButton
        submit='Close'
        handleSubmitClick={goBack}
        />
        :
       <FooterButton
       cancel='Cancel'
       submit='Submit'
       handleSubmitClick={handleSubmitClick}
       handleCancelClick={goBack}/> }
       {createRoleSelection && !enabled && (
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
