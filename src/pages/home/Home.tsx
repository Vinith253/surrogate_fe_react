import { Box, Paper } from '@mui/material';
import Card from '../../components/commonComponent/card/Card';
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
        backgroundColor: 'white',
        margin: ' 2rem',
        borderRadius: '10px',
        display: 'flex',
        // width: '100',
        height: '80vh',
        gap: '3%',
        padding: '5vh 3vw',
      }}
    >
      <Card />
      {/* <Paper elevation={3} sx={{ width: '100%' }}>
        Hello
      </Paper> */}
      <Paper elevation={3} sx={{ width: '100%' }}>
        Heya
      </Paper>
      <Paper elevation={3} sx={{ width: '100%' }}>
        Hey
      </Paper>

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
