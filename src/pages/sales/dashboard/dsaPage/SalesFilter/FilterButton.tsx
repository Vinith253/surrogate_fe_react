import "./filter.scss";
import { Button, Typography } from "@mui/material";
import { ReactComponent as DownArrow } from "../../../../../assets/icons/downArrow.svg";
import { ReactComponent as Reset } from "../../../../../assets/icons/reset.svg";
import { ReactComponent as MoreFilter } from "../../../../../assets/icons/moreFilter.svg";

function FilterButton() {
  return (
    <div className="filter-header">
      <div className="filter-data">
        <Typography
          sx={{
            fontSize: "1.1vw",
            marginRight: "24px",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Overview
        </Typography>
        <Button
          endIcon={<DownArrow />}
          sx={{
            fontSize: "0.9vw",
            marginRight: "20px",
            fontWeight: "600",
            color:'#0662B7',
            textTransform:'none'
          }}
        >
          Current Day
        </Button>
        <Button
          endIcon={<DownArrow />}
          sx={{
            fontSize: "0.9vw",
            marginRight: "20px",
            fontWeight: "600",
            color:'#0662B7',
            textTransform:'none'
          }}
        >
          All Policies
        </Button>
        <Button
          endIcon={<DownArrow />}
          sx={{
            fontSize: "0.9vw",
            marginRight: "20px",
            fontWeight: "600",
            color:'#0662B7',
            textTransform:'none'
          }}
        >
          All Surrogates
        </Button>
        <Button
          endIcon={<MoreFilter />}
          sx={{
            fontSize: "0.9vw",
            marginRight: "20px",
            fontWeight: "600",
            color:'#0662B7',
            textTransform:'none'
          }}
        >
          {" "}
          More Filters
        </Button>
      </div>
      <div className="reset-data">
        <Button
          startIcon={<Reset />}
          sx={{ fontSize: "0.9vw", marginRight: "10px",color:'#0662B7', backgroundColor:'#EEF7FF',textTransform:'none'        }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default FilterButton;
