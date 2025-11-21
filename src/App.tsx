import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import TaskDashboard from "./pages/TaskDashboard";
import PendingTasks from "./pages/PendingTasks";
import CurrentTasks from "./pages/CurrentTasks";
import PreviousTasks from "./pages/PreviousTasks";
import TraysList from "./pages/TraysList";
import AddTray from "./pages/AddTray";
import MapTrayToSlot from "./pages/MapTrayToSlot";
import RetrieveTray from "./pages/RetrieveTray";
import ReleaseTray from "./pages/ReleaseTray";
import DeleteTray from "./pages/DeleteTray";
import RemoveTrayFromSlot from "./pages/RemoveTrayFromSlot";
import UpdateSlot from "./pages/UpdateSlot";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task-dashboard" element={<TaskDashboard />} />
          <Route path="/pending-tasks" element={<PendingTasks />} />
          <Route path="/current-tasks" element={<CurrentTasks />} />
          <Route path="/previous-tasks" element={<PreviousTasks />} />
          <Route path="/trays-list" element={<TraysList />} />
          <Route path="/add-tray" element={<AddTray />} />
          <Route path="/map-tray-to-slot" element={<MapTrayToSlot />} />
          <Route path="/retrieve-tray" element={<RetrieveTray />} />
          <Route path="/release-tray" element={<ReleaseTray />} />
          <Route path="/delete-tray" element={<DeleteTray />} />
          <Route path="/remove-tray-from-slot" element={<RemoveTrayFromSlot />} />
          <Route path="/update-slot" element={<UpdateSlot />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
