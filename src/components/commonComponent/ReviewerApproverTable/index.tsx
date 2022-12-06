import {
  Stack,
  Grid,
  Typography,
  FormControl,
  Select,
  TextField,
} from '@mui/material';
import SearchDropdown from './../SearchDropdown';

import './style.scss';

function ApproverReviewerTable(props: { data: Array<Object>; mode: string }) {
  return (
    <Stack className="approver-reviewer-container">
      {props?.data?.map((eachItem: any) => {
        return (
          <>
            <Stack className="header">{eachItem?.moduleName}</Stack>
            <Stack className="sub-modules-headers">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Stack>Sub-modules</Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack style={{ marginLeft: '2px' }}>Reviewer</Stack>
                </Grid>
                <Grid item xs={4}>
                  <Stack style={{ marginLeft: '13px' }}>Approver</Stack>
                </Grid>
              </Grid>
            </Stack>
            {eachItem?.subModules?.map((eachModule: any, index: number) => {
              return (
                <Stack className="each-sub-module">
                  <Grid container spacing={2} key={index}>
                    <Grid item xs={4}>
                      {eachModule?.name}
                    </Grid>
                    <Grid item xs={4} className="each-dropdown">
                      {eachModule?.reviewerList?.map((item: any) => {
                        return (
                          <Grid item xs={12}>
                            {props?.mode === 'view' ? (
                              <Stack sx={{ m: 1, minWidth: 120 }}>
                                <Stack
                                  style={{
                                    height: '45px',
                                    // backgroundColor: 'red',
                                  }}
                                >
                                  <Stack
                                    className="search-dropdown-text-field"
                                    sx={{
                                      width: '90%',
                                      padding: '15px 0px',
                                      height: '46px',
                                      // backgroundColor: 'green',
                                    }}
                                  >
                                    Ashwini
                                  </Stack>
                                </Stack>
                              </Stack>
                            ) : (
                              <SearchDropdown data={item} />
                            )}
                          </Grid>
                        );
                      })}
                    </Grid>
                    <Grid item xs={4} className="each-dropdown">
                      {eachModule?.approverList?.map((item: any) => {
                        return (
                          <Grid item xs={12}>
                            {props?.mode === 'view' ? (
                              <Stack sx={{ m: 1, minWidth: 120 }}>
                                <Stack
                                  style={{
                                    height: '45px',
                                    // backgroundColor: 'red',
                                  }}
                                >
                                  <Stack
                                    className="search-dropdown-text-field"
                                    sx={{
                                      width: '90%',
                                      padding: '15px 0px',
                                      height: '46px',
                                      // backgroundColor: 'green',
                                    }}
                                  >
                                    Ganesh
                                  </Stack>
                                </Stack>
                              </Stack>
                            ) : (
                              <SearchDropdown data={item} />
                            )}
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
