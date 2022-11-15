import { colors } from "../Color";

export const useStyles =  {
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: colors.blue,
      height: 2,
    },
    "& .MuiTab-root.Mui-selected": {
      color: colors.black,
    },
  },
  pagination: {
    "& .MuiInputBase-root": {
      width: "90px",
      display: "flex",
      alignItems: "flex-start",
      border: "1px solid #D2D2D3",
      marginLeft: "16px",
      marginRight: "16px",
      justifyContent: "space-between",
    },
    "& .MuiTablePagination-select": {
      textAlignLast: "left",
      textAlign: "left",
    },
  },
  numberPag: {
    "ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)":
    {
      backgroundColor: "transparent",
      color: "#AFAEAF",
    },
  "& .Mui-selected": {
    backgroundColor: "#0662B7",
    color: "white",
  },
  "ul > li": {
    paddingLeft: "10px",
  },
  }
};
