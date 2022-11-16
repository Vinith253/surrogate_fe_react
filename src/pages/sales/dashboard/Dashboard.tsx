import React, { useState } from 'react';
import './dashboard.scss';
import TableComp from '../../../components/commonComponent/ListTable/ListTable';
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from './dashboard.const';
import DsaPage from './dsaPage/dsa';
import { dataList } from "../../../interface/Types";
import { TabBar } from "../../../components/commonComponent/customTab/CustomTab";

function Dashboard() {
  const TabListData: dataList = [
    {
      id: '1',
      data: 'DSA',
      component:  <DsaPage />,
    },
    { id: '2', data: 'Fintech Partners', component: <DsaPage /> },
    { id: '3', data: 'Bank Divisions', component: <DsaPage /> },
  ];

  return (
    <div className="App">
      <div className="mainContainer">
            <TabBar data={TabListData} />
      </div>
    </div>
  );
}

export default Dashboard;
