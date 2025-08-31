import { ThemeProvider } from '@/components/ui/theme-provider';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Updates from "./pages/Updates";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Router>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/research" element={<Research />} />
                <Route path="/auth" element={<Auth />} />

                {/* Protected Admin Routes */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute requireAdmin={true}>
                      <Admin />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Catch-all 404 route - MUST be last */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
