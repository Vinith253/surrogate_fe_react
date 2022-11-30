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
import './UploadCard.scss';

const UploadCard = ({
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
              data.title === 'Upload Card Photo'
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
            // color={progress === 100 ? 'success' : 'secondary'}
            {...props}
            sx={{
              '& .MuiLinearProgress-bar1Determinate': {
                backgroundColor: 'green',
              },
            }}
            className="upload-card-progress"
          />
        </Box>
      </Box>
    );
  }
  const handleProgress = (value: number) => {
    setProgressBar(value);
  };
  const footerStyle = {
    backgroundColor: 'white',
    marginTop: '24px',
    padding: '20px 32px',
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: ' 100%',
    // borderTop: ' 1px solid black',
    boxShadow:
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
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
            style={{
              color: progress > 0 ? ' #82B1DB' : '#0662B7',
              textTransform: 'capitalize',
            }}
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
      {fileName === 'image' && (
        <Box sx={footerStyle}>
          {/* <Box sx={{ position: 'fixed', bottom: 0 }}> */}
          {/* <FooterButton cancel="Cancel" submit="Procees" /> */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '1%' }}>
            <Button variant="outlined" sx={{ textTransform: 'capitalize' }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              // color="secondary"
              // onClick={handleProceed}
              sx={{
                backgroundColor: '#82B1DB',
                textTransform: 'capitalize',
              }}
            >
              {'Proceed'}
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '1%',
              marginTop: '1%',
            }}
          >
            <Button
              variant="text"
              color="secondary"
              // onClick={handleProceed}
              sx={{ fontSize: '12px', textTransform: 'capitalize' }}
            >
              {`Discard Error entries and Continue >`}
            </Button>
          </Box>
          {/* </Box> */}
        </Box>
      )}
    </PageLayout>
  );
};

export default UploadCard;
