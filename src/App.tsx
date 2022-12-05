import { Route, Routes } from 'react-router-dom';
import { Layout, PrivateRoute } from './components';
import { Dashboard, HomePage, LoginPage, NotFoundPage } from './pages';
import BulkUpload from './pages/productManagement/cardCatalogue/bulkUpload';
import CreateNewCard from './pages/productManagement/cardCatalogue/createCard/createNewCard';
import CardCatalogue from './pages/productManagement/cardCatalogue/landingScreen/cardTab';
import ProgramManagement from './pages/productManagement/programmeManagement/landingScreen';
import SalesDashboard from './pages/sales/dashboard';
import SalesReport from './pages/sales/salesReport';
import PerformanceReport from './pages/sales/performanceReport';
import SalesReportDetails from './pages/sales/salesReport/reportDetails';
import ReviewCard from './pages/productManagement/cardCatalogue/reviewCard/reviewCard';
import AccessLibrary from './pages/accessLibrary/AccessLibrary';
import ReviewerLogDetails from './pages/productManagement/programmeManagement/screens/listComponents/ReviewerLogDetails';
import { BranchDetails } from './pages/userManagement/branchDetails/landingScreen';
import { OrgStructure } from './pages/userManagement/orgStructure/landingScreen';
import { Onboarding } from './pages/userManagement/orgStructure/screens/Onboarding/onboarding';
import { OrgReview } from './pages/userManagement/orgStructure/screens/OrgReview/OrgReview';
import { RoleCreation } from './pages/userManagement/roleCreation/landingScreen';
import OrgBulkUpload from './pages/userManagement/orgStructure/orgBulkUpload';
import UserCreation from './pages/userManagement/userCreation';
import { CreateRole } from './pages/userManagement/roleCreation/createRole/createRole';
import { UserDetails } from './pages/userManagement/roleCreation/UserDetails/UserDetails';
import UserBulkUpload from './pages/userManagement/userCreation/userBulkUpload';
import { AuthDetail } from './pages/userManagement/roleCreation/screens/AuthorisationDetail/authDetail';
import { HistoryLogDetailScreen } from './pages/userManagement/roleCreation/screens/HistoryLogDetailScreen';
import CreateUser from './pages/userManagement/userCreation/singleUserUpload/createUser';
import EditUser from './pages/userManagement/userCreation/singleUserUpload/editUser';
import ViewUser from './pages/userManagement/userCreation/singleUserUpload/viewUser';
import LMSDashboard from './pages/lms/lmsDashboard';
import LMSRule from './pages/lms/lmsRule';
import AddLMSRule from './pages/lms/lmsRule/createLMS/addNewRule';
import ViewLMSRule from './pages/lms/lmsRule/createLMS/viewLMS';
import EditLMSRule from './pages/lms/lmsRule/createLMS/editLMS';
import Retargeting from './pages/lms/reTargeting';
import { OrgHistoryLogDetails } from './pages/userManagement/orgStructure/screens/historyLog/historyLogDetails/historyLogDetails';
import UserProfile from './pages/profile/landingScreen';
import { OrgStrHistoryLog } from './pages/userManagement/orgStructure/screens/historyLog/historyLog';
import CustomerReport from './pages/riskManagment/customerReport';
import CustomerDetailScreen from './pages/riskManagment/customerReport/customerDetails';
import { ProgrammeHistoryDetails } from './pages/productManagement/programmeManagement/screens/listComponents/ProgrammeHistoryDetails';
import ReTargetingDetails from './pages/lms/reTargeting/screens/reTargetingScreen/reTargetingDetails';
import { LMSHistoryLogDetails } from './pages/lms/lmsRule/lmsHistoryLog/lmsHistoryLogDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route
          path="/productManagement/cardCatalogue"
          element={<CardCatalogue />}
        />
        <Route
          path="/productManagement/cardCatalogue/bulkupload"
          element={<BulkUpload flag={'xlsFormat'} />}
        />
        <Route
          path="/productManagement/cardCatalogue/singleupload"
          element={<CreateNewCard />}
        />

        <Route
          path="/productManagement/programmeManagement"
          element={<ProgramManagement />}
        />

        <Route
          path="/productManagement/programmeManagement/:id"
          element={<ReviewerLogDetails />}
        />

        <Route
          path="/productManagement/cardCatalogue/reviewCard"
          element={<ReviewCard />}
        />
        <Route
          path="/productManagement/programmeManagement/ProgrammeHistoryDetails"
          element={<ProgrammeHistoryDetails />}
        />
        <Route
          path="/userManagement/branchDetails"
          element={<BranchDetails />}
        />
        <Route path="/userManagement/orgStructure" element={<OrgStructure />} />

        <Route
          path="/userManagement/orgStructure/screens/Onboarding/onboarding"
          element={<Onboarding />}
        />

        <Route
          path="/userManagement/orgStructure/screens/OrgReview/OrgReview"
          element={<OrgReview />}
        />

        <Route
          path="/userManagement/orgStructure/bulkUpload"
          element={<OrgBulkUpload />}
        />

        <Route path="/userManagement/roleCreation" element={<RoleCreation />} />
        <Route
          path="/userManagement/roleCreation/createRole"
          element={<CreateRole />}
        />

        <Route path="/userManagement/userCreation" element={<UserCreation />} />

        <Route
          path="/userManagement/userCreation/createUser"
          element={<CreateUser />}
        />

        <Route
          path="/userManagement/userCreation/editUser"
          element={<EditUser />}
        />

        <Route
          path="/userManagement/userCreation/viewUser"
          element={<ViewUser />}
        />

        <Route
          path="/userManagement/userCreation/bulkUpload"
          element={<UserBulkUpload />}
        />

        <Route path="/sales/salesDashboard" element={<SalesDashboard />} />

        <Route path="/sales/salesReport" element={<SalesReport />} />

        <Route
          path="/sales/performanceReport"
          element={<PerformanceReport />}
        />

        <Route
          path="/sales/salesReportDetails"
          element={<SalesReportDetails />}
        />
        <Route path="/accessLibrary" element={<AccessLibrary />} />

        <Route
          path="/userManagement/roleCreation/userdetails"
          element={<UserDetails />}
        />
        <Route
          path="/userManagement/orgStructure/historyLogDetail"
          element={<OrgHistoryLogDetails />}
        />
        <Route
          path="/userManagement/roleCreation/authorisationDetails"
          element={<AuthDetail />}
        />
        <Route
          path="/userManagement/roleCreation/historyLogDetail"
          element={<HistoryLogDetailScreen />}
        />

        <Route
          path="/userManagement/userCreation/historyLogDetail"
          element={<HistoryLogDetailScreen />}
        />

        {/* Catch all */}
        <Route path="*" element={<NotFoundPage />} />

        <Route
          path="/userManagement/roleCreation/authorisationDetails"
          element={<AuthDetail />}
        />

        <Route path="/lms/dashboard" element={<LMSDashboard />} />

        <Route path="/lms/retargeting" element={<Retargeting />} />

        <Route path="/lms/lmsRule" element={<LMSRule />} />
        <Route
          path="/lms/lmsRule/historyLogDetails"
          element={<LMSHistoryLogDetails />}
        />
        <Route path="/lms/lmsRule/addNewRule" element={<AddLMSRule />} />
        <Route path="/lms/lmsRule/viewRule" element={<ViewLMSRule />} />
        <Route path="/lms/lmsRule/editRule" element={<EditLMSRule />} />

        <Route
          path="/riskManagement/customerReports"
          element={<CustomerReport />}
        />
        <Route
          path="/riskManagement/customerDetails"
          element={<CustomerDetailScreen />}
        />
        <Route
          path="/lms/retargeting/reTargetingDetails"
          element={<ReTargetingDetails />}
        />
      </Route>
    </Routes>
  );
}
