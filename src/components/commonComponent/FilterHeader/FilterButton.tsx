import "./filter.scss";
import { Button, Typography } from "@mui/material";
import { ReactComponent as Reset } from "../../../assets/icons/reset.svg";

function FilterButton(props: any) {
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
          {props.filterHeaderData.title}
        </Typography>
        {props?.filterHeaderData?.details?.map((value:any) => (
               <Button
               endIcon={<value.image />}
               sx={{
                 fontSize: "0.9vw",
                 marginRight: "20px",
                 fontWeight: "600",
                 color:'#0662B7',
                 textTransform:'none'
               }}
             >
               {value.label}
             </Button>
            ))}
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
