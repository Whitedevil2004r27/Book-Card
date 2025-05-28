
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventHome from "./pages/EventHome";
import Events from "./pages/Events";
import EventBookings from "./pages/EventBookings";
import EventProfile from "./pages/EventProfile";
import EventSettings from "./pages/EventSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EventHome />} />
          <Route path="/events" element={<Events />} />
          <Route path="/bookings" element={<EventBookings />} />
          <Route path="/profile" element={<EventProfile />} />
          <Route path="/settings" element={<EventSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
