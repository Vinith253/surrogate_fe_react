import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import { Box, Tab, Stack } from "@mui/material";
import { TabBar } from "../../../../components/commonComponent/customTab/CustomTab";
import { dataList } from "../../../../interface/Types";
import { CardCatalogue } from "../screens/CardCatalogue";
import HistoryLog from "../screens/HistoryLog";

export default function LabTabs() {
  const TabListData: dataList = [
    {
      id: "1",
      data: "card catalogue",
      component: <CardCatalogue />,
    },
    { id: "2", data: "history log", component: <HistoryLog /> },
  ];
  return (
    <Stack sx={{ borderLeft: "3px solid blue" ,backgroundColor:'#eceff2'}}>
      <TabBar data={TabListData} />
    </Stack>
  );
}
