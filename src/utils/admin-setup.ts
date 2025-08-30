import { supabase } from '@/integrations/supabase/client';
import bcrypt from 'bcryptjs';

export const setupAdminUser = async () => {
  try {
    // Use the edge function to set up admin user
    const { data, error } = await supabase.functions.invoke('setup-admin', {
      body: { 
        email: 'momta@momta.org', 
        password: 'momta01090081223' 
      }
    });

    if (error) {
      console.error('Setup admin error:', error);
      return { success: false, error: error.message };
    }

    if (data.error) {
      console.error('Setup admin function error:', data.error);
      return { success: false, error: data.error };
    }

    console.log('Admin user setup successful:', data.message);
    return { success: true, message: data.message };
  } catch (error: any) {
    console.error('Setup admin exception:', error);
    return { success: false, error: error.message };
  }
};

// Utility function to check if current user is admin
export const checkAdminAccess = async (): Promise<boolean> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return false;

    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error checking admin access:', error);
      return false;
    }

    return !!data;
  } catch (error) {
    console.error('Admin access check failed:', error);
    return false;
  }
};