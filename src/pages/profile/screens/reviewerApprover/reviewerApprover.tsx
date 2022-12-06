import React, { useState } from 'react';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { ScreenHeader } from '../../../../components/commonComponent/ScreenHeader/ScreenHeader';
import './style.scss';
import Edit_icon from '../../../../assets/icons/edit_scheduled_pause_icon.svg';
import BtnOutlined from '../../../../components/commonComponent/CustomText/Button/Outlined';
import BtnContained from '../../../../components/commonComponent/CustomText/Button/Contained';
import { useNavigate } from 'react-router-dom';
import dropDown_icon from '../../../../assets/icons/dropDown_icon.svg';
import ApproverReviewerTable from '../../../../components/commonComponent/ReviewerApproverTable';
import { ReviewerApproverList } from '../../../userManagement/userCreation/userCreation.const';

export const ReviewerApprover = () => {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  return (
    <Stack className="profileReviewerApproverContainer">
      <Stack className="profileReviewerContainerHeaderMain">
        <Stack className="profileReviewerHeaderContainer">
          <Stack className="profileReviewerHeaderSubContainer">
            <Stack className="profileReviewerHeaderTitle">
              <ScreenHeader
                title="Reviewer & Approver"
                info="List of all reviewers and approvers pertaining to each module."
                showBackButton={false}
              />
            </Stack>
            {edit ? (
              <></>
            ) : (
              <>
                <Stack className="profileReviewerHeaderStatus">
                  <Button
                    variant="text"
                    className="profileReviewerHeaderButton"
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
                    Edit
                  </Button>
                </Stack>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack
        className="profileReviewerApproverTableContainer"
        sx={{
          margin: edit ? '30px 0 80px 0' : '30px 0',
          backgroundColor: 'white',
        }}
      >
        <Stack sx={{ padding: '0px 32px 24px 32px' }}>
          <ApproverReviewerTable
            data={ReviewerApproverList}
            mode={edit ? 'edit' : 'view'}
          />
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
              borderRadius: '8px',
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
              <BtnContained title="Save" onClick={() => navigate(-1)} />
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Stack>
  );
};
