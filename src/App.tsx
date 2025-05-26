import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { Loader } from "./Pages/Loader";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { Pricing } from "./Pages/Pricing";
import { LoginLoader } from "./Pages/LoginLoader";
import { DashboardLoader } from "./Pages/DashboardLoader";
import { PageNotFound } from "./Pages/PageNotFound";
import { CompletedDashboard } from "./Pages/CompletedDashboard";
import { ShareDashboard } from "./Pages/ShareDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/loginloader" element={<LoginLoader />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardLoader" element={<DashboardLoader />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/completedtodos" element={<CompletedDashboard />} />
        <Route path="/sharedtodos" element={<ShareDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
