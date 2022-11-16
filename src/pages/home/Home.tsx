import { Box } from '@mui/material';
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
// import SurrogateSelection from "../../components/commonComponent/CustomModal/SurrogateSelection";

// import PauseModalSucces from "../../components/commonComponent/customModal/PauseModalSuccess";
// import RejectionModal from "../../components/commonComponent/customModal/RejectionModal";
// import ResumeModal from "../../components/commonComponent/customModal/ResumeModal";
// import ResumeModalSuccess from "../../components/commonComponent/customModal/ResumeModalSuccess";
// import SchedulePause from "../../components/commonComponent/customModal/SchedulePause";
// import SchedulePauseSuccess from "../../components/commonComponent/customModal/SchedulePauseSuccess";
// import SurrogateSelection from "../../components/commonComponent/customModal/SurrogateSelection";

export default function Home() {
  return (
    <Box
      sx={{
        padding: '10px',
      }}
    >
      <PauseModal />
      <PauseModalSucces />
      <SchedulePause />
      <SchedulePauseSuccess />
      <ResumeModal />
      <ResumeModalSuccess />
      <SurrogateSelection />
      <RejectionModal />
      <HistoryModal/>
      {/* <HistoryLogCustomModal /> */}
    </Box>
  );
}
