import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { colors } from '../../../../../style/Color';

const columns: GridColDef[] = [
  {
    field: 'surrogateProgramme',
    headerName: 'Surrogate Programme',
    width: 200,
    editable: true,
  },
  {
    field: 'activeSince',
    headerName: 'Active Since',
    sortable: false,
    width: 200,
    editable: true,
  },
  {
    field: 'lastModify',
    headerName: 'Last Modified',
    sortable: false,
    width: 200,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 100,
    editable: true,
  },
  {
    field: 'autoResumeForm',
    headerName: 'Auto Resume Form',
    width: 200,
    sortable: false,
    editable: true,
  },
  {
    field: 'more',
    headerName: 'More',
    width: 200,
    sortable: false,
    editable: true,
  },
];

const rows = [
  {
    id: '1',
    surrogateProgramme: 'Card For Card',
    activeSince: '20 June 2022, 11.00',
    lastModify: '20 June 2022, 11.00',
    status: 'Status',
    autoResumeForm: '',
    more: '',
  },
  {
    id: '2',
    surrogateProgramme: 'Card For Card',
    activeSince: '20 June 2022, 11.00',
    lastModify: '20 June 2022, 11.00',
    status: 'Status',
    autoResumeForm: '',
    more: '',
  },
  {
    id: '3',
    surrogateProgramme: 'Card For Card',
    activeSince: '20 June 2022, 11.00',
    lastModify: '20 June 2022, 11.00',
    status: 'Status',
    autoResumeForm: '',
    more: '',
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-renderingZone': {
            '& .MuiDataGrid-row': {
              '&:nth-child(2n)': {
                backgroundColor: 'red',
              },
            },
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.tableHeaderLightBlue,
            fontSize: 14,
            fontWeight: 500,
          },
          '& .MuiDataGrid-menuIconButton': {
            display: 'none',
          },
        }}
      />
    </Box>
  );
}
