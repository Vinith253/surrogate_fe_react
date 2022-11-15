import {
  Button,
  Grid,
  Pagination,
  TableCell,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useStyles } from "../../../style/MuiStyles/muiStyles";
import LeftArrow from "@mui/icons-material/KeyboardDoubleArrowLeft";
import LastArrow from "@mui/icons-material/KeyboardDoubleArrowRight";
import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";

function PaginationComp(props: {
  lastButtonDisabled: boolean | undefined;
  onFirstClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onLastClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onPageChange:
    | ((event: ChangeEvent<unknown>, page: number) => void)
    | undefined;
  handleChangeRowsPerPage:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  page: number;
  rowsPerPage: number;
  rows: string | any[];
}) {
  return (
    <Grid container sx={{ justifyContent: "space-between" }}>
      <Grid>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30, { label: "All", value: -1 }]}
            colSpan={3}
            count={props.rows.length}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            labelRowsPerPage={"Listing per Page"}
            SelectProps={{
              inputProps: {
                "aria-label": "listing per page",
              },
              native: true,
            }}
            sx={{
              height: "70px",
              borderBottom: "none",
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
            borderBottom: "none",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            disabled={props.page == 1}
            startIcon={<LeftArrow />}
            sx={{
              fontSize: "14px",
              marginBottom: "20px",
              marginRight: "20px",
            }}
            onClick={props.onFirstClick}
          >
            First
          </Button>
          <Pagination
            sx={{
              ...useStyles.numberPag,
            }}
            count={Math.ceil(props.rows.length / props.rowsPerPage)}
            variant="outlined"
            shape="rounded"
            onChange={props.onPageChange}
            siblingCount={0}
          />
          <Button
            disabled={props.lastButtonDisabled}
            endIcon={<LastArrow />}
            sx={{
              fontSize: "14px",
              marginBottom: "20px",
              marginLeft: "20px",
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
