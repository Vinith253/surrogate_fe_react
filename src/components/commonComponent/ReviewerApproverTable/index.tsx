import { Stack, Grid, Select } from '@mui/material';
import './style.scss';

function ApproverReviewerTable(props: { data: Array<Object> }) {
  console.log('data', props?.data);

  return (
    <Stack className="approver-reviewer-container">
      {props?.data?.map((eachItem: any) => {
        console.log('eachItem', eachItem);
        return (
          <>
            <Stack className="header">{eachItem?.moduleName}</Stack>
            <Stack className="sub-modules-headers">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Stack>Sub-modules</Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack style={{ textAlign: 'center' }}>Reviewer</Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack style={{ textAlign: 'center' }}>Approver</Stack>
                </Grid>
              </Grid>
            </Stack>
            {eachItem?.subModules?.map((eachModule: any, index: number) => {
              return (
                <Stack className="each-sub-module">
                  <Grid container spacing={2} key={index}>
                    <Grid item xs={4} className="each-field">
                      {eachModule?.name}
                    </Grid>
                    <Grid item xs={4}>
                      {eachModule?.reviewerList?.map((item: any) => {
                        return (
                          <Grid item xs={12}>
                            <Select></Select>
                          </Grid>
                        );
                      })}
                    </Grid>
                    <Grid item xs={4}>
                      {eachModule?.approverList?.map((item: any) => {
                        return (
                          <Grid item xs={12}>
                            <Select></Select>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Stack>
              );
            })}
          </>
        );
      })}
    </Stack>
  );
}

export default ApproverReviewerTable;
