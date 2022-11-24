import {
  FormGroup,
  AccordionSummary,
  Grid,
  Box,
  FormControlLabel,
  Typography,
  Checkbox,
  AccordionDetails,
  Accordion,
  styled,
} from '@mui/material';
import { moduleControlData } from '../../../pages/userManagement/roleCreation/createRole/createrole.const';
import '../../../pages/userManagement/roleCreation/createRole/createRole.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = styled(Accordion)(({ theme }) => {
  return {
    boxShadow: 'none', // this styles directly apply to accordion
    border: 'none',
    padding: '0',
    margin: '0',
    '.MuiAccordionDetails-root': {},
    '.MuiAccordionSummary-root': {}, // this apply to Summary
    '.css-o4b71y-MuiAccordionSummary-content': { margin: '0' },
  };
});

export const AccordianLayover = () => {
  return (
    <FormGroup>
      {moduleControlData?.map((item: any, index) => {
        return (
          <CustomAccordion>
            <AccordionSummary
              // onChange={()=> }
              // sx={{pointerEvents: "none"}}
              expandIcon={
                item.isExpanded ? (
                  <ExpandMoreIcon
                    sx={{ color: '#0662B7', pointerEvents: 'auto' }}
                  />
                ) : null
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid
                container
                item
                key={item.id}
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {' '}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // borderBottom:'1px solid #F0F2F5',
                    padding: '8px',
                  }}
                >
                  <FormControlLabel
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    label={
                      <Typography sx={{ fontSize: '14px' }}>
                        {item.label}
                      </Typography>
                    }
                    control={
                      <Checkbox
                        //   onChange={(e) =>
                        //     handleCheckboxClick(index,item.id, e.target.checked)
                        //   }
                        //   checked={item.defaultChecked === true}
                        color="secondary"
                      />
                    }
                  />
                </Box>
              </Grid>
            </AccordionSummary>
            {item.isExpanded && (
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            )}
          </CustomAccordion>
        );
      })}
    </FormGroup>
  );
};
