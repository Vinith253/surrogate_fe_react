import {
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
  } from "react";
  import "../SalesDashbaordCard/card.scss";
  import { Box, Button } from "@mui/material";
  import { ReactComponent as RightArrow } from "../../../../assets/icons/rightArrow.svg";
  import { useNavigate } from "react-router-dom";
  import redDown from "../../../../assets/icons/red_down.svg";
  import GreenUp from "../../../../assets/icons/green_up.svg";
  
  function LMSDashboardCard(props: {
    title:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
    value:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
    more: any;
    image: any;
    boxStyles?:any;
    viewAll?: boolean;
    navPath: string;
    lastPeriodValue?: number;
    lastYearValue?: number;
  }) {
    const navigate = useNavigate();
  
    return (
      <div className="total-value-card">
        <div className="upper-half">
          <div className={props.boxStyles ? props.boxStyles :"image-icon-box"}>
            <img src={props.image} />
          </div>
          <div className="card-text-area">
            <text className="card-text-heading">{props.title}</text>
            <text className="card-text-value">{props.value}</text>
          </div>
        </div>
        <Box sx={{height:'78px'}}>
        {props?.lastPeriodValue && (
          <div className="middle-div">
            <div className="card-text-area">
            {props.lastPeriodValue != 0 && (
              <text className="card-text-heading">Last Period</text>
            )}
            {props.lastPeriodValue != 0 && (
              <div className="card-value-with-icon">
              <text className="card-text-value">{props.lastPeriodValue}</text>
              <img src={redDown} style={{marginLeft:'5px', marginTop:'4px'}}></img>
              </div>
            )}
          </div>
          <div className="card-text-area">
            {props.lastYearValue != 0 && (
              <text className="card-text-heading">Last Year</text>
            )}
            {props.lastYearValue != 0 && (
              <div className="card-value-with-icon">
              <text className="card-text-value">{props.lastYearValue}</text>
              <img src={GreenUp} style={{marginLeft:'5px',  marginTop:'4px'}}></img>
              </div>
            )}
          </div>
          </div>
        )}
        </Box>
        {props.more && (
          <div className="lower-div">
            <Button
            endIcon={<RightArrow style={{width:'5px', height: '10px'}}/>}
            sx={{ fontSize: "0.8vw",color:'#0662B7',textTransform:'none'}}
            onClick={()=> {
              navigate(props.navPath)
            }}
          >
            More
          </Button>
  
  
          </div>
        )}
      </div>
    );
  }
  
  export default LMSDashboardCard;
  