import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Box, Stack, InputBase, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ScreenHeader } from '../../../components/commonComponent/ScreenHeader/ScreenHeader';
import SearchIcon from '@mui/icons-material/Search';
import HeaderWithInfo from '../../../components/commonComponent/HeaderWithInfo';
import { product_label, LMSListData } from './lmsRule.const';
import CustomIconButton from '../../../components/commonComponent/CustomIconButton';
import GroupButton from '../../../components/commonComponent/GroupButton/GroupButton';
import CustomModal from '../../../components/commonComponent/customModal/CustomModal';
import deActiveIcon from '../../../assets/icons/DeActive.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import ListLMSTable from '../../../components/commonComponent/listLmstable/listlmsTable';
import Popover from '../../../components/commonComponent/Popover';
import './style.scss';

function LMSRuleTab() {
  const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
  const [showPauseSuccessModal, setShowPauseSuccessModal] =
    useState<boolean>(false);
  const [showScheduledPauseSuccessModal, setShowScheduledPauseSuccessModal] =
    useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [showResumeSuccessModal, setShowResumeSuccessModal] =
    useState<boolean>(false);
  const [editSchedulePause, setEditSchedulePause] = useState(false);
  const [successEditSchedulePause, setSuccessEditSchedulePause] =
    useState(false);
  const [pauseMethod, setPauseMethod] = useState('Pause Now');
  const [isAddRulePopoverOpen, setIsAddRulePopoverOpen] =
    React.useState<HTMLButtonElement | null>(null);
  const [isDuplicateRule, setIsDuplicateRule] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const openAddRulePopover = Boolean(isAddRulePopoverOpen);
  const addNewRuleId = openAddRulePopover ? 'simple-popover' : undefined;

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const navigate = useNavigate();

  const userListMoreMenu = [
    { label: 'View Rule', routePath: '/lms/lmsRule/viewRule' },
    { label: 'Edit Rule', routePath: '/lms/lmsRule/editRule' },
  ];
  const column1: any = [
    {
      title: '',
      dataIndex: 'id',
      key: 'checkBox',
      width: '70px',
      headerRender: () => {
        return <Checkbox />;
      },
      render: (_: string, row: any, index: number) => {
        return <Checkbox />;
      },
    },
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      width: '70px',
      render: (text: string) => {
        return <Stack>{text}</Stack>;
      },
    },
    {
      title: 'Rule Name',
      dataIndex: 'rulename',
      key: 'rulename',
    },
    {
      title: 'Starts at',
      dataIndex: 'startsAt',
      key: 'startsAt',
    },
    { title: 'Ended at', dataIndex: 'endedAt', key: 'endedAt' },
    { title: 'Initiated By', dataIndex: 'initiatedBy', key: 'initiatedBy' },
    { title: 'Re-targeted', dataIndex: 'reTargeted', key: 'reTargeted' },
    { title: 'Initiated', dataIndex: 'initiated', key: 'initiated' },
    { title: 'Failed', dataIndex: 'failed', key: 'failed' },
    { title: 'Again Dropped', dataIndex: 'againDropped', key: 'againDropped' },
    {
      title: 'Again Rejected',
      dataIndex: 'againRejected',
      key: 'againRejected',
    },
    // {
    //   title: 'Approved',
    //   dataIndex: 'approved',
    //   key: 'approved',
    // },
  ];

  const column2: any = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'more',
      key: 'more',
      render: (text: string) => {
        return (
          <Stack className="more-btn">
            <MoreVertIcon
              onClick={(event: any) => {
                handleClick(event);
              }}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
              options={userListMoreMenu}
              // openActionModal={() => openActionModal(row)}
            />
          </Stack>
        );
      },
    },
  ];

  const customIconBtns = [
    { label: 'Resume Rule', icon: deActiveIcon, isDisabled: false },
    {
      label: 'Pause Rule',
      icon: deActiveIcon,
      isDisabled: false,
    },
    {
      label: 'Edit Scheduled Pause',
      icon: deActiveIcon,
      isDisabled: false,
    },
  ];

  const createRuleMenu = [
    {
      label: 'Create New LMS Rule',
      routePath: '/lms/lmsRule/addNewRule',
    },
    {
      label: 'Duplicate LMS Rule',
      routePath: '',
    },
  ];

  const existingLMSRuleItem = [
    'Main Config_R_C4C_Incomplete',
    'Main config_D_FBI',
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const NORMAL_PAUSE = 'Pause Now';
  const SCHEDULED_PAUSE = 'Schedule Pause';

  const handleOpenAddRulePopover = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsAddRulePopoverOpen(event.currentTarget);
  };

  const closeAddRulePopover = () => {
    setIsAddRulePopoverOpen(null);
  };

  const onClickButton = (eachBtn: any) => {
    if (eachBtn?.label === 'Resume Rule') {
      setShowResumeModal(true);
    } else if (eachBtn?.label === 'Pause Rule') {
      setShowPauseModal(true);
    } else if (eachBtn?.label === 'Edit Scheduled Pause') {
      setEditSchedulePause(true);
    }
  };

  const openActionModal = () => {
    setIsDuplicateRule(true);
  };

  const toggleOptions = [
    { title: 'All' },
    { title: 'Active' },
    { title: 'Saved' },
    { title: 'Closed' },
  ];

  const resumeSuccessModal = () => {
    setShowResumeSuccessModal(true);
    setShowResumeModal(false);
  };

  const successModal = () => {
    if (pauseMethod === NORMAL_PAUSE) {
      setShowPauseModal(false);
      setShowPauseSuccessModal(true);
    }
    if (pauseMethod === SCHEDULED_PAUSE) {
      setShowPauseModal(false);
      setShowScheduledPauseSuccessModal(true);
      setEditSchedulePause(false);
    }
  };

  const pauseMethodChange = (value: any) => {
    setPauseMethod(value);
  };

  const reRouteToCreateRule = () => {
    setIsDuplicateRule(false);
    navigate('/lms/lmsRule/addNewRule');
  };

  return (
    <Stack>
      <Box className="lms-header-container">
        <ScreenHeader
          title="LMS Rule"
          info="From here you can create access presets to assign with users in Users Creation."
          showBackButton={false}
        />

        <Button
          sx={{ textTransform: 'capitalize' }}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          id="basic-button"
          onClick={handleOpenAddRulePopover}
        >
          Create New
        </Button>
        {openAddRulePopover && (
          <Popover
            openActionModal={openActionModal}
            id={addNewRuleId}
            open={openAddRulePopover}
            anchorEl={isAddRulePopoverOpen}
            handleClose={closeAddRulePopover}
            options={createRuleMenu}
          />
        )}
      </Box>
      <Stack className="lms-container">
        <HeaderWithInfo
          header="Branch Details"
          isInfoEnabled={false}
          info=""
          isDownloadEnabled={true}
        />
        <Box style={{ marginTop: '20px', display: 'flex' }}>
          {customIconBtns?.map((eachBtn: any) => {
            return (
              <CustomIconButton
                data={eachBtn}
                onClick={() => onClickButton(eachBtn)}
              />
            );
          })}
        </Box>
        <ListLMSTable
          data={LMSListData}
          listColumn={column1}
          statusColumn={column2}
          flag="lms-rule"
          label={product_label}
          toggleOptions={toggleOptions}
        />
      </Stack>
      {isDuplicateRule && (
        <CustomModal
          openSuccess={isDuplicateRule}
          handleCloseSuccess={reRouteToCreateRule}
          title={'Duplicate LMS Rule'}
          duplicate_role_content={'Select the LMS Rule'}
          duplicateRoleCloseBtn={' Close'}
          existingRoleItem={existingLMSRuleItem}
          duplicate_modal_label={'Choose LMS rule for duplication'}
          btn={'Next'}
        />
      )}
      {showPauseModal && (
        <CustomModal
          openSuccess={showPauseModal}
          handleCloseSuccess={() => setShowPauseModal(false)}
          handleSuccess={successModal}
          title={'Main Config_R_CIBIL - Pause Rule'}
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
          handleCloseSuccess={() => setShowPauseSuccessModal(false)}
          successModalTitle={'Main Config_R_CIBIL - Pause Rule'}
          successModalMsg={
            'Your action of pausing - Main Config_R_CIBIL has been successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      {showScheduledPauseSuccessModal && (
        <CustomModal
          openSuccess={showScheduledPauseSuccessModal}
          handleCloseSuccess={() => {
            setShowScheduledPauseSuccessModal(false);
          }}
          successModalTitle={'Main Config_R_CIBIL - Scheduled Pause'}
          successModalMsg={
            'Your action of pausing - Main Config_R_CIBIL has been successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      {showResumeModal && (
        <CustomModal
          openSuccess={showResumeModal}
          handleCloseSuccess={() => setShowResumeModal(false)}
          title={'Main Config_R_CIBIL - Resume Now'}
          handleSuccess={resumeSuccessModal}
          pause_content={'You will be able to resume your paused rule here.'}
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
          handleCloseSuccess={() => setShowResumeSuccessModal(false)}
          successModalTitle={'Main Config_R_CIBIL - Resume Now'}
          successModalMsg={
            'Your action of Resuming - Main Config_R_CIBIL has been successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      {editSchedulePause && (
        <CustomModal
          openSuccess={editSchedulePause}
          handleCloseSuccess={() => setEditSchedulePause(false)}
          handleSuccess={successModal}
          title={'Deactivate '}
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
          pauseStatusKey={'Schedule Pause'}
        />
      )}
      {successEditSchedulePause && (
        <CustomModal
          openSuccess={successEditSchedulePause}
          handleCloseSuccess={() => setSuccessEditSchedulePause(false)}
          successModalTitle={`Deactivated- Scheduled Pause`}
          successModalMsg={
            'Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer'
          }
          btn={' Close'}
        />
      )}
    </Stack>
  );
}

export default LMSRuleTab;
