import { Stack, Box, Button, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ScreenHeader } from '../../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import '../AuthorisationDetail/authDetailStyle.scss';
import Edit_icon from '../../../../../assets/icons/edit_scheduled_pause_icon.svg';
import { authorisation_user_data } from '../AuthorisationLevel/authorisation.const';
import { ListTagStatus } from '../../../../../utils/tagBasedIndicator/listTagStatus';
import active_icon from '../../../../../assets/icons/active_icon.svg';
import question_icon from '../../../../../assets/icons/questionMark_icon.svg';
import close_icon from '../../../../../assets/icons/close_icon.svg';
import { tagBasedIndicator } from '../../../../../utils/constants/Constants';
import BtnContained from '../../../../../components/commonComponent/CustomText/Button/Contained';
import { useLocation, useNavigate } from 'react-router-dom';
import CardAndDropDown from '../../../../../components/commonComponent/cardAndDropDown/cardAndDropDown';
import BtnOutlined from '../../../../../components/commonComponent/CustomText/Button/Outlined';
import CustomModal from '../../../../../components/commonComponent/customModal/CustomModal';

export const authDetailHeader = [
  {
    title: 'Initiated By',
    details: 'Parithi',
  },
  {
    title: 'Initiated Date',
    details: '12 Jul,22 09:40 Am',
  },
  {
    title: 'Approved By',
    details: 'Ganesh',
  },
  {
    title: 'Approved Date',
    details: '12 Jul,22 09:40 Am',
  },
];

export const AuthDetail = () => {
  const { state } = useLocation();
  const [createRoleSelection, setCreateRoleSelection] = useState(false);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (state === 'editMode') {
      setEdit(!edit);
    }
  }, []);
  const handleSubmitClick = () => {
    setCreateRoleSelection(true);
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Stack className="authDetailContainer">
      <Stack className="authDetailContainerHeaderMain">
        <Stack className="authDetailHeaderContainer">
          {edit ? (
            <>
              <Stack className="authDetailHeaderSubContainer">
                <Stack className="authDetailHeaderTitle">
                  <ScreenHeader
                    title="CreateAuthorization level/ V 0.01"
                    info="From here you can create access presets to assign with users in Users creation."
                    showBackButton={true}
                  />
                </Stack>
              </Stack>
            </>
          ) : (
            <>
              <Stack
                className="authDetailHeaderSubContainer"
                sx={{
                  borderBottom: '2px solid #f0f2f5',
                  paddingBottom: '24px',
                }}
              >
                <Stack className="authDetailHeaderTitle">
                  <ScreenHeader
                    title="View Authorization level/ V 0.09"
                    info="From here you can create access presets to assign with users in Users creation."
                    showBackButton={true}
                  />
                </Stack>

                <Stack className="authDetailHeaderStatus">
                  <Box>
                    <Typography
                      sx={{
                        color: ListTagStatus(state).color,
                        backgroundColor: ListTagStatus(state).bgColor,
                        fontSize: '12px',
                        fontWeight: 400,
                        padding: '3px 10px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 'max-content',
                      }}
                    >
                      {state === tagBasedIndicator.ACTIVE && (
                        <img
                          src={active_icon}
                          alt="active"
                          style={{ marginRight: '8px' }}
                        />
                      )}
                      {state === tagBasedIndicator.WAITING_FOR_APPROVAL && (
                        <img
                          src={question_icon}
                          alt="active"
                          style={{ marginRight: '8px' }}
                        />
                      )}
                      {state === tagBasedIndicator.CLOSED && (
                        <img
                          src={close_icon}
                          alt="active"
                          style={{ marginRight: '8px' }}
                        />
                      )}
                      {state}
                    </Typography>
                  </Box>
                  <Button
                    variant="text"
                    className="authDetailHeaderButton"
                    sx={{ color: '#0662B7', fontSize: '14px' }}
                    onClick={() => setEdit(true)}
                  >
                    <IconButton>
                      <img
                        src={Edit_icon}
                        alt=""
                        style={{
                          filter:
                            'invert(26%) sepia(97%) saturate(1278%) hue-rotate(190deg) brightness(92%) contrast(101%)',
                        }}
                      />
                    </IconButton>
                    Edit Authorization Level
                  </Button>
                </Stack>
              </Stack>
              <Stack>
                <Stack className="authDetailHeaderSubContainerDetails">
                  {authDetailHeader.map((items: any, index: number) => {
                    return (
                      <Stack>
                        <Typography className="authDetailHeaderSubContainerDetailsTitle">
                          {items.title}
                        </Typography>
                        <Typography className="authDetailHeaderSubContainerDetailsPara">
                          {items.details}
                        </Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
      <Stack
        className="modelAccessControlContainer"
        sx={{ margin: edit ? '30px 0 90px 0' : '30px 0' }}
      >
        <Stack className="modelAccessControlSubContainer">
          <Stack>
            <Typography className="modelAccessControlContainerTitle">
              Module Access Control
            </Typography>
          </Stack>
          {authorisation_user_data.map((items: any, index: number) => {
            return (
              <Stack key={index}>
                <Stack className="modelAccessControlContainerTable">
                  <Stack className="modelAccessControlContainerTableHeader">
                    <Stack sx={{ width: '50%' }}>
                      <Typography className="modelAccessControlModuleName">
                        {items.module_name}
                      </Typography>
                    </Stack>
                    <Stack
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '50%',
                      }}
                    >
                      <Typography
                        sx={{ width: '48%' }}
                        className="modelAccessControlModuleName"
                      >
                        {items.reviewer}
                      </Typography>
                      <Typography
                        sx={{ width: '48%' }}
                        className="modelAccessControlModuleName"
                      >
                        {items.approver}
                      </Typography>
                    </Stack>
                  </Stack>
                  {items.sub_module.map((items: any, index: number) => {
                    return (
                      <Stack className="modelAccessControlContainerTableData">
                        <Stack sx={{ width: '50%' }}>
                          <Typography
                            className="modelAccessControlModelName"
                            onClick={() =>
                              navigate(
                                '/userManagement/roleCreation/userdetails'
                              )
                            }
                          >
                            {items.sub_module_name}
                          </Typography>
                        </Stack>
                        <Stack
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '50%',
                          }}
                        >
                          <Stack className="modelAccessControlModelCount">
                            <CardAndDropDown
                              value={
                                items?.sub_module_data?.reviewer_data?.length ??
                                0
                              }
                              showDropDown={edit}
                            />
                          </Stack>
                          <Stack className="modelAccessControlModelCount">
                            <CardAndDropDown
                              value={
                                items?.sub_module_data?.approver_data?.length ??
                                0
                              }
                              showDropDown={edit}
                            />
                          </Stack>
                        </Stack>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      {edit ? (
        <>
          <Box
            sx={{
              marginTop: '10px',
              backgroundColor: 'white',
              position: 'fixed',
              bottom: 0,
              right: 0,
              width: '100%',
              borderTop: '2px solid #f3f3f3 ',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'flex-end',
                padding: '10px 30px',
              }}
            >
              <BtnOutlined title="Cancel" onClick={() => navigate(-1)} />
              <BtnContained title="Submit" onClick={handleSubmitClick} />
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
      {createRoleSelection && (
        <CustomModal
          openSuccess={createRoleSelection}
          handleCloseSuccess={goBack}
          successModalTitle={'Authorization level Created Successfully'}
          successModalMsg={
            'Your request for creating new authorization level is successfully sent to the Reviewer.'
          }
          btn={'Close'}
        />
      )}
    </Stack>
  );
};
