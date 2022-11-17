import { Box, Paper } from '@mui/material';
import Card from '../../components/commonComponent/card/Card';
import credit_rule from '../../assets/icons/credit_rule.svg';
import card_for_approval from '../../assets/icons/card_for_approval.svg';
import dsa_onboarding from '../../assets/icons/dsa_onboarding.svg';
import user_onboarding from '../../assets/icons/user_onboarding.svg';
import sales_report from '../../assets/icons/sales_report.svg';
import customer_report from '../../assets/icons/customer_report.svg';
import performance_report from '../../assets/icons/performance_report.svg';
import lms from '../../assets/icons/lms.svg';
import frequentActivity from '../../assets/images/frequentActivity.svg';
import HistoryLogCustomModal from '../../components/commonComponent/customModal/HistoryLogCustomModal';
import HistoryModal from '../../components/commonComponent/customModal/HistoryLogModal';
import PauseModal from '../../components/commonComponent/customModal/PauseModal';
import PauseModalSucces from '../../components/commonComponent/customModal/PauseModalSuccess';
import RejectionModal from '../../components/commonComponent/customModal/RejectionModal';
import ResumeModal from '../../components/commonComponent/customModal/ResumeModal';
import ResumeModalSuccess from '../../components/commonComponent/customModal/ResumeModalSuccess';
import SchedulePause from '../../components/commonComponent/customModal/SchedulePause';
import SchedulePauseSuccess from '../../components/commonComponent/customModal/SchedulePauseSuccess';
import SurrogateSelection from '../../components/commonComponent/customModal/SurrogateSelection';
import PageLayout from '../../components/layout/pageLayout/pageLayout';
// import AccessLibraryModal from '../../components/commonComponent/customModal/AccessLibraryModal';
// import SurrogateSelection from "../../components/commonComponent/CustomModal/SurrogateSelection";

// import PauseModalSucces from "../../components/commonComponent/customModal/PauseModalSuccess";
// import RejectionModal from "../../components/commonComponent/customModal/RejectionModal";
// import ResumeModal from "../../components/commonComponent/customModal/ResumeModal";
// import ResumeModalSuccess from "../../components/commonComponent/customModal/ResumeModalSuccess";
// import SchedulePause from "../../components/commonComponent/customModal/SchedulePause";
// import SchedulePauseSuccess from "../../components/commonComponent/customModal/SchedulePauseSuccess";
// import SurrogateSelection from "../../components/commonComponent/customModal/SurrogateSelection";

export default function Home() {
  const pendingActionsData = {
    title: 'Pending Actions',
    clipText: 'Pending',
    clipNo: 2,
    data: [
      {
        image: credit_rule,
        text_one: 'New Credit Rule Review',
        text_two: 'Received: 10/June/2022 19:30:12',
        text_three: '',
      },
      {
        image: card_for_approval,
        text_one: 'New Card For Approval',
        text_two: 'Received: 10/June/2022 19:30:12',
        text_three: '',
      },
    ],
  };
  const savedItemsData = {
    title: 'Saved Items',
    clipText: 'Saved',
    clipNo: 2,
    data: [
      {
        image: dsa_onboarding,
        text_one: 'DSA Onboarding',
        text_two: 'Saved On: 10/June/2022 19:30:12',
        text_three: 'ID No. 12345678',
      },
      {
        image: user_onboarding,
        text_one: 'User Onboarding',
        text_two: 'Saved On: 10/June/2022 19:30:12',
        text_three: 'ID No. 12345678',
      },
    ],
  };
  const frequentActivitiesData = {
    title: 'Frequent Activities',
    clipText: '',
    clipNo: '',
    mainImage: frequentActivity,
    data: [
      {
        image: sales_report,
        mainContent: 'Sales Report',
      },
      {
        image: customer_report,
        mainContent: 'Customer Report',
      },
      {
        image: performance_report,
        mainContent: 'Performance Report',
      },
      {
        image: lms,
        mainContent: 'LMS',
      },
    ],
  };
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        margin: ' 2rem',
        borderRadius: '10px',
        display: 'flex',
        // width: '100',
        // height: '80vh',
        gap: '3%',
        padding: '5vh 3vw',
      }}
    >
      {/* <AccessLibraryModal /> */}
      <Card content={pendingActionsData} />
      <Card content={savedItemsData} />
      <Card content={frequentActivitiesData} />

      {/* Modals*/}

      {/* <PauseModal />
      <PauseModalSucces />
      <SchedulePause />
      <SchedulePauseSuccess />
      <ResumeModal />
      <ResumeModalSuccess />
      <SurrogateSelection />
      <RejectionModal />
      <HistoryModal/> */}
      {/* <HistoryLogCustomModal /> */}
    </Box>
  );
}
