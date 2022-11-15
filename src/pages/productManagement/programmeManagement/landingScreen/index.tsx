import { TabBar } from "../../../../components/commonComponent/customTab/CustomTab";
import { dataList } from "../../../../interface/Types";
import { HistoryLog } from "../screens/historyLog";
import { ProgramManagementScreen } from "../screens/programMmgt";

function ProgramManagement() {
  const TabListData: dataList = [
    {
      id: "1",
      data: "Programme Management",
      component: <ProgramManagementScreen />,
    },
    { id: "2", data: "History Log", component: <HistoryLog /> },
  ];
  return (
    <>
      <TabBar data={TabListData} />
    </>
  );
}

export default ProgramManagement;
