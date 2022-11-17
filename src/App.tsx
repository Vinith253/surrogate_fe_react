import { Route, Routes } from 'react-router-dom';

import { Layout, PrivateRoute } from './components';
import { Dashboard, HomePage, LoginPage, NotFoundPage } from './pages';
import BulkUpload from './pages/productManagement/cardCatalogue/bulkUpload';
import CreateNewCard from './pages/productManagement/cardCatalogue/createCard/createNewCard';
// import { CreateNewCard } from "./pages/productManagement/cardCatalogue/createCard/createNewCard";
import CardCatalogue from './pages/productManagement/cardCatalogue/landingScreen/cardTab';
import ProgramManagement from './pages/productManagement/programmeManagement/landingScreen';
import SalesDashboard from './pages/sales/dashboard/Dashboard';
import SalesReport from './pages/sales/salesReport';
import SalesReportDetails from './pages/sales/salesReport/reportDetails';

import ReviewCard from './pages/productManagement/cardCatalogue/reviewCard/reviewCard';
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
          path="/productManagement/cardCatalogue/singleupload/reviewCard"
          element={<ReviewCard />}
        />

        <Route path="/sales/salesDashboard" element={<SalesDashboard />} />

        <Route path="/sales/salesReport" element={<SalesReport />} />
        <Route
          path="/sales/salesReportDetails"
          element={<SalesReportDetails />}
        />

        {/* Catch all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
