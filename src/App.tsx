import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import KillTeam from "./pages/KillTeam";
import ComingSoon from "./pages/ComingSoon";
import Guides from "./pages/Guides";
import Resources from "./pages/Resources";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/kill-team" element={<KillTeam />} />
            <Route
              path="/warhammer-40k"
              element={
                <ComingSoon
                  title="WARHAMMER 40,000"
                  description="Estamos preparando guías completas para Warhammer 40,000. Batallas épicas, facciones detalladas y estrategias avanzadas. ¡Próximamente!"
                />
              }
            />
            <Route
              path="/age-of-sigmar"
              element={
                <ComingSoon
                  title="AGE OF SIGMAR"
                  description="Pronto tendremos contenido dedicado a Age of Sigmar. Ejércitos, mecánicas de combate y guías para principiantes. ¡Mantente atento!"
                />
              }
            />
            <Route path="/guias" element={<Guides />} />
            <Route path="/recursos" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
