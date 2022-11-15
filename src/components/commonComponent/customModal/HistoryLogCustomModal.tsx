import React, { useState } from 'react';
import '../../../style/Style.scss';
import {
  Button,
  Stack,
  Typography,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TableBody,
  IconButton,
  Grid,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { colors } from '../../../style/Color';

function HistoryLogCustomModal(props: any) {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack className="App">
      <Button variant="outlined" onClick={handleClickOpen}>
        Pause modal
      </Button>
      <Dialog
        open={openSuccess}
        onClose={handleCloseSuccess}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Stack py={2} style={{ maxWidth: '520px' }} px={2}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottom: '1px solid #E9EAEB',
              paddingBottom: '10px',
            }}
          >
            <Typography
              className="modal_title"
              component="h1"
              fontSize={13}
              fontWeight={600}
              color="#555759"
            >
              Card for Card Surrogate - History Log
            </Typography>
            <Typography sx={{ color: '#0662B7', fontSize: '13px' }}>
              Close
            </Typography>
          </Stack>

          <Table
            size="small"
            aria-label="a dense table"
            sx={{ marginTop: '20px' }}
          >
            <TableHead sx={{ padding: '4px 14px' }}>
              <TableRow sx={{ backgroundColor: '#CBE0F5' }}>
                <TableCell
                  sx={{
                    fontSize: '10px',
                    padding: '0px 5px',
                    fontWeight: '600',
                  }}
                >
                  Version Number
                </TableCell>
                <TableCell sx={{ fontSize: '10px', fontWeight: '600' }}>
                  Surrogate Name
                </TableCell>
                <TableCell sx={{ fontSize: '10px', fontWeight: '600' }}>
                  Checker Status
                </TableCell>
                <TableCell sx={{ fontSize: '10px', fontWeight: '600' }}>
                  Current Status
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
          </Table>

          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            sx={{ boxShadow: 'none', margin: '0px' }}
          >
            <AccordionSummary
              sx={{ padding: '0px', margin: '0px', minHeight: '0px' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Table sx={{ margin: '0px' }}>
                <TableRow sx={{ margin: '0px' }}>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 5px',
                      border: 'none',
                    }}
                  >
                    V1.1.5
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Card For Card
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Approved
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Active
                  </TableCell>
                  {/* <TableCell></TableCell> */}
                </TableRow>
              </Table>
            </AccordionSummary>
            <AccordionDetails
              sx={{ padding: '0px 5px', border: '1px solid #D7D8D8' }}
            >
              <Grid container>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Version Number
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    V1.1.5
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Surrogate Name
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Card For Card
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Request Status
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Approved
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Current Status
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Active
                  </Typography>
                </Grid>

                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Initiater
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Rajesh kumar
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Reviewer
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Ganesh
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Approver
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Ganesh
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>

                <Grid xs={12} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Changes
                  </Typography>
                  <Typography sx={{ fontSize: '10px' }}>
                    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend
                    scelerisque. Vitae quis praesent tempus ut.
                  </Typography>
                  <Typography sx={{ fontSize: '10px' }}>
                    2.Accumsan diam a vulputate ultrices turpis viverra rhoncus
                    donec ultricies. In dui ultricies in curabitur quis et.
                    Justo velit massa sed morbi nunc, sit magna.
                  </Typography>

                  <Typography sx={{ fontSize: '10px' }}>
                    3.Facilisi est morbi sollicitudin ornare a. Ullamcorper
                    semper fac.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      float: 'right',
                      color: '#0662B7',
                      fontWeight: '500',
                    }}
                  >
                    view more details
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
            sx={{ boxShadow: 'none', margin: '0px' }}
          >
            <AccordionSummary
              sx={{ padding: '0px', margin: '0px', minHeight: '0px' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Table sx={{ margin: '0px' }}>
                <TableRow sx={{ margin: '0px' }}>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 5px',
                      border: 'none',
                    }}
                  >
                    V1.1.5
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Card For Card
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Approved
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Active
                  </TableCell>
                  {/* <TableCell></TableCell> */}
                </TableRow>
              </Table>
            </AccordionSummary>
            <AccordionDetails
              sx={{ padding: '0px 5px', border: '1px solid #D7D8D8' }}
            >
              <Grid container>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Version Number
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    V1.1.5
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Surrogate Name
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Card For Card
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Request Status
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Approved
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Current Status
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Active
                  </Typography>
                </Grid>

                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Initiater
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Rajesh kumar
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Reviewer
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Ganesh
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Approver
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Ganesh
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>

                <Grid xs={12} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Changes
                  </Typography>
                  <Typography sx={{ fontSize: '10px' }}>
                    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend
                    scelerisque. Vitae quis praesent tempus ut.
                  </Typography>
                  <Typography sx={{ fontSize: '10px' }}>
                    2.Accumsan diam a vulputate ultrices turpis viverra rhoncus
                    donec ultricies. In dui ultricies in curabitur quis et.
                    Justo velit massa sed morbi nunc, sit magna.
                  </Typography>

                  <Typography sx={{ fontSize: '10px' }}>
                    3.Facilisi est morbi sollicitudin ornare a. Ullamcorper
                    semper fac.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      float: 'right',
                      color: '#0662B7',
                      fontWeight: '500',
                    }}
                  >
                    view more details
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
            sx={{ boxShadow: 'none', margin: '0px' }}
          >
            <AccordionSummary
              sx={{ padding: '0px', margin: '0px', minHeight: '0px' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Table sx={{ margin: '0px' }}>
                <TableRow sx={{ margin: '0px' }}>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 5px',
                      border: 'none',
                    }}
                  >
                    V1.1.5
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Card For Card
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Rejected
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Active
                  </TableCell>
                  {/* <TableCell></TableCell> */}
                </TableRow>
              </Table>
            </AccordionSummary>
            <AccordionDetails
              sx={{ padding: '0px 5px', border: '1px solid #D7D8D8' }}
            >
              <Grid container>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Version Number
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    V1.1.5
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Surrogate Name
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Card For Card
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Request Status
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Approved
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Current Status
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Active
                  </Typography>
                </Grid>

                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Initiater
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Rajesh kumar
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Reviewer
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Ganesh
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Approver
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Ganesh
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>

                <Grid xs={12} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Changes
                  </Typography>
                  <Typography sx={{ fontSize: '10px' }}>
                    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend
                    scelerisque. Vitae quis praesent tempus ut.
                  </Typography>
                  <Typography sx={{ fontSize: '10px' }}>
                    2.Accumsan diam a vulputate ultrices turpis viverra rhoncus
                    donec ultricies. In dui ultricies in curabitur quis et.
                    Justo velit massa sed morbi nunc, sit magna.
                  </Typography>

                  <Typography sx={{ fontSize: '10px' }}>
                    3.Facilisi est morbi sollicitudin ornare a. Ullamcorper
                    semper fac.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      float: 'right',
                      color: '#0662B7',
                      fontWeight: '500',
                    }}
                  >
                    view more details
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
            sx={{ boxShadow: 'none', margin: '0px' }}
          >
            <AccordionSummary
              sx={{ padding: '0px', margin: '0px', minHeight: '0px' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Table sx={{ margin: '0px' }}>
                <TableRow sx={{ margin: '0px' }}>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 5px',
                      border: 'none',
                    }}
                  >
                    V1.1.5
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Card For Card
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Approved
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: '12px',
                      padding: '0px 16px',
                      border: 'none',
                    }}
                  >
                    Active
                  </TableCell>
                  {/* <TableCell></TableCell> */}
                </TableRow>
              </Table>
            </AccordionSummary>
            <AccordionDetails
              sx={{ padding: '0px 5px', border: '1px solid #D7D8D8' }}
            >
              <Grid container>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Version Number
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    V1.1.5
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Surrogate Name
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Card For Card
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Request Status
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Approved
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Current Status
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Active
                  </Typography>
                </Grid>

                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Initiater
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Rajesh kumar
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Reviewer
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Ganesh
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Approver
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    Ganesh
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Date and Time
                  </Typography>
                  <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
                    10 Aug,2022 10:00
                  </Typography>
                </Grid>

                <Grid xs={12} sx={{ margin: '10px 0px' }}>
                  <Typography sx={{ fontSize: '8px', color: '#AFAEAF' }}>
                    Changes
                  </Typography>
                  <Typography sx={{ fontSize: '10px' }}>
                    1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend
                    scelerisque. Vitae quis praesent tempus ut.
                  </Typography>
                  <Typography sx={{ fontSize: '10px' }}>
                    2.Accumsan diam a vulputate ultrices turpis viverra rhoncus
                    donec ultricies. In dui ultricies in curabitur quis et.
                    Justo velit massa sed morbi nunc, sit magna.
                  </Typography>

                  <Typography sx={{ fontSize: '10px' }}>
                    3.Facilisi est morbi sollicitudin ornare a. Ullamcorper
                    semper fac.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      float: 'right',
                      color: '#0662B7',
                      fontWeight: '500',
                    }}
                  >
                    view more details
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* <Accordion expanded={expanded === 'pane4'} onChange={handleChange('pane4')} sx={{boxShadow:'none',margin:'0px',minHeight:'0px'}}>
        <AccordionSummary
        sx={{padding:'0px',margin:'0px',minHeight:'0px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
       
        >
         <Table sx={{margin:'0px'}}>
         <TableRow sx={{margin:'0px'}}>
                  <TableCell sx={{fontSize:"12px", padding:"0px 5px"}}>V1.1.5</TableCell>
                  <TableCell sx={{fontSize:"12px",padding:"0px 16px"}}>Card For Card</TableCell>
                  <TableCell sx={{fontSize:"12px",padding:"0px 16px"}}>Approved</TableCell>
                  <TableCell sx={{fontSize:"12px",padding:"0px 16px"}}>Active</TableCell>
                  <TableCell></TableCell>
              </TableRow>
         </Table>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px 5px',border:'1px solid #D7D8D8'}}>
         <Grid container >
          <Grid xs={6} sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Version Number</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>V1.1.5</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Surrogate Name</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Card For Card</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Request Status</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Approved</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Current Status</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Active</Typography>
          </Grid>

          <Grid xs={6} sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Initiater</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Rajesh kumar</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Date and Time</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>10 Aug,2022 10:00</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Reviewer</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Ganesh</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Date and Time</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>10 Aug,2022 10:00</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Approver</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Ganesh</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Date and Time</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>10 Aug,2022 10:00</Typography>
          </Grid>

          <Grid xs={12}  sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Changes</Typography>
               <Typography sx={{fontSize:'10px'}}>
                1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque. Vitae quis praesent tempus ut.

            
               </Typography>
               <Typography sx={{fontSize:'10px'}}>
              
                2.Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui ultricies in curabitur quis et. Justo velit massa sed morbi nunc, sit magna.
              
               </Typography>

               <Typography sx={{fontSize:'10px'}}>
             
              3.Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.
             </Typography>
             <Typography sx={{fontSize:'10px',float:'right',color:'#0662B7',fontWeight:'500'}}>view more details</Typography>
          </Grid>
         </Grid>
        </AccordionDetails>
      </Accordion>  */}

          {/* 
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{boxShadow:'none',margin:'0px'}}>
        <AccordionSummary
        sx={{padding:'0px',margin:'0px',minHeight:'0px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        
        >
         <Table sx={{margin:'0px'}}>
         <TableRow sx={{margin:'0px'}}>
                  <TableCell sx={{fontSize:"12px", padding:"0px"}}>V1.2.5</TableCell>
                  <TableCell sx={{fontSize:"12px"}}>Card For Card</TableCell>
                  <TableCell sx={{fontSize:"12px"}}>Approved</TableCell>
                  <TableCell sx={{fontSize:"12px"}}>Active</TableCell>
                  <TableCell></TableCell>
              </TableRow>
         </Table>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px'}}>
         <Grid container >
          <Grid xs={6} sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Version Number</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>V1.1.5</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Surrogate Name</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Card For Card</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Request Status</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Approved</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Current Status</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Active</Typography>
          </Grid>

          <Grid xs={6} sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Initiater</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Rajesh kumar</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Date and Time</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>10 Aug,2022 10:00</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Reviewer</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Ganesh</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Date and Time</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>10 Aug,2022 10:00</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Approver</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>Ganesh</Typography>
          </Grid>
          <Grid xs={6}  sm={3} sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Date and Time</Typography>
               <Typography sx={{fontSize:'10px',fontWeight:'600'}}>10 Aug,2022 10:00</Typography>
          </Grid>

          <Grid xs={12}  sx={{margin:'10px 0px'}}>
               <Typography sx={{fontSize:'8px',color:'#AFAEAF'}}>Changes</Typography>
               <Typography sx={{fontSize:'10px'}}>
                1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in ipsum aliquam cursus. Ac mattis lectus eleifend scelerisque. Vitae quis praesent tempus ut.

            
               </Typography>
               <Typography sx={{fontSize:'10px'}}>
              
                2.Accumsan diam a vulputate ultrices turpis viverra rhoncus donec ultricies. In dui ultricies in curabitur quis et. Justo velit massa sed morbi nunc, sit magna.
              
               </Typography>

               <Typography sx={{fontSize:'10px'}}>
             
              3.Facilisi est morbi sollicitudin ornare a. Ullamcorper semper fac.
             </Typography>
             <Typography sx={{fontSize:'10px',float:'right',color:'#0662B7',fontWeight:'500'}}>view more details</Typography>
          </Grid>
         </Grid>
        </AccordionDetails>
      </Accordion> */}

          {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
         <Table>
         <TableRow>
                  <TableCell sx={{fontSize:"12px", padding:"0px"}}>Version Number</TableCell>
                  <TableCell sx={{fontSize:"12px"}}>Surrogate Name</TableCell>
                  <TableCell sx={{fontSize:"12px"}}>Checker Status</TableCell>
                  <TableCell sx={{fontSize:"12px"}}>Current Status</TableCell>
                  <TableCell></TableCell>
              </TableRow>
         </Table>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
        </Stack>
      </Dialog>
    </Stack>
  );
}

export default HistoryLogCustomModal;
