import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BulkList from "../bulkUpload/bulkList/BulkList";
import UploadCard from "../bulkUpload/uploadCard/UploadCard";
import { bulkUpload } from "../../../../utils/Constants";
import { useNavigate } from "react-router-dom";

const BulkUpload = () => {
  const navigate = useNavigate();
  const [openUpload, setOpenUpload] = useState(true);
  const [openList, setOpenList] = useState(false);
  const handleToggle = (value: boolean) => {
    setOpenList(value);
    setOpenUpload(!value);
  };
  const uploadData = {
    title: bulkUpload.UPLOAD_CARD_DETAILS,
    para: bulkUpload.DOWNLOAD_SAMPLE_CSV_XLS,
    downloadSample: bulkUpload.DOWNLOAD_SAMPLE,
    upload: bulkUpload.UPLOAD_FILE,
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#E3E3E3" }}>
      <Box
        sx={{
          width: "100%",
          height: 80,
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <ArrowBackIcon
            color="secondary"
            sx={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <Box sx={{ paddingLeft: "10px" }}>
            <Typography variant="h1" sx={{ fontSize: "1.2rem" }}>
              {bulkUpload.BULK_UPLOAD_HEAD}
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: "1rem", color: "grey", margin: "5px 0" }}
            >
              {bulkUpload.BULK_UPLOAD_SUBHEAD}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: "white", margin: " 2rem", borderRadius: "10px" }}
      >
        {openUpload && <UploadCard toggle={handleToggle} data={uploadData} />}
        {openList && <BulkList toggle={handleToggle} />}
      </Box>
    </Box>
  );
};

export default BulkUpload;
