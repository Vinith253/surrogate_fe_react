import { Box, Button } from '@mui/material';
import './style.scss';

export const FooterButton = (props: { cancel?: string; submit?: string, handleSubmitClick?: any, handleCancelClick?: any }) => {
  return (
      <Box className="boxBtn">
         {props.cancel && <Button
          color="secondary"
          variant="outlined"
          sx={{ textTransform: 'none' }}
          onClick={props.handleCancelClick}
        >
          {props.cancel}
        </Button>}
        {props.submit && <Button
          color="secondary"
          variant="contained"
          sx={{ textTransform: 'none' }}
          onClick={props.handleSubmitClick}
        >
          {props.submit}
        </Button> }
      </Box>
  );
};
