import {
  Checkbox,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
  MenuItem,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../../../style/Color";
import { programMmgt } from "../../../../../utils/Constants";
import { checkTagStatus } from "../../../../../utils/tagBasedIndicator/tagStatus";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export interface dataList {
  surrogateProgramme: string;
  activeSince: string;
  lastModify: string;
  status: string;
  autoResumeForm: string;
}
export interface dataHeaderList {
  surrogateProgramme: string;
  activeSince?: string;
  lastModify?: string;
  status?: string;
  autoResumeForm?: string;
  more?: string;
}
const tableData = [
  {
    surrogateProgramme: "Card For Card",
    activeSince: "20 June 2022, 11.00",
    lastModify: "20 June 2022, 11.00",
    status: "Active",
    autoResumeForm: "",
  },
  {
    surrogateProgramme: "Payroll",
    activeSince: "20 June 2022, 11.00",
    lastModify: "20 June 2022, 11.00",
    status: "Paused",
    autoResumeForm: "20 June 2022, 11.00",
  },
  {
    surrogateProgramme: "Payroll",
    activeSince: "20 June 2022, 11.00",
    lastModify: "20 June 2022, 11.00",
    status: "Paused (scheduled)",
    autoResumeForm: "",
  },
];
const tableHeaderData = [
  {
    surrogateProgramme: "Surrogate Programme",
    activeSince: "Active Since",
    lastModify: "Last Modified",
    status: "Status",
    autoResumeForm: "Auto Resume Form",
    more: "More",
  },
];
export const ListView = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = tableData.map((n) => n.surrogateProgramme);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  const isSelected = (name: string) => selected.indexOf(name) !== -1;
  const handleClickCheckbox = (
    event: React.MouseEvent<unknown>,
    name: string
  ) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table aria-label="Table">
          <TableHead
            style={{ background: colors.tableHeaderLightBlue }}
            sx={{ padding: "5px" }}
          >
            {tableHeaderData.map((items: dataHeaderList, index: number) => (
              <TableRow key={index} sx={{ padding: "5px" }}>
                <TableCell padding="checkbox" sx={{ padding: "5px" }}>
                  <Checkbox
                    color={"secondary"}
                    indeterminate={
                      selected.length > 0 && selected.length < tableData.length
                    }
                    checked={
                      tableData.length > 0 &&
                      selected.length === tableData.length
                    }
                    onChange={handleSelectAllClick}
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ fontWeight: 800, padding: "5px" }}>
                  {items.surrogateProgramme}
                </TableCell>
                <TableCell sx={{ fontWeight: 800, padding: "5px" }}>
                  {items.activeSince}
                </TableCell>
                <TableCell sx={{ fontWeight: 800, padding: "5px" }}>
                  {items.lastModify}
                </TableCell>
                <TableCell sx={{ fontWeight: 800, padding: "5px" }}>
                  {items.status}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 800, padding: "5px" }}
                  align="center"
                >
                  {items.autoResumeForm}
                </TableCell>
                <TableCell sx={{ fontWeight: 800, padding: "5px" }}>
                  {items.more}
                </TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {tableData.map((data: dataList, index: number) => {
              const isItemSelected = isSelected(data.surrogateProgramme);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow
                  key={index}
                  style={
                    index % 2
                      ? { background: colors.white }
                      : { background: colors.tableGrey }
                  }
                  sx={{ padding: "5px" }}
                >
                  <TableCell padding={"checkbox"} sx={{ padding: "5px" }}>
                    <Checkbox
                      color={"secondary"}
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                      onChange={(event: any) =>
                        handleClickCheckbox(event, data.surrogateProgramme)
                      }
                    />
                  </TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    {data.surrogateProgramme}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: checkTagStatus(data.activeSince).color,
                      padding: "5px",
                    }}
                  >
                    {data.activeSince}
                  </TableCell>
                  <TableCell sx={{ padding: "5px" }}>
                    {data.lastModify}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: checkTagStatus(data.status).color,
                      padding: "5px",
                    }}
                  >
                    {data.status}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: "5px" }}>
                    {data.autoResumeForm === "" ? "-" : data.autoResumeForm}
                  </TableCell>
                  <TableCell
                    id="more-button"
                    onClick={handleClick}
                    aria-controls={open ? "more-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ padding: "5px" }}
                  >
                    <MoreVertIcon />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        id="more-menu"
        anchorEl={anchorElement}
        open={open}
        MenuListProps={{
          "aria-labelledby": "more-button",
        }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={handleClose}
          style={{ padding: "10px 20px", textAlign: "left" }}
        >
          {programMmgt.RESUME_SURROGATE}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{ padding: "10px 20px", textAlign: "left" }}
        >
          {programMmgt.PAUSE_SURROGATE}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{ padding: "10px 20px", textAlign: "left" }}
        >
          {programMmgt.EDIT_SCHEDULE_PAUSE}
        </MenuItem>
      </Menu>
    </Stack>
  );
};