import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { colors } from '../../../../style/Color';
import { programMmgt, tabBar } from '../../../../utils/Constants';
import { ListView } from './listComponents/listView';
import CardList from './listComponents/cardList';
import cardListIcon from '../../../../assets/images/cardListIcon.svg';
import ListIcon from '../../../../assets/images/list_layout.svg';
import resumeIcon from '../../../../assets/images/resume_surrogate_icon.svg';
import editIcon from '../../../../assets/images/edit_scheduled_pause_icon.svg';
import pauseIcon from '../../../../assets/images/pause_surrogate_icon.svg';
import CustomModal from '../../../../components/commonComponent/customModal/CustomModal';

const DummyTableData = [
  {
    surrogateProgramme: 'Card For Card',
    activeSince: '20 June 2022, 11.00',
    lastModify: '20 June 2022, 11.00',
    status: 'Active',
    autoResumeForm: '',
    StatusActiveDate: 'Active since June 20, 2022',
    resumeStatus: '',
    resumeItNow: '',
    id: 1,
  },
  {
    surrogateProgramme: 'Payroll',
    activeSince: '20 June 2022, 11.00',
    lastModify: '20 June 2022, 11.00',
    status: 'Paused',
    autoResumeForm: '20 June 2022, 11.00',
    StatusActiveDate: 'Active since June 20, 2022',
    resumeStatus: '',
    resumeItNow: 'Resume It Now',
    id: 2,
  },
  {
    surrogateProgramme: 'Payroll',
    activeSince: '20 June 2022, 11.00',
    lastModify: '20 June 2022, 11.00',
    status: 'Paused (scheduled)',
    autoResumeForm: '',
    StatusActiveDate: 'Active since June 20, 2022',
    resumeStatus: 'It will resume on June 20, 2022',
    resumeItNow: 'Resume It Now',
    id: 3,
  },
];

export const ProgramManagementScreen = () => {
  const [listView, setListView] = useState(true);
  const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
  const [isPauseModal, setIsPauseModal] = useState<boolean>(false);
  const [showPauseSuccessModal, setShowPauseSuccessModal] =
    useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [showResumeSuccessModal, setShowResumeSuccessModal] =
    useState<boolean>(false);
  const [showScheduledPauseSuccessModal, setShowScheduledPauseSuccessModal] =
    useState<boolean>(false);
  const [pauseMethod, setPauseMethod] = useState('Pause Now');

  const [surrogateData, setSurrogateData] = useState([...DummyTableData]);
  const [btnActive, setBtnActive] = useState(true);
  console.log('pauseMethod------------', pauseMethod);
  // useEffect(() => {
  //   fetchSurrogateData();
  // }, []);

  // const fetchSurrogateData = () => {
  //   secureApi
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       console.log('---- response', response);
  //       setSurrogateData(response?.data || []);
  //     })
  //     .catch((err) => {
  //       console.log('---- err', err);
  //     });
  // };

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
    <Stack
      sx={{
        padding: '25px 30px 50px 30px',
        backgroundColor: colors.white,
        borderRadius: '8px',
      }}
    >
      <Stack
        sx={{
          borderBottom: `2px solid ${colors.lightGrey}`,
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack>
            <Typography variant="subtitle1" sx={{ letterSpacing: 0.5 }}>
              {tabBar.PROGRAMME_MANAGEMENT}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: 0.2,
                color: '#A3A3A5',
                paddingBottom: '20px',
              }}
            >
              {tabBar.TEMPORARILY_PAUSE}
            </Typography>
          </Stack>

          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Stack
              sx={{
                padding: '0 10px',
              }}
              onClick={() => {
                setListView(true);
              }}
            >
              <IconButton>
                <img
                  src={cardListIcon}
                  alt="cardIcon"
                  style={{
                    filter:
                      listView === true
                        ? 'invert(16%) sepia(97%) saturate(2280%) hue-rotate(207deg) brightness(100%) contrast(91%)'
                        : '',
                  }}
                />
              </IconButton>
            </Stack>
            <Stack
              sx={{
                padding: '0 10px',
              }}
              onClick={() => {
                setListView(false);
              }}
            >
              <IconButton>
                <img
                  src={ListIcon}
                  alt="ListIcon"
                  style={{
                    filter:
                      listView === false
                        ? 'invert(15%) sepia(98%) saturate(2693%) hue-rotate(209deg) brightness(97%) contrast(87%)'
                        : '',
                  }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" spacing={3} sx={{ margin: '30px 0px' }}>
          <Button
            variant="contained"
            color="secondary"
            disabled={btnActive}
            sx={{
              padding: '3px 10px',
              fontSize: '1vw',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              textTransform: 'capitalize',
              letterSpacing: '0.0025em',
            }}
            onClick={() => setShowResumeModal(true)}
          >
            <IconButton sx={{ padding: '0', marginRight: '8px' }}>
              <img
                src={resumeIcon}
                alt="resumeIcon"
                style={{
                  filter:
                    btnActive === true
                      ? 'invert(100%) sepia(13%) saturate(7%) hue-rotate(300deg) brightness(89%) contrast(99%)'
                      : 'invert(100%) sepia(0%) saturate(0%) hue-rotate(108deg) brightness(102%) contrast(102%)',
                  opacity: btnActive === true ? '0.3' : '1',
                }}
              />
            </IconButton>
            {programMmgt.RESUME_SURROGATE}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={btnActive}
            sx={{
              padding: '3px 10px',
              fontSize: '1vw',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              textTransform: 'capitalize',
              letterSpacing: '0.0025em',
            }}
            onClick={() => setShowPauseModal(true)}
          >
            <IconButton sx={{ padding: '0', marginRight: '8px' }}>
              <img
                src={pauseIcon}
                alt="resumeIcon"
                style={{
                  filter:
                    btnActive === true
                      ? 'invert(100%) sepia(13%) saturate(7%) hue-rotate(300deg) brightness(89%) contrast(99%)'
                      : 'invert(100%) sepia(0%) saturate(0%) hue-rotate(108deg) brightness(102%) contrast(102%)',
                  opacity: btnActive === true ? '0.3' : '1',
                }}
              />
            </IconButton>
            {programMmgt.PAUSE_SURROGATE}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={btnActive}
            sx={{
              padding: '3px 10px',
              fontSize: '1vw',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              textTransform: 'capitalize',
              letterSpacing: '0.0025em',
            }}
          >
            <IconButton sx={{ padding: '0', marginRight: '8px' }}>
              <img
                src={editIcon}
                alt="resumeIcon"
                style={{
                  filter:
                    btnActive === true
                      ? 'invert(100%) sepia(13%) saturate(7%) hue-rotate(300deg) brightness(89%) contrast(99%)'
                      : 'invert(100%) sepia(0%) saturate(0%) hue-rotate(108deg) brightness(102%) contrast(102%)',
                  opacity: btnActive === true ? '0.3' : '1',
                }}
              />
            </IconButton>
            {programMmgt.EDIT_SCHEDULE_PAUSE}
          </Button>
        </Stack>
      </Stack>
      {showPauseModal && (
        <CustomModal
          openSuccess={showPauseModal}
          handleCloseSuccess={closeModal}
          handleSuccess={successModal}
          title={'Card For Card - Pause'}
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
        />
      )}
      {showPauseSuccessModal && (
        <CustomModal
          openSuccess={showPauseSuccessModal}
          handleCloseSuccess={closeModal}
          successModalTitle={'Card For Card - Pause'}
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
          successModalTitle={'Card For Card - Scheduled Pause'}
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
          title={'AQB - Resume Now'}
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
          successModalTitle={'AQB - Resume Now'}
          successModalMsg={
            'Your action of Resuming - AQB Surrogate has been successfully sent to the reviewer.'
          }
          btn={' Close'}
        />
      )}
      <Stack>
        {listView ? (
          <CardList data={surrogateData} />
        ) : (
          <ListView data={surrogateData} />
        )}
      </Stack>
    </Stack>
  );
};
