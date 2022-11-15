import "./filter.scss";
import { Button, Typography } from "@mui/material";
import DownArrow from "@mui/icons-material/ArrowDropDownRounded";
import DeleteIcon from "@mui/icons-material/Restore";

function FilterButton() {
  return (
    <div className="filter-header">
      <div className="filter-data">
        <Typography
          sx={{
            fontSize: "16px",
            marginRight: "20px",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Overview
        </Typography>
        <Button
          size="small"
          endIcon={<DownArrow />}
          sx={{
            fontSize: "12px",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          Current Day
        </Button>
        <Button
          size="small"
          endIcon={<DownArrow />}
          sx={{
            fontSize: "12px",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          All Policies
        </Button>
        <Button
          size="small"
          endIcon={<DownArrow />}
          sx={{
            fontSize: "12px",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          All Surrogates
        </Button>
        <Button
          size="small"
          endIcon={<DownArrow />}
          sx={{
            fontSize: "12px",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          {" "}
          More Filters
        </Button>
      </div>
      <div className="reset-data">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{ fontSize: "12px", marginRight: "10px" }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default FilterButton;
