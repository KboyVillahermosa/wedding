'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

interface RSVP {
  id: string;
  primary_name: string;
  email: string;
  message: string | null;
  status: 'pending' | 'attend' | 'decline';
  submitted_at: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const localAuth = localStorage.getItem('admin_authenticated');
      
      if (!session && !localAuth) {
        router.push('/admin/login');
        return;
      }

      setIsAuthenticated(true);
      fetchRSVPs();
    };

    checkAuth();
  }, [router]);

  const fetchRSVPs = async () => {
    try {
      setIsLoading(true);
      const { data, error: fetchError } = await supabase
        .from('rsvps')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setRsvps(data || []);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch RSVPs';
      setError(message);
      console.error('Error fetching RSVPs:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: 'attend' | 'decline' | 'pending') => {
    try {
      const { error: updateError } = await supabase
        .from('rsvps')
        .update({ status: newStatus })
        .eq('id', id);

      if (updateError) {
        throw updateError;
      }

      // Update local state
      setRsvps(rsvps.map(rsvp => 
        rsvp.id === id ? { ...rsvp, status: newStatus } : rsvp
      ));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to update status';
      setError(message);
      console.error('Error updating status:', err);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('admin_authenticated');
    router.push('/admin/login');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="font-poppins text-emerald-800">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-emerald-900 mb-2">
              RSVP Dashboard
            </h1>
            <p className="font-poppins text-emerald-700">
              Manage and view all wedding RSVPs
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-poppins font-medium px-6 py-2.5 rounded-full transition-colors duration-200"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-poppins text-sm text-emerald-600 mb-1">Total RSVPs</p>
                <p className="font-playfair text-3xl font-bold text-emerald-900">{rsvps.length}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💌</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-poppins text-sm text-emerald-600 mb-1">Attending</p>
                <p className="font-playfair text-3xl font-bold text-emerald-900">
                  {rsvps.filter(r => r.status === 'attend').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-poppins text-sm text-emerald-600 mb-1">Declined</p>
                <p className="font-playfair text-3xl font-bold text-emerald-900">
                  {rsvps.filter(r => r.status === 'decline').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">❌</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-poppins text-sm text-emerald-600 mb-1">Pending</p>
                <p className="font-playfair text-3xl font-bold text-emerald-900">
                  {rsvps.filter(r => r.status === 'pending' || !r.status).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-poppins text-sm text-emerald-600 mb-1">This Week</p>
                <p className="font-playfair text-3xl font-bold text-emerald-900">
                  {rsvps.filter(r => {
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return new Date(r.submitted_at) >= weekAgo;
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-poppins text-sm text-emerald-600 mb-1">Today</p>
                <p className="font-playfair text-3xl font-bold text-emerald-900">
                  {rsvps.filter(r => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return new Date(r.submitted_at) >= today;
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP List */}
        <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
          <div className="p-6 border-b border-emerald-100">
            <h2 className="font-playfair text-2xl font-bold text-emerald-900">
              All RSVPs
            </h2>
          </div>

          {isLoading ? (
            <div className="p-12 text-center">
              <p className="font-poppins text-emerald-700">Loading RSVPs...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 inline-block">
                <p className="font-poppins text-sm text-red-800">{error}</p>
              </div>
            </div>
          ) : rsvps.length === 0 ? (
            <div className="p-12 text-center">
              <p className="font-poppins text-emerald-700">No RSVPs yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-poppins font-semibold text-emerald-900">Name</th>
                    <th className="px-6 py-4 text-left font-poppins font-semibold text-emerald-900">Email</th>
                    <th className="px-6 py-4 text-left font-poppins font-semibold text-emerald-900">Message</th>
                    <th className="px-6 py-4 text-left font-poppins font-semibold text-emerald-900">Status</th>
                    <th className="px-6 py-4 text-left font-poppins font-semibold text-emerald-900">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100">
                  {rsvps.map((rsvp) => (
                    <tr key={rsvp.id} className="hover:bg-emerald-50/50 transition-colors">
                      <td className="px-6 py-4 font-poppins text-emerald-900 font-medium">{rsvp.primary_name}</td>
                      <td className="px-6 py-4 font-poppins text-emerald-700">{rsvp.email}</td>
                      <td className="px-6 py-4 font-poppins text-emerald-700">
                        {rsvp.message || <span className="text-emerald-400 italic">No message</span>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <select
                            value={rsvp.status || 'pending'}
                            onChange={(e) => updateStatus(rsvp.id, e.target.value as 'attend' | 'decline' | 'pending')}
                            className={`font-poppins text-sm font-semibold px-3 py-1.5 rounded-full border-2 transition-all duration-200 cursor-pointer ${
                              rsvp.status === 'attend'
                                ? 'bg-green-100 border-green-300 text-green-700 hover:bg-green-200'
                                : rsvp.status === 'decline'
                                ? 'bg-red-100 border-red-300 text-red-700 hover:bg-red-200'
                                : 'bg-amber-100 border-amber-300 text-amber-700 hover:bg-amber-200'
                            }`}
                          >
                            <option value="pending">⏳ Pending</option>
                            <option value="attend">✅ Attend</option>
                            <option value="decline">❌ Decline</option>
                          </select>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-poppins text-sm text-emerald-600">
                        {new Date(rsvp.submitted_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

