import { Button, Box, IconButton, Stack } from '@mui/material';
import './style.scss';

function ButtonWithIcons(props: {
  data: { label: string; icon: any; isDisabled: boolean };
  onClick: Function;
}) {
  return (
    <Stack className="btn-with-icon-container">
      <Button
        variant="contained"
        disabled={props?.data?.isDisabled}
        className={props?.data?.isDisabled ? 'disabled' : 'enabled'}
        onClick={() => props.onClick()}
      >
        <IconButton sx={{ padding: '0', marginRight: '8px' }}>
          <img src={props?.data?.icon} alt="icon" />
        </IconButton>
        {props?.data?.label ?? '--'}
      </Button>
    </Stack>
  );
}

export default ButtonWithIcons;
