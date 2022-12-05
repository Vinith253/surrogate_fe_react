import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Box,
  Checkbox,
  IconButton,
  MenuItem,
  Menu,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { colors } from '../../../../../style/Color';
import { programMmgt } from '../../../../../utils/constants/Constants';
import { ListTagStatus } from '../../../../../utils/tagBasedIndicator/listTagStatus';
import CustomModal from '../../../../../components/commonComponent/customModal/CustomModal';

export interface cardDetailsType {
  surrogateProgramme: string;
  activeSince: string;
  lastModify: string;
  status: string;
  autoResumeForm: string;
  StatusActiveDate?: string;
  resumeStatus?: string;
  resumeItNow?: string;
}
export interface cardData {
  data: cardDetailsType[];
}

const useStyles = {
  root: {
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.12)',
  },
};

function CardList({ data }: cardData) {
  console.log('data----', data);

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
  // const [isPauseModal, setIsPauseModal] = useState<boolean>(false);
  const [showPauseSuccessModal, setShowPauseSuccessModal] =
    useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [showResumeSuccessModal, setShowResumeSuccessModal] =
    useState<boolean>(false);
  const [showScheduledPauseSuccessModal, setShowScheduledPauseSuccessModal] =
    useState<boolean>(false);
  const [pauseMethod, setPauseMethod] = useState('Pause Now');
  const [resumePopUpTitle, setResumePopUpTitle] = useState('');
  const [pausePopUpTitle, setPausePopUpTitle] = useState('');
  const [editSchedulePause, setEditSchedulePause] = useState(false);

  const open = Boolean(anchorElement);
  const handleClick = (
    event: React.MouseEvent<HTMLTableCellElement>,
    value: string
  ) => {
    setAnchorElement(event.currentTarget);
    setResumePopUpTitle(value);
    setPausePopUpTitle(value);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  const closeModal = () => {
    setShowPauseModal(false);
    setShowPauseSuccessModal(false);
    setShowScheduledPauseSuccessModal(false);
    setShowResumeModal(false);
    setShowResumeSuccessModal(false);
  };

  const NORMAL_PAUSE = 'Pause Now';
  const SCHEDULED_PAUSE = 'Schedule Pause';

  const pauseMethodChange = (value: any) => {
    setPauseMethod(value);
  };

  const successModal = () => {
    if (pauseMethod === NORMAL_PAUSE) {
      setShowPauseModal(false);
      setShowPauseSuccessModal(true);
      console.log('success');
    }
    if (pauseMethod === SCHEDULED_PAUSE) {
      setShowPauseModal(false);
      setShowScheduledPauseSuccessModal(true);
      console.log('fail');
    }
  };

  const resumeSuccessModal = () => {
    setShowResumeSuccessModal(true);
    setShowResumeModal(false);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {data.map((dataItem: any) => (
          <Box
            width="31.5%"
            height="300px"
            sx={{
              borderRadius: '12px',
              ...useStyles.root,
            }}
          >
            <Card
              sx={{
                height: '300px',
                borderRadius: '12px',
                '&:hover': {
                  outline: `1.5px solid ${colors.blue}`,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: `2px solid ${colors.lightGrey}`,
                    paddingBottom: '5px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox color="secondary" size="medium" />
                    <Typography
                      sx={{
                        letterSpacing: '0.0025em',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '16px',
                      }}
                    >
                      {dataItem.surrogateProgramme}
                    </Typography>
                  </Box>
                  <Box
                    id="more-button"
                    onClick={(e: any) =>
                      handleClick(e, dataItem.surrogateProgramme)
                    }
                    aria-controls={open ? 'more-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ padding: '0 8px' }}>
                  <Box sx={{ padding: '15px 0' }}>
                    <Typography
                      sx={{
                        color: ListTagStatus(dataItem.status).color,
                        backgroundColor: ListTagStatus(dataItem.status).bgColor,
                        fontSize: '12px',
                        fontWeight: 400,
                        padding: '1px 9px',
                        borderRadius: '4px',
                        // textAlign: "center",
                        width: 'max-content',
                      }}
                    >
                      {dataItem.status}
                    </Typography>
                  </Box>
                  <Box sx={{ padding: '0 0px 10px 0' }}>
                    <Typography
                      sx={{
                        color: '#AFAEAF',
                        fontSize: '12px',
                        fontWeight: 500,
                        paddingBottom: '3px',
                      }}
                    >
                      Last Modified
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#151515',
                        paddingBottom: '3px',
                      }}
                    >
                      {dataItem.lastModify}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#AFAEAF',
                        fontSize: '12px',
                        fontWeight: 500,
                        paddingBottom: '2px',
                      }}
                    >
                      Status
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#151515',
                        paddingBottom: '1px',
                      }}
                    >
                      {dataItem.StatusActiveDate}
                    </Typography>
                    {dataItem.resumeStatus && (
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#151515',
                          paddingBottom: '1px',
                        }}
                      >
                        {dataItem.resumeStatus}
                      </Typography>
                    )}
                    {dataItem.resumeItNow && (
                      <Typography
                        sx={{
                          padding: '3px 0',
                          fontSize: '14px',
                          fontWeight: 500,
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          color: '#0662B7',
                          letterSpacing: '0.0125em',
                        }}
                        // color="secondary"
                      >
                        {dataItem.resumeItNow}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
        <Menu
          id="more-menu"
          anchorEl={anchorElement}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'more-button',
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              setShowResumeModal(true);
            }}
            style={{ padding: '10px 20px', textAlign: 'left' }}
          >
            {programMmgt.RESUME_SURROGATE}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setShowPauseModal(true);
            }}
            style={{ padding: '10px 20px', textAlign: 'left' }}
          >
            {programMmgt.PAUSE_SURROGATE}
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{ padding: '10px 20px', textAlign: 'left' }}
          >
            {programMmgt.EDIT_SCHEDULE_PAUSE}
          </MenuItem>
        </Menu>
        {showPauseModal && (
          <CustomModal
            openSuccess={showPauseModal}
            handleCloseSuccess={closeModal}
            handleSuccess={successModal}
            title={`${pausePopUpTitle}- Pause`}
            pause_content={'You can pause it or perform a scheduled pause.'}
            scheduledPause_content={
              'Please choose a date range to perform a scheduled pause.'
            }
            textarea_title={'Add Remarks'}
            radioValuOne={NORMAL_PAUSE}
            radioValuTwo={SCHEDULED_PAUSE}
            dateRange_title={'Enter Date range'}
            maxLength={'Maximum of 500 words'}
            pauseMethodChecking={(arg1: string) => pauseMethodChange(arg1)}
            close={'Close'}
            submit={'Submit'}
            datepickerLabelStart={'Start Date and time'}
            datepickerLabelEnd={'End Date and time'}
            pauseStatusKey={'Pause Now'}
          />
        )}
        {showPauseSuccessModal && (
          <CustomModal
            openSuccess={showPauseSuccessModal}
            handleCloseSuccess={closeModal}
            successModalTitle={`${pausePopUpTitle} - Pause`}
            successModalMsg={
              ' Your action of pausing - Card For Card Surrogate has been successully sent to the reviewer'
            }
            btn={' Close'}
          />
        )}
        {showScheduledPauseSuccessModal && (
          <CustomModal
            openSuccess={showScheduledPauseSuccessModal}
            handleCloseSuccess={closeModal}
            successModalTitle={`${pausePopUpTitle} - Scheduled Pause`}
            successModalMsg={
              'Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer'
            }
            btn={' Close'}
          />
        )}
        {showResumeModal && (
          <CustomModal
            openSuccess={showResumeModal}
            handleCloseSuccess={closeModal}
            title={`${resumePopUpTitle} - Resume Now`}
            handleSuccess={resumeSuccessModal}
            pause_content={
              'You will be able to resume your paused surrogate here.'
            }
            textarea_title={'Add Remarks'}
            dateRange_title={'Enter Date range'}
            maxLength={'Maximum of 500 words'}
            close={'Close'}
            submit={'Submit'}
          />
        )}
        {showResumeSuccessModal && (
          <CustomModal
            openSuccess={showResumeSuccessModal}
            handleCloseSuccess={closeModal}
            successModalTitle={`${resumePopUpTitle} - Resume Now`}
            successModalMsg={
              'Your action of Resuming - AQB Surrogate has been successfully sent to the reviewer.'
            }
            btn={' Close'}
          />
        )}
      </Box>
    </>
  );
}

export default CardList;
