import { Button, IconButton, Stack, Typography } from "@mui/material";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { colors } from "../../../../style/Color";
import { programMmgt, tabBar } from "../../../../utils/Constants";
import { ListView } from "./listComponents/listView";
import CardList from "./listComponents/cardList";
import cardListIcon from "../../../../assets/images/cardListIcon.svg";
import ListIcon from "../../../../assets/images/list_layout.svg";
import resumeIcon from "../../../../assets/images/resume_surrogate_icon.svg";
import editIcon from "../../../../assets/images/edit_scheduled_pause_icon.svg";
import pauseIcon from "../../../../assets/images/pause_surrogate_icon.svg";
export const ProgramManagementScreen = () => {
  const [listView, setListView] = useState(true);

  const [showPauseModal, setShowPauseModal] = useState<boolean>(false);
  const [isPauseModal, setIsPauseModal] = useState<boolean>(false);
  const [showPauseSuccessModal, setShowPauseSuccessModal] =
    useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [showResumeSuccessModal, setShowResumeSuccessModal] =
    useState<boolean>(false);

  return (
    <Stack sx={{ padding: "25px 30px 0 30px" }}>
      <Stack
        sx={{
          borderBottom: `2px solid ${colors.lightGrey}`,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
                color: "#A3A3A5",
                paddingBottom: "20px",
              }}
            >
              {tabBar.TEMPORARILY_PAUSE}
            </Typography>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                padding: "0 10px",
              }}
              onClick={() => {
                setListView(false);
              }}
            >
              <IconButton>
                <img
                  src={cardListIcon}
                  alt="cardIcon"
                  style={{
                    filter:
                      listView === false
                        ? "invert(16%) sepia(97%) saturate(2280%) hue-rotate(207deg) brightness(100%) contrast(91%)"
                        : "",
                  }}
                />
              </IconButton>
            </Stack>
            <Stack
              sx={{
                padding: "0 10px",
              }}
              onClick={() => {
                setListView(true);
              }}
            >
              <IconButton>
                <img
                  src={ListIcon}
                  alt="ListIcon"
                  style={{
                    filter:
                      listView === true
                        ? "invert(15%) sepia(98%) saturate(2693%) hue-rotate(209deg) brightness(97%) contrast(87%)"
                        : "",
                  }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" spacing={3} sx={{ margin: "30px 0px" }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              padding: "3px 8px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => setShowPauseModal(true)}
          >
            <IconButton sx={{ padding: "0", marginRight: "8px" }}>
              <img src={resumeIcon} alt="resumeIcon" />
            </IconButton>
            {programMmgt.RESUME_SURROGATE}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              padding: "3px 8px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ padding: "0", marginRight: "8px" }}>
              <img src={pauseIcon} alt="resumeIcon" />
            </IconButton>
            {programMmgt.PAUSE_SURROGATE}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              padding: "3px 8px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ padding: "0", marginRight: "8px" }}>
              <img src={editIcon} alt="resumeIcon" />
            </IconButton>
            {programMmgt.EDIT_SCHEDULE_PAUSE}
          </Button>
        </Stack>
      </Stack>

      <Stack>{listView ? <ListView /> : <CardList />}</Stack>
    </Stack>
  );
};
