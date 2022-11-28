import {
  Box,
  Button,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import DragDrop from '../../../../../components/commonComponent/dragDrop/DragDrop';
import PageLayout from '../../../../../components/layout/pageLayout/pageLayout';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import './UserUploadCard.scss';

const UserUploadCard = ({
  toggle,
  data,
  correction,
  fileName,
  uploadProgressValue,
}: any) => {
  const [progress, setProgress] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      // uploadProgressValue(progress);
      if (progressBar !== 0) {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            toggle(true, fileName);
            if (
              data.title === 'Correction File' ||
              data.title === 'Upload Missing Document(s)'
            ) {
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
  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
    return (
      <Box>
        <Box className="progress-container">
          <Box className="upload-card-progress-text">
            <Typography variant="body2">{`${Math.round(
              props.value
            )}% Completed`}</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            {...props}
            color={progress === 100 ? 'success' : 'secondary'}
            // sx={{
            //   '& .MuiLinearProgress-bar1Determinate': {
            //     backgroundColor: 'green',
            //   },
            // }}
            className="upload-card-progress"
          />
        </Box>
      </Box>
    );
  }

  const handleProgress = (value: number) => {
    setProgressBar(value);
  };
  return (
    <PageLayout>
      <Box className="upload-card-container">
        <Typography variant="h2" className="upload-card-head">
          {data.title}
        </Typography>
        <Typography
          className="upload-card-subhead"
          sx={{
            color: progress > 0 ? '#D3D3D3' : '',
          }}
        >
          {data.para}
        </Typography>
        {fileName === 'xls' && (
          <Button
            variant="text"
            // color={progress > 0 ? ' #82B1DB' : 'secondary'}
            style={{ color: progress > 0 ? ' #82B1DB' : '#0662B7' }}
            disabled={progress > 0 ? true : false}
            startIcon={
              <FileDownloadOutlinedIcon
                sx={{
                  fontSize: '1.5rem !important',
                  color: progress > 0 ? ' #82B1DB' : '#0662B7',
                }}
              />
            }
          >
            {data.downloadSample}
          </Button>
        )}

        <DragDrop
          progress={handleProgress}
          progressValue={progress}
          supportedFiles={data.supportedFormats}
          buttonText={data.upload}
        />
        <LinearProgressWithLabel variant="determinate" value={progress} />
      </Box>
    </PageLayout>
  );
};

export default UserUploadCard;
