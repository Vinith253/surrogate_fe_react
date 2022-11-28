import { Route, Routes } from 'react-router-dom';

import { Layout, PrivateRoute } from './components';
import { Dashboard, HomePage, LoginPage, NotFoundPage } from './pages';
import BulkUpload from './pages/productManagement/cardCatalogue/bulkUpload';
import CreateNewCard from './pages/productManagement/cardCatalogue/createCard/createNewCard';
// import { CreateNewCard } from "./pages/productManagement/cardCatalogue/createCard/createNewCard";
import CardCatalogue from './pages/productManagement/cardCatalogue/landingScreen/cardTab';
import ProgramManagement from './pages/productManagement/programmeManagement/landingScreen';
import SalesDashboard from './pages/sales/dashboard';
import SalesReport from './pages/sales/salesReport';
import SalesReportDetails from './pages/sales/salesReport/reportDetails';

import ReviewCard from './pages/productManagement/cardCatalogue/reviewCard/reviewCard';
import AccessLibrary from './pages/accessLibrary/AccessLibrary';
import ReviewerLogDetails from './pages/productManagement/programmeManagement/screens/listComponents/ReviewerLogDetails';
import { Profile } from './pages/profile/Profile';
import { BranchDetails } from './pages/userManagement/branchDetails/landingScreen';
import { OrgStructure } from './pages/userManagement/orgStructure/landingScreen';
import { Onboarding } from './pages/userManagement/orgStructure/screens/Onboarding/onboarding';
import { RoleCreation } from './pages/userManagement/roleCreation/landingScreen';
import OrgBulkUpload from './pages/userManagement/orgStructure/orgBulkUpload';
import UserCreation from './pages/userManagement/userCreation';
import { CreateRole } from './pages/userManagement/roleCreation/createRole/createRole';
import CreateUser from './pages/userManagement/userCreation/createUser';
import { UserDetails } from './pages/userManagement/roleCreation/UserDetails/UserDetails';

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
        <Route path="/profile" element={<Profile />} />
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
          path="/productManagement/cardCatalogue/singleupload/reviewCard"
          element={<ReviewCard />}
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

        <Route path="/sales/salesDashboard" element={<SalesDashboard />} />

        <Route path="/sales/salesReport" element={<SalesReport />} />
        <Route
          path="/sales/salesReportDetails"
          element={<SalesReportDetails />}
        />
        <Route path="/accessLibrary" element={<AccessLibrary />} />

        {/* <Route
          path="/userManagement/roleCreation/userdetails"
          element={<UserDetails />}
        /> */}

        {/* Catch all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
