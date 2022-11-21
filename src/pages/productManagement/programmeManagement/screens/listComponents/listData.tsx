import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { colors } from '../../../../../style/Color';
import UnfoldMoreIcon from '../../../../../assets/icons/sortArrow.svg';
import { IconButton } from '@mui/material';

const columns: GridColDef[] = [
  {
    field: 'surrogateProgramme',
    headerName: 'Surrogate Programme',
    width: 200,
    editable: false,
  },
  {
    field: 'activeSince',
    headerName: 'Active Since',
    sortable: false,
    width: 180,
    editable: false,
  },
  {
    field: 'lastModify',
    headerName: 'Last Modified',
    sortable: false,
    width: 180,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 80,
    editable: false,
  },
  {
    field: 'autoResumeForm',
    headerName: 'Auto Resume Form',
    width: 150,
    sortable: false,
    editable: false,
    align: 'center',
  },
  {
    field: 'more',
    headerName: 'More',
    width: 80,
    sortable: false,
    editable: false,
  },
];

const rows = [
  {
    id: '1',
    surrogateProgramme: 'Card For Card',
    activeSince: '20 June 2022, 11.00',
    lastModify: '20 June 2022, 11.00',
    status: 'Status',
    autoResumeForm: '-',
    more: '',
  },
  {
    id: '2',
    surrogateProgramme: 'Payroll',
    activeSince: '21 June 2022, 12.00',
    lastModify: '20 July 2022, 11.00',
    status: 'Paused',
    autoResumeForm: '-',
    more: '',
  },
  {
    id: '3',
    surrogateProgramme: 'AQB',
    activeSince: '20 June 2022, 11.00',
    lastModify: '20 June 2022, 11.00',
    status: 'Status',
    autoResumeForm: '-',
    more: '',
  },
];

export function CustomUnsortedIcon() {
  return (
    <IconButton>
      <img src={UnfoldMoreIcon} alt="" />
    </IconButton>
  );
}

export default function DataGridDemo() {
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        hideFooter={true}
        components={{
          ColumnUnsortedIcon: CustomUnsortedIcon,
        }}
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          // '& .MuiDataGrid-virtualScrollerRenderZone': {
          //   '& .MuiDataGrid-row': {
          //     '&:nth-child(2n)': { backgroundColor: 'rgba(235, 235, 235, .7)' },
          //   },
          // },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.tableHeaderLightBlue,
            fontSize: 14,
            fontWeight: 500,
          },
          '& .MuiDataGrid-menuIconButton': {
            display: 'none',
          },
          '& .MuiDataGrid-iconButtonContainer': {
            marginLeft: '2px',
            visibility: 'visible',
            width: 'auto',
          },
          '& .MuiTouchRipple-root': {
            display: 'none',
          },
          '.MuiDataGrid-iconButtonContainer': {
            visibility: 'visible',
            width: '0 !important',
          },
          '.MuiTouchRipple-root .css-8je8zh-MuiTouchRipple-root': {
            visibility: 'hidden',
          },
          '.MuiDataGrid-footerContainer': {
            visibility: 'hidden',
            diplay: 'none',
          },
          '.MuiDataGrid-main': {
            // border: '1px solid red',
            height: '210px',
          },
          '.MuiDataGrid-columnHeaderTitleContainer': {
            '&:hover': {
              // backgroundColor: '#fff',
              border: 'unset',
            },
          },
        }}
      />
    </Box>
  );
}
