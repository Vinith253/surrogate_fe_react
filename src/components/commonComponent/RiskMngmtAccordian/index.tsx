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
  Button,
} from '@mui/material';
import './style.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { ReactComponent as RiskExpand } from '../../../assets/icons/risk_mgmt_expand.svg';
import { ReactComponent as PassIcon } from '../../../assets/icons/risk_mgmt_pass.svg';
import { ReactComponent as StatusPassIcon } from '../../../assets/icons/risk_status_pass.svg';
import { ReactComponent as ApprovedIcon } from '../../../assets/icons/approved_risk_mngm_icon.svg';
import UserIdentityBox from './UserIdentityBox';
import UserCashFlowBox from './UserCashflowBox';

const CustomAccordion = styled(Accordion)(({ theme }) => {
  return {
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)',
    marginBottom: '24px',
    '.MuiAccordionSummary-content': {
      margin: '0',
      height: '108px',
      alignItems: 'center',
      // padding: '24px',
    },
  };
});

type props = {
  data: Array<any>;
  isViewPage: boolean;
};

export const RiskMngmtAccordian = ({ data, isViewPage }: props) => {
  const [categories, setCategories] = useState(data);

  return (
    <FormGroup>
      {categories?.map((item: any, index) => {
        return (
          <>
            <CustomAccordion
              sx={{
                '&:before': {
                  border: 'none',
                  backgroundColor: 'white',
                },
              }}
              // expanded={item.isChecked}
            >
              <AccordionSummary
                // sx={{
                //   '.css-o4b71y-MuiAccordionSummary-content': {
                //     margin: '0',
                //     backgroundColor: 'white',
                //     borderBottom:  '1px solid white',
                //   },
                //   padding: '0',
                //   '.css-1kua6lf-MuiPaper-root-MuiAccordion-root': {
                //     backgroundColor: item.isChecked ? '#F3F3F4' : 'white',
                //   },
                //   backgroundColor: item.isChecked ? '#F3F3F4' : 'white',
                //   borderBottom: item.isChecked ? '1px solid white' : '1px solid #F3F3F4',
                //   '.css-o4b71y-MuiAccordionSummary-content.Mui-expanded': {
                //     border:'none'
                //   },
                // }}
                expandIcon={<RiskExpand />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid container item key={item.id} className="grid-style" columnGap={30}>
                  {' '}
                    <Box>
                      <Typography sx={{ fontSize: '14px', fontWeight: 'bold',marginBottom:'12px' }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ fontSize: '14px', color: '#656769' }}>
                        {item.infoData}
                      </Typography>
                    </Box>
                    <Box>
                      <Box sx={{ display: 'flex', gap: '16px' }}>
                        <Typography sx={{ fontSize: '14px', color: '#32A64D',marginBottom:'12px' }}>
                          {item.passFailText}
                        </Typography>
                        <PassIcon width={'16px'}/>
                      </Box>
                      {item?.score && (
                        <Typography sx={{ fontSize: '14px', color: '#656769' }}>
                          Score {item?.score?.result}
                          {'/'}
                          {item?.score?.total}
                        </Typography>
                      )}
                    </Box>
                </Grid>
              </AccordionSummary>
              {item.isExpanded && (
                <AccordionDetails>
                  {item.id === 1 && <UserIdentityBox item={item}/>}
                  {item.id === 2 && <UserIdentityBox item={item}/>}
                  {item.id === 3 && <UserCashFlowBox item={item}/>}
                  {item.id === 4 && <UserCashFlowBox item={item}/>}
                </AccordionDetails>
              )}
            </CustomAccordion>
          </>
        );
      })}
    </FormGroup>
  );
};
