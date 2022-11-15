import React, { HTMLInputTypeAttribute } from 'react';
import { useRef, useState } from 'react';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import './DragDrop.scss';
import { bulkUpload } from '../../../utils/Constants';
import { Box, Button, ButtonProps, styled, Typography } from '@mui/material';
import { toggleFunctionType } from '../../../interface/Types';

const DragDrop = ({ progress, progressValue, buttonText }: any) => {
  const inputRef = useRef<any>();
  // drag state
  const [dragActive, setDragActive] = useState(false);

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log('enter');
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  const handleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log('drop');
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log(e.dataTransfer.files[0], 'e.dataTransfer.files');
      // at least one file has been dropped so do something
      // handleFiles(e.dataTransfer.files);
    }
  };
  // triggers when file is selected with click
  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log('success', e.target.files);
      progress(1);
      // at least one file has been selected so do something
      // handleFiles(e.target.files);
    }
  };
  const onButtonClick = () => {
    inputRef?.current?.click();
  };
  const uploadStyle = {
    '&:hover': 'unset',
    backgroundColor: 'black',
    fontSize: '0.8rem',
  };
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: 'black',
    },
    marginTop: '4%',
    fontSize: '0.2rem',
  }));
  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />

      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        style={{
          backgroundColor: progressValue === 100 ? '#F1F9F3' : '',
        }}
      >
        <Box>
          <Box>
            <InsertDriveFileOutlinedIcon
              sx={{ fontSize: '4rem' }}
              color={progressValue === 100 ? 'success' : 'inherit'}
            />
          </Box>

          <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            {bulkUpload.DRAG_AND_DROP}
          </Typography>
          <Typography sx={{ fontSize: '1' }}>
            {bulkUpload.SUPPORTED_FORMATS}
          </Typography>
          <ColorButton
            variant="contained"
            startIcon={
              <FileUploadOutlinedIcon sx={{ fontSize: '1.5rem !important' }} />
            }
            className="upload-button"
            onClick={onButtonClick}
            sx={uploadStyle}
            disabled={progressValue > 0 ? true : false}
          >
            {buttonText}
          </ColorButton>
        </Box>
      </label>
      {dragActive && (
        <Box
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></Box>
      )}
    </form>
  );
};

export default DragDrop;
