import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  Checkbox,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { colors } from "../../../../../style/Color";
import { checkTagStatus } from "../../../../../utils/tagBasedIndicator/tagStatus";
import { programMmgt } from "../../../../../utils/Constants";

export interface cardDetailsType {
  schema: string;
  status: string;
  lastModified: string;
  lastModifiedDate: string;
  statusActive: string;
  StatusActiveDate: string;
  resumeStatus: string;
  resumeItNow: string;
}

const useStyles = {
  root: {
    boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.12)",
  },
};

function CardList() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {cardDetails.map((data: cardDetailsType) => (
          <Box
            width="31.5%"
            height="300px"
            sx={{
              borderRadius: "4px",
              ...useStyles.root
            }}
          >
            <Card
              sx={{
                height: "300px",
                borderRadius: "4px",
                "&:hover": {
                  outline: `1.5px solid ${colors.blue}`,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: `2px solid ${colors.lightGrey}`,
                    padding: "0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      color="secondary"
                      // sx={{
                      //   "& .MuiSvgIcon-root": {
                      //     fontSize: 28,
                      //   },
                      // }}
                    />
                    <Typography sx={{ letterSpacing: "0.5px" }}>
                      {data.schema}
                    </Typography>
                  </Box>
                  <Box
                    id="more-button"
                    onClick={handleClick}
                    aria-controls={open ? "more-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ padding: "0 8px" }}>
                  <Box sx={{ padding: "15px 0" }}>
                    <Typography
                      sx={{
                        color: checkTagStatus(data.status).color,
                        backgroundColor: checkTagStatus(data.status).bgColor,
                        fontSize: "13px",
                        padding: "1px 8px",
                        borderRadius: "5px",
                        // textAlign: "center",
                        width: "max-content",
                      }}
                    >
                      {data.status}
                    </Typography>
                  </Box>
                  <Box sx={{ padding: "0 0px 10px 0" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#9F9FA0", fontSize: "small" }}
                    >
                      {data.lastModified}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "15px", fontWeight: 500, color: "black" }}
                    >
                      {data.lastModifiedDate}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#9F9FA0", fontSize: "small" }}
                    >
                      {data.statusActive}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "14px", fontWeight: 500, color: "black" }}
                    >
                      {data.StatusActiveDate}
                    </Typography>
                    {data.resumeStatus && (
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "black",
                        }}
                      >
                        {data.resumeStatus}
                      </Typography>
                    )}
                    {data.resumeItNow && (
                      <Typography
                        sx={{
                          padding: "3px 0",
                          fontSize: "13px",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        color="secondary"
                      >
                        {data.resumeItNow}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
        <Menu
          id="more-menu"
          anchorEl={anchorElement}
          open={open}
          MenuListProps={{
            "aria-labelledby": "more-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={handleClose}
            style={{ padding: "10px 20px", textAlign: "left" }}
          >
            {programMmgt.RESUME_SURROGATE}
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{ padding: "10px 20px", textAlign: "left" }}
          >
            {programMmgt.PAUSE_SURROGATE}
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{ padding: "10px 20px", textAlign: "left" }}
          >
            {programMmgt.EDIT_SCHEDULE_PAUSE}
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}

const cardDetails = [
  {
    schema: "Card For Card",
    status: "Active",
    lastModified: "Last Modified",
    lastModifiedDate: "10/June/2022 19:30:12",
    statusActive: "Status",
    StatusActiveDate: "Active since June 20, 2022",
    resumeStatus: "",
    resumeItNow: "",
  },
  {
    schema: "Payroll",
    status: "Paused",
    lastModified: "Last Modified",
    lastModifiedDate: "10/June/2022 19:30:12",
    statusActive: "Status",
    StatusActiveDate: "Active since June 20, 2022",
    resumeStatus: "",
    resumeItNow: "Resume It Now",
  },
  {
    schema: "Card For Card",
    status: "Paused (scheduled)",
    lastModified: "Last Modified",
    lastModifiedDate: "10/June/2022 19:30:12",
    statusActive: "Status",
    StatusActiveDate: "Active since June 20, 2022",
    resumeStatus: "It will resume on June 20, 2022",
    resumeItNow: "Resume It Now",
  },
];

export default CardList;
