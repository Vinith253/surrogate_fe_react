import {
  Box,
  Button,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DragDrop from "../../../../../components/commonComponent/dragDrop/DragDrop";
import PageLayout from "../../../../../components/layout/pageLayout/pageLayout";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box>
      <Box sx={{ width: "100%", margin: "0.8rem 0" }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            "& .MuiLinearProgress-bar1Determinate": {
              backgroundColor: "green",
            },
            backgroundColor: "rgb(167 237 194)",
            borderRadius: "10px",
            height: "8px",
          }}
        />
      </Box>
      <Box
        sx={{
          minWidth: 35,
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        <Typography variant="body2">{`${Math.round(
          props.value
        )}% Completed`}</Typography>
      </Box>
    </Box>
  );
}
const UploadCard = ({ toggle, data, correction }: any) => {
  const [progress, setProgress] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (progressBar !== 0) {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            toggle(true);
            if (data.title === "Correction File") {
              correction();
            }
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      } else {
        return 0;
      }
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [progressBar]);

  const handleProgress = (value: number) => {
    setProgressBar(value);
  };

  return (
    <PageLayout>
      <Box sx={{ backgroundColor: "white" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            margin: "1% 0",
            fontWeight: "bold",
            color: progress > 0 ? "#D3D3D3" : "",
          }}
        >
          {data.para}
        </Typography>
        <Button
          variant="text"
          color="secondary"
          disabled={progress > 0 ? true : false}
          startIcon={
            <FileDownloadOutlinedIcon
              color={progress > 0 ? "disabled" : "secondary"}
              sx={{ fontSize: "1.5rem !important" }}
            />
          }
        >
          {data.downloadSample}
        </Button>

        <DragDrop
          progress={handleProgress}
          progressValue={progress}
          buttonText={data.upload}
        />
        <LinearProgressWithLabel variant="determinate" value={progress} />
      </Box>
    </PageLayout>
  );
};

export default UploadCard;
