import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from 'react';

// MUI components
import {
  Button,
  Grid,
  Pagination,
  TableCell,
  TablePagination,
  TableRow,
} from '@mui/material';
import LeftArrow from '@mui/icons-material/KeyboardDoubleArrowLeft';
import LastArrow from '@mui/icons-material/KeyboardDoubleArrowRight';

// Styles
import { useStyles } from '../../../style/MuiStyles/muiStyles';

function PaginationComp(props: {
  lastButtonDisabled: boolean | undefined;
  onFirstClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onLastClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
  // Remove this
  handleChangeRowsPerPage:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  page: number;
  rowsPerPage: number;
  rows: any[]; // Remove this
  totalRecordCount?: number;
  totalPages?: number;
}) {
  const { totalPages, totalRecordCount, rowsPerPage, page } = props;
  return (
    <Grid container sx={{ justifyContent: 'space-between' }}>
      <Grid>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 30, { label: 'All', value: -1 }]}
            colSpan={3}
            count={totalRecordCount || props.rows?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage={'Listing per Page'}
            SelectProps={{
              inputProps: {
                'aria-label': 'listing per page',
              },
              native: true,
            }}
            sx={{
              height: '70px',
              borderBottom: 'none',
              ...useStyles.pagination,
            }}
            onPageChange={props.handleChangePage}
            onRowsPerPageChange={props.handleChangeRowsPerPage}
            ActionsComponent={ActionComponentDisabled}
          />
        </TableRow>
      </Grid>
      <Grid>
        <TableCell
          sx={{
            borderBottom: 'none',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Button
            disabled={props.page + 1 === 1}
            startIcon={<LeftArrow />}
            sx={{
              fontSize: '14px',
              marginBottom: '20px',
              marginRight: '20px',
              textTransform: 'capitalize',
            }}
            onClick={props.onFirstClick}
          >
            First
          </Button>
          <Pagination
            sx={{
              ...useStyles.numberPag,
            }}
            boundaryCount={3}
            count={
              totalPages || Math.ceil(props.rows?.length / props.rowsPerPage)
            }
            variant="outlined"
            shape="rounded"
            onChange={(event, page) => props.onPageChange(event, page - 1)}
            siblingCount={0}
            page={page + 1}
            // showFirstButton
            // showLastButton
          />
          <Button
            disabled={
              totalPages ? page === totalPages - 1 : props.lastButtonDisabled
            }
            endIcon={<LastArrow />}
            sx={{
              fontSize: '14px',
              marginBottom: '20px',
              marginLeft: '20px',
              textTransform: 'capitalize',
            }}
            onClick={props.onLastClick}
          >
            Last
          </Button>
        </TableCell>
      </Grid>
    </Grid>
  );
}

const ActionComponentDisabled = () => <span />;

export default PaginationComp;
