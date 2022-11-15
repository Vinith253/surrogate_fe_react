import React, { useState } from "react";

import { Button } from "@mui/material";
import CustomModal from "./CustomModal";

function RejectionModal() {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {" "}
        Rejection Modal
      </Button>
      <CustomModal
        openSuccess={openSuccess}
        handleCloseSuccess={handleCloseSuccess}
        btn={" Close"}
        rejectedModaltitle={"Rejected"}
        rejectedModalMsg={
          "Request on Card For Card - Scheduled Pause is Rejected"
        }
      />
    </div>
  );
}

export default RejectionModal;
