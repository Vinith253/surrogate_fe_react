import { Popover, Typography } from '@mui/material';
import './style.scss';
import { useNavigate } from 'react-router-dom';

function PopoverContainer(props: {
  id: any;
  handleClose: Function;
  openActionModal?: Function;
  anchorEl: any;
  open: boolean;
  options: any;
}) {
  const navigate = useNavigate();

  const callRoutePath = (eachItem: any) => {
    if (eachItem?.routePath !== '') navigate(eachItem?.routePath);
    else if (
      eachItem?.label === 'Activate User' ||
      eachItem?.label === 'Deactivate User'
    )
      props?.openActionModal !== undefined && props?.openActionModal();
  };

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
              callRoutePath(eachItem);
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
