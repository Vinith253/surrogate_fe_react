import {
  FormGroup,
  AccordionSummary,
  Grid,
  Box,
  Typography,
  AccordionDetails,
  Accordion,
  styled,
} from '@mui/material';
import { useState } from 'react';
import { ReactComponent as RiskExpand } from '../../../assets/icons/risk_mgmt_expand.svg';
import { ReactComponent as PassIcon } from '../../../assets/icons/risk_mgmt_pass.svg';
import { ReactComponent as FailIcon } from '../../../assets/icons/risk_fail_icon.svg';
import UserIdentityBox from './UserIdentityBox';
import UserCashFlowBox from './UserCashflowBox';
import './style.scss';

const CustomAccordion = styled(Accordion)(({ theme }) => {
  return {
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.16)',
    marginBottom: '24px',
    '.MuiAccordionSummary-content': {
      margin: '0',
      height: '108px',
      alignItems: 'center',
    },
  };
});

type props = {
  data: Array<any>;
};

export const RiskMngmtAccordian = ({ data }: props) => {
  const [categories, setCategories] = useState(data);



  const handleExpandedClick = ( id: number) => {
    let updatedList = categories?.map((item) => {
      if (item.id === id) {
        return { ...item, isExpanded: !item.isExpanded }; //gets everything that was already in item, and updates "done"
      }
      return {...item, isExpanded: false}; // else return unmodified item
    });
    setCategories(updatedList);
  };

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
              onClick={()=> handleExpandedClick(item.id)}
              expanded={item.isExpanded}
            >
              <AccordionSummary
                expandIcon={<RiskExpand />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid
                  container
                  item
                  key={item.id}
                  className="risk-accordian-grid-style"
                  columnGap={30}
                >
                  {' '}
                  <Box>
                    <Typography className="risk-label-text">
                      {item.label}
                    </Typography>
                    <Typography className="risk-info-label">
                      {item.infoData}
                    </Typography>
                  </Box>
                  <Box>
                    <Box className="status-box">
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: item.isPassed ? '#32A64D' : '#E63946',
                          marginBottom: '12px',
                        }}
                      >
                        {item.passFailText}
                      </Typography>
                      {item.isPassed ? (
                        <PassIcon width={'16px'} />
                      ) : (
                        <FailIcon width={'16px'} />
                      )}
                    </Box>
                    {item?.score && (
                      <Typography className="risk-info-label">
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
                  {item.id === 1 && <UserIdentityBox item={item} />}
                  {item.id === 2 && <UserIdentityBox item={item} />}
                  {item.id === 3 && <UserCashFlowBox item={item} />}
                  {item.id === 4 && <UserCashFlowBox item={item} />}
                </AccordionDetails>
              )}
            </CustomAccordion>
          </>
        );
      })}
    </FormGroup>
  );
};
