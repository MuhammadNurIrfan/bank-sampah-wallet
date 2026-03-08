import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import ProfileSetup from "./pages/ProfileSetup";
import Home from "./pages/Home";
import RecycleSubmit from "./pages/RecycleSubmit";
import QRScan from "./pages/QRScan";
import RewardWallet from "./pages/RewardWallet";
import ImpactDashboard from "./pages/ImpactDashboard";
import RecycleMap from "./pages/RecycleMap";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/admin/AdminLayout";
import AdminRouteGuard from "./components/admin/AdminRouteGuard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminTransactions from "./pages/admin/AdminTransactions";
import AdminStations from "./pages/admin/AdminStations";
import AdminRewards from "./pages/admin/AdminRewards";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recycle" element={<RecycleSubmit />} />
          <Route path="/scan" element={<QRScan />} />
          <Route path="/wallet" element={<RewardWallet />} />
          <Route path="/impact" element={<ImpactDashboard />} />
          <Route path="/map" element={<RecycleMap />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminRouteGuard />}>
            <Route element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="transactions" element={<AdminTransactions />} />
              <Route path="stations" element={<AdminStations />} />
              <Route path="rewards" element={<AdminRewards />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
