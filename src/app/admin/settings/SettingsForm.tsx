'use client';

import { useState } from 'react';
import { updatePassword } from '@/lib/actions';
import Button from '@/components/ui/Button';
import { Lock, EyeOff, Eye } from 'lucide-react';

export function SettingsForm() {
 const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
 const [loading, setLoading] = useState(false);
 const [showPassword, setShowPassword] = useState(false);

 async function handleSubmit(formData: FormData) {
 setLoading(true);
 setStatus(null);
 try {
 const result = await updatePassword(formData);
 if (result?.error) {
 setStatus({ type: 'error', message: result.error });
 } else {
 setStatus({ type: 'success', message: 'Password updated successfully. Please log in again if required.' });
 // @ts-ignore
 document.getElementById('password-form').reset();
 }
 } catch (error) {
 setStatus({ type: 'error', message: 'Failed to update settings.' });
 } finally {
 setLoading(false);
 }
 }

 return (
 <div className="bg-white rounded-lg p-10 border border-gray-200 relative overflow-hidden shadow-xl">
 <div className="flex items-center gap-4 mb-8">
 <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-gray-800 border border-gray-200">
 <Lock size={24} />
 </div>
 <h2 className="text-3xl font-black text-gray-800 tracking-tight">Security Credentials</h2>
 </div>

 {status && (
 <div className={`p-4 mb-6 rounded-lg border font-bold text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
 {status.message}
 </div>
 )}

 <form id="password-form" action={handleSubmit} className="space-y-6">
 <div className="space-y-2">
 <label className="text-sm font-black uppercase tracking-wider text-gray-500 ml-1">New Password</label>
 <div className="relative group">
 <input
 type={showPassword ? 'text' : 'password'}
 name="newPassword"
 required
 minLength={6}
 className="w-full bg-slate-50 border border-gray-200 rounded-lg p-4 text-gray-800 focus:ring-0 focus:border-primary focus:shadow-[0_0_20px_var(--primary-light)] outline-none transition-all font-bold tracking-tight"
 placeholder="Enter new password"
 />
 <button
 type="button"
 onClick={() => setShowPassword(!showPassword)}
 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600 transition-colors"
 >
 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
 </button>
 </div>
 </div>

 <div className="pt-6 flex justify-end">
 <Button type="submit" variant="primary" disabled={loading} className="shadow-[0_0_30px_var(--primary-glow)] hover:scale-105 transition-transform">
 {loading ? 'Updating...' : 'Update Password'}
 </Button>
 </div>
 </form>
 </div>
 );
}
