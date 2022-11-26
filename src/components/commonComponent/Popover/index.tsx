import { Popover, Typography } from '@mui/material';
import './style.scss';
import { useNavigate } from 'react-router-dom';

function PopoverContainer(props: {
  id: any;
  handleClose: Function;
  anchorEl: any;
  open: boolean;
  options: any;
}) {
  const navigate = useNavigate();
  return (
    <Popover
      className="popover-container"
      id={props.id}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={() => props.handleClose()}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {props?.options?.map((eachItem: any, index: number) => {
        return (
          <Typography
            sx={{ p: 2 }}
            key={index}
            onClick={() => {
              eachItem?.routePath && navigate(eachItem?.routePath);
            }}
          >
            {eachItem?.label}
          </Typography>
        );
      })}
    </Popover>
  );
}

export default PopoverContainer;
