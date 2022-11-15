import React, { useState } from "react";
import "./dashboard.scss";
import TableComp from "../../../components/commonComponent/ListTable/ListTable";
import ApprovalRate from "../../../assets/icons/approval_rate_icon.svg";
import TotalApplications from "../../../assets/icons/total_application_icon.svg";
import Comparisions from "../../../assets/icons/comparision_icon.svg";
import VirtualCard from "../../../assets/icons/virtual_card_icon.svg";
import ApprovedIcon from "../../../assets/icons/approved_icon.svg";
import Dropped from "../../../assets/icons/dropped_icon.svg";
import InProgress from "../../../assets/icons/in_progress_icon.svg";
import Rejected from "../../../assets/icons/rejected_icon.svg";
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from "./dashboard.const";
import DsaPage from "./dsaPage/dsa";
interface IStatus {
  label: string;
  value: number;
}

function Dashboard() {
  const [inputNumber, setInputNumber] = useState<number>(1);

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="sales-tab-header">
          <ul>
            <li
              className="sales-mgmnt-tab active"
              onClick={() => setInputNumber(1)}
            >
              DSA
            </li>
            <li className="sales-mgmnt-tab" onClick={() => setInputNumber(2)}>
              Fintech Partner
            </li>
            <li className="sales-mgmnt-tab" onClick={() => setInputNumber(3)}>
              Bank Divisions
            </li>
          </ul>
        </div>
        {inputNumber == 1 && (
          <div>
            <div className="dsa-data-container">
              <DsaPage />
            </div>
            <div className="diff-area" />
            <div className="list-data-box">
              <div className="recent-data">
                <text className="recent-data-text">Recent 50 Data </text>
              </div>
              <div className="line3-div" />
              <TableComp
                rows={salesDashboardList}
                statusRowsHeading={statusRowHeading}
                listRowHeading={listRowHeading}
                flag="dashboard"
              />
            </div>
          </div>
        )}
        {inputNumber == 2 && (
          <div>
            <div className="fintech-data-container">
              <DsaPage />
            </div>
            <div className="diff-area" />
            <div className="list-data-box">
              <div className="recent-data">
                <text className="recent-data-text">Recent 50 Data </text>
              </div>
              <div className="line3-div" />
              <TableComp
                rows={salesDashboardList}
                statusRowsHeading={statusRowHeading}
                listRowHeading={listRowHeading}
                flag="dashboard"
              />
            </div>
          </div>
        )}
        {inputNumber == 3 && (
          <div>
            <div className="bank-data-container">
              <DsaPage />
            </div>
            <div className="diff-area" />
            <div className="list-data-box">
              <div className="recent-data">
                <text className="recent-data-text">Recent 50 Data </text>
              </div>
              <div className="line3-div" />
              <TableComp
                rows={salesDashboardList}
                statusRowsHeading={statusRowHeading}
                listRowHeading={listRowHeading}
                flag="dashboard"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
