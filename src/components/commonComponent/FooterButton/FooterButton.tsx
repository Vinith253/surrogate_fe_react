import { Box, Button } from '@mui/material';
import './style.scss';

export const FooterButton = (props: {
  saveAsDraft?: string;
  cancel?: string;
  submit?: string;
  handleSubmitClick?: any;
  handleCancelClick?: any;
  handleSaveasDraftClick?: any;
}) => {
  return (
    <Box className="boxBtn">
      {props.cancel && (
        <Button
          color="secondary"
          variant="outlined"
          sx={{ textTransform: 'none' }}
          onClick={props.handleCancelClick}
        >
          {props.cancel}
        </Button>
      )}
      {props.saveAsDraft && (
        <Button
          color="secondary"
          variant="outlined"
          style={{ backgroundColor: '#EEF7FF', border: 'none' }}
          sx={{ textTransform: 'none' }}
          onClick={props.handleSaveasDraftClick}
        >
          {props.saveAsDraft}
        </Button>
      )}
      {props.submit && (
        <Button
          color="secondary"
          variant="contained"
          sx={{ textTransform: 'none' }}
          onClick={props.handleSubmitClick}
        >
          {props.submit}
        </Button>
      )}
    </Box>
  );
};
