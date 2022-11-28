import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Button,
  Stack,
  Typography,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  IconButton,
  Grid,
  Dialog,
  List,
  ListItem,
} from '@mui/material';
// import "../../../style/Style.css";
import { modalStyle } from '../../../style/ModalStyle/ModalStyle';
type props = {
  title: string;
  closeBtn: string;
  tableData: Array<any>;
  handleClickOpen: () => void;
  handleCloseSuccess: () => void;
  openSuccess: boolean;
  viewMoreDetails: string;
};
export default function HistoryLogCustomModal({
  title,
  closeBtn,
  tableData,
  handleClickOpen,
  handleCloseSuccess,
  openSuccess,
  viewMoreDetails,
}: props) {
  const [open, setOpen] = useState(null);
  const handleOpen = (clickedIndex: any) => {
    if (open === clickedIndex) {
      setOpen(null);
    } else {
      setOpen(clickedIndex);
    }
  };
  return (
    <>
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
          <Stack py={2} style={{ width: '540px' }} px={2}>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottom: '1px solid #E9EAEB',
                paddingBottom: '10px',
                marginBottom: '16px',
              }}
            >
              <Typography
                className="modal_title"
                component="h1"
                fontSize={11}
                fontWeight={600}
                color="#555759"
              >
                {title}
              </Typography>
              <Typography
                sx={{ color: '#0662B7', fontSize: '11px', cursor: 'pointer' }}
                onClick={handleCloseSuccess}
              >
                {closeBtn}
              </Typography>
            </Stack>
            <Table aria-label="collapsible table">
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
                  <TableCell sx={modalStyle.modalHeading}>
                    Surrogate Name
                  </TableCell>
                  <TableCell sx={modalStyle.modalHeading}>
                    Checker Status
                  </TableCell>
                  <TableCell sx={modalStyle.modalHeading}>
                    Current Status
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              {tableData.map((item: any, index: any) => {
                return (
                  <TableBody sx={{ padding: '0px' }}>
                    <TableRow
                      sx={{
                        borderRight: `${
                          open === index ? `1px solid #D7D8D8` : ''
                        }`,
                        borderLeft: `${
                          open === index ? `1px solid #D7D8D8` : ''
                        }`,
                        background: `${open === index ? `#F2FAFF` : ''}`,
                      }}
                    >
                      <TableCell sx={modalStyle.modalTabelRow}>
                        {item.versionNumber}
                      </TableCell>
                      <TableCell sx={modalStyle.modalTabelRow}>
                        {open === index ? '' : item.surrogateName}
                      </TableCell>
                      <TableCell sx={modalStyle.modalTabelRow}>
                        {open === index ? '' : item.requestStatus}
                      </TableCell>
                      <TableCell sx={modalStyle.modalTabelRow}>
                        {open === index ? '' : item.currentStatus}
                      </TableCell>
                      <TableCell sx={{ padding: '5px' }}>
                        <IconButton
                          sx={{ padding: '0px' }}
                          aria-label="expand row"
                          size="small"
                          onClick={() => handleOpen(index)}
                        >
                          {open ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{
                          padding: '0px 5px',
                          border: '1px solid #D7D8D8',
                        }}
                        colSpan={6}
                      >
                        <Collapse
                          in={open === index}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Grid container>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Version Number
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.versionNumber}
                              </Typography>
                            </Grid>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Surrogate Name
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.surrogateName}
                              </Typography>
                            </Grid>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Request Status
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.requestStatus}
                              </Typography>
                            </Grid>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Current Status
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.currentStatus}
                              </Typography>
                            </Grid>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Initiater
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.initiater}
                              </Typography>
                            </Grid>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Date and Time
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.dateAndTime}
                              </Typography>
                            </Grid>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Reviewer
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.reviewer}
                              </Typography>
                            </Grid>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Date and Time
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.dateAndTimeReview}
                              </Typography>
                            </Grid>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Approver
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.approver}
                              </Typography>
                            </Grid>
                            <Grid xs={6} sm={3} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Date and Time
                              </Typography>
                              <Typography sx={modalStyle.modalTbaleValue}>
                                {item.dateAndTimeapprover}
                              </Typography>
                            </Grid>
                            <Grid xs={12} sx={{ margin: '10px 0px' }}>
                              <Typography sx={modalStyle.modalTableKey}>
                                Changes
                              </Typography>
                              <List>
                                {item?.reasonRejection?.map(
                                  (item: any, index: number) => {
                                    return (
                                      <ListItem
                                        sx={{
                                          fontSize: '10px',
                                          padding: '3px 16px',
                                        }}
                                      >
                                        <Stack
                                          sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                          }}
                                        >
                                          <Stack>{`${index + 1}. `}</Stack>
                                          <Stack>{item}</Stack>
                                        </Stack>
                                      </ListItem>
                                    );
                                  }
                                )}
                              </List>
                              <Typography
                                sx={{
                                  fontSize: '10px',
                                  float: 'right',
                                  color: '#0662B7',
                                  fontWeight: '500',
                                  cursor: 'pointer',
                                }}
                              >
                                {viewMoreDetails}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            </Table>
          </Stack>
        </Dialog>
      </Stack>
    </>
  );
}
