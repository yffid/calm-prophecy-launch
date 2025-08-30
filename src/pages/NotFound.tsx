import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { SEOHead } from '@/components/seo/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 errors for monitoring
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // In production, you might want to send this to an analytics service
    if (process.env.NODE_ENV === 'production') {
      // Example: analytics.track('404_error', { path: location.pathname });
    }
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found - Momta 2028"
        description="The page you're looking for doesn't exist. Return to Momta 2028 to explore the future of serene intelligence."
        canonical={`https://momta.org${location.pathname}`}
        noIndex={true}
      />
      
      <div className="min-h-screen bg-momta-night flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <GlassCard className="text-center space-y-8">
            {/* 404 Visual */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="relative mx-auto w-24 h-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-momta-blue to-momta-blue-light opacity-20 animate-momta-pulse"></div>
                <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-momta-blue/10 to-momta-blue-light/10 border border-momta-blue/20 flex items-center justify-center">
                  <span className="text-3xl font-bold font-poppins bg-gradient-to-r from-momta-blue to-momta-blue-light bg-clip-text text-transparent">
                    404
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold font-poppins text-momta-slate-light">
                  Page Not Found
                </h1>
                <p className="text-momta-slate">
                  The future you're looking for doesn't exist yet.
                </p>
              </div>
            </motion.div>

            {/* Current Path Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-3 bg-momta-night-light/30 rounded-lg border border-momta-slate-dark/20"
            >
              <p className="text-xs text-momta-slate-dark mb-1">Requested path:</p>
              <code className="text-sm text-momta-blue-light font-mono">
                {location.pathname}
              </code>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-3"
            >
              <Link to="/" className="block">
                <Button 
                  variant="glass" 
                  className="w-full gap-2"
                >
                  <Home className="w-4 h-4" />
                  Return to Momta 2028
                </Button>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-momta-slate hover:text-momta-slate-light transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </motion.div>

            {/* Help Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xs text-momta-slate-dark space-y-1"
            >
              <p>Lost? Contact us at support@momta.org</p>
              <p>The future is still being built.</p>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;