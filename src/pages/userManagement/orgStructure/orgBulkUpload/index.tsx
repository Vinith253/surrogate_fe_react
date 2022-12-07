import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { bulkUpload } from '../../../../utils/constants/Constants';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import OrgUploadCard from './orgUploadCard/OrgUploadCard';
import OrgBulkList from './orgBulkList/OrgBulkList';

const OrgBulkUpload = ({ flag }: any) => {
  const navigate = useNavigate();
  const [openUpload, setOpenUpload] = useState(true);
  const [openList, setOpenList] = useState(false);
  const [file, setFile] = useState('xls');
  const handleToggle = (value: boolean, check?: any) => {
    setOpenList(value);
    setOpenUpload(!value);
    setFile(check);
  };
  const uploadData = {
    title: bulkUpload.UPLOAD_DOCUMENTS,
    para: bulkUpload.DOWNLOAD_SAMPLE_CSV_XLS,
    downloadSample: bulkUpload.DOWNLOAD_SAMPLE,
    supportedFormats: bulkUpload.SUPPORTED_FORMATS,
    upload: bulkUpload.UPLOAD_FILE,
  };
  const uploadCard = {
    title: bulkUpload.UPLOAD_SUPPORT_DOCUMENTS,
    para: '',
    supportedFormats: bulkUpload.SUPPORTED_FORMATS_JPG,
    upload: bulkUpload.UPLOAD_DOCUMENT,
  };
  return (
    <Box className="bulk-upload-container">
      <Box className="bulk-upload-header">
        <Box sx={{ display: 'flex' }}>
          <ArrowBackIcon
            color="secondary"
            className="arrowBtn"
            onClick={() => navigate(-1)}
          />
          <Box sx={{ paddingLeft: '10px' }}>
            <Typography variant="h1" className="bulk-upload-head">
              {bulkUpload.BULK_UPLOAD_ORG_HEAD}
            </Typography>
            <Typography className="bulk-upload-subhead" variant="h2">
              {bulkUpload.BULK_UPLOAD_ORG_SUBHEAD}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="upload-card-container">
        {openUpload && (
          <OrgUploadCard
            toggle={(arg1: boolean, arg2: string) => handleToggle(arg1, arg2)}
            data={file === 'xls' ? uploadData : uploadCard}
            fileName={file}
          />
        )}
        {openList && (
          <OrgBulkList
            toggle={(arg1: boolean, arg2: string) => handleToggle(arg1, arg2)}
            fileCheck={file}
          />
        )}
      </Box>
    </Box>
  );
};

export default OrgBulkUpload;
