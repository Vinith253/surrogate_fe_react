import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';
import './card.scss';
import { Box, Button } from '@mui/material';
import { ReactComponent as RightArrow } from '../../../../assets/icons/rightArrow.svg';
import { ReactComponent as DownArrow } from '../../../../assets/icons/downArrow.svg';
import { useNavigate } from 'react-router-dom';

function DashboardCard(props: {
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
  boxStyles?: any;
  viewAll?: boolean;
  navPath: string;
}) {
  const navigate = useNavigate();

  return (
    <div className="total-value-card">
      <div className="upper-half">
        <div className={props.boxStyles ? props.boxStyles : 'image-icon-box'}>
          <img src={props.image} />
        </div>
        <div className="card-text-area">
          <text className="card-text-heading">{props.title}</text>
          <text className="card-text-value">{props.value}</text>
        </div>
      </div>
      <Box sx={{ height: '50px' }}>
        {(props.more || props.viewAll) && (
          <div className="lower-div">
            <Button
              endIcon={
                props.viewAll ? (
                  <DownArrow style={{ width: '10px', height: '5px' }} />
                ) : (
                  <RightArrow style={{ width: '5px', height: '10px' }} />
                )
              }
              sx={{
                fontSize: '0.8vw',
                color: '#0662B7',
                textTransform: 'none',
              }}
              onClick={() => {
                navigate(props?.navPath);
              }}
            >
              {props.viewAll ? 'View All' : 'More'}
            </Button>
          </div>
        )}
      </Box>
    </div>
  );
}

export default DashboardCard;
