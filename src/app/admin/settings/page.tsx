import { prisma } from '@/lib/prisma';
import { SettingsForm } from './SettingsForm';

export default async function SettingsPage() {
 return (
 <div className="max-w-4xl pb-20">
 <div className="mb-12">
 <h1 className="text-2xl font-black text-gray-800 tracking-tighter mb-2 ">System Configuration</h1>
 <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Core Parameters & Diagnostics</p>
 </div>

 <SettingsForm />
 </div>
 );
}
