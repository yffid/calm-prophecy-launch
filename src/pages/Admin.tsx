import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { SEOHead } from '@/components/seo/SEOHead';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Users, Mail, Phone, Calendar, TrendingUp, Download, Loader2 } from 'lucide-react';

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  created_at: string;
  status: string;
  discount_code?: string;
  source?: string;
}

interface WaitlistStats {
  total: number;
  today: number;
  this_week: number;
}

const Admin = () => {
  const [waitlistEntries, setWaitlistEntries] = useState<WaitlistEntry[]>([]);
  const [stats, setStats] = useState<WaitlistStats>({ total: 0, today: 0, this_week: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchWaitlistData();
    fetchStats();
  }, []);

  const fetchWaitlistData = async () => {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWaitlistEntries(data || []);
    } catch (error: any) {
      console.error('Error fetching waitlist:', error);
      toast({
        title: "Error",
        description: "Failed to fetch waitlist data",
        variant: "destructive",
      });
    }
  };

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase.rpc('get_waitlist_stats');
      if (error) throw error;
      
      // Type guard to ensure data is the correct format
      if (data && typeof data === 'object' && 'total' in data && 'today' in data && 'this_week' in data) {
        setStats(data as unknown as WaitlistStats);
      } else {
        setStats({ total: 0, today: 0, this_week: 0 });
      }
    } catch (error: any) {
      console.error('Error fetching stats:', error);
      toast({
        title: "Error",
        description: "Failed to fetch statistics",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportToCSV = async () => {
    setIsExporting(true);
    
    try {
      const headers = ['Name', 'Email', 'Phone', 'Date', 'Status', 'Discount Code', 'Source'];
      const csvContent = [
        headers.join(','),
        ...waitlistEntries.map(entry => [
          `"${entry.name}"`,
          `"${entry.email}"`,
          `"${entry.phone || ''}"`,
          `"${formatDate(entry.created_at)}"`,
          `"${entry.status}"`,
          `"${entry.discount_code || ''}"`,
          `"${entry.source || ''}"`
        ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `momta-2028-waitlist-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Export successful",
        description: `Exported ${waitlistEntries.length} entries to CSV.`,
      });
    } catch (error) {
      console.error('Export error:', error);
      toast({
        title: "Export failed",
        description: "Failed to export data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <SEOHead
          title="Admin Dashboard - Momta 2028"
          description="Momta 2028 admin dashboard for managing waitlist and user data."
          canonical="https://momta.org/admin"
          noIndex={true}
        />
        
        <div className="min-h-screen bg-momta-night flex items-center justify-center">
          <div className="flex items-center space-x-3 text-momta-blue">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="text-lg font-medium">Loading admin dashboard...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Admin Dashboard - Momta 2028"
        description="Momta 2028 admin dashboard for managing waitlist and user data."
        canonical="https://momta.org/admin"
        noIndex={true}
      />
      
      <div className="min-h-screen bg-momta-night text-foreground p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold font-poppins">Momta 2028 Admin</h1>
              <p className="text-muted-foreground">Welcome back, {user?.email}</p>
            </div>
            <Button onClick={handleSignOut} variant="outline" className="gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-momta-blue" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Signups</p>
                  <p className="text-2xl font-bold">{stats.total.toLocaleString()}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-momta-blue" />
                <div>
                  <p className="text-sm text-muted-foreground">Today</p>
                  <p className="text-2xl font-bold">{stats.today.toLocaleString()}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-momta-blue" />
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">{stats.this_week.toLocaleString()}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Waitlist Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Waitlist Entries</h2>
                <Button 
                  onClick={exportToCSV} 
                  variant="glass" 
                  disabled={isExporting || waitlistEntries.length === 0}
                  className="gap-2"
                >
                  {isExporting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Exporting...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Export CSV
                    </>
                  )}
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-3 font-medium text-momta-slate-light">Name</th>
                      <th className="text-left p-3 font-medium text-momta-slate-light">Email</th>
                      <th className="text-left p-3 font-medium text-momta-slate-light">Phone</th>
                      <th className="text-left p-3 font-medium text-momta-slate-light">Date</th>
                      <th className="text-left p-3 font-medium text-momta-slate-light">Status</th>
                      <th className="text-left p-3 font-medium text-momta-slate-light">Discount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waitlistEntries.map((entry, index) => (
                      <motion.tr 
                        key={entry.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-3 font-medium text-momta-slate-light">{entry.name}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-momta-blue" />
                            <span className="text-momta-slate">{entry.email}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          {entry.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-momta-blue" />
                              <span className="text-momta-slate">{entry.phone}</span>
                            </div>
                          )}
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">
                          {formatDate(entry.created_at)}
                        </td>
                        <td className="p-3">
                          <span className="px-2 py-1 bg-momta-blue/20 text-momta-blue rounded-full text-xs font-medium">
                            {entry.status}
                          </span>
                        </td>
                        <td className="p-3">
                          {entry.discount_code && (
                            <code className="bg-white/10 px-2 py-1 rounded text-xs font-mono text-momta-blue-light">
                              {entry.discount_code}
                            </code>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>

                {waitlistEntries.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">No waitlist entries yet</p>
                    <p className="text-sm">Entries will appear here as users join the waitlist.</p>
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Admin;