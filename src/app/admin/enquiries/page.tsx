import { prisma } from '@/lib/prisma';
import { Mail, Phone, Calendar, School, MessageCircle, Filter, Download, Inbox } from 'lucide-react';
import { EnquiryActions } from './EnquiryActions';

export default async function EnquiriesPage() {
 const enquiries = await prisma.enquiry.findMany({
 orderBy: { createdAt: 'desc' },
 });

 return (
 <div className="pb-20">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
 <div>
 <h1 className="text-2xl font-black text-gray-800 tracking-tighter mb-2 ">Incoming Signals</h1>
 <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Encrypted Communication Log</p>
 </div>
 <div className="flex gap-4">
 <button className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:bg-slate-50 hover:text-gray-800 transition-all shadow-sm hover:shadow-md">
 <Filter size={18} />
 <span className="tracking-widest uppercase text-sm">Filter</span>
 </button>
 <button className="flex items-center gap-3 px-6 py-3 bg-primary border border-primary/50 text-white rounded-lg text-sm font-bold hover:bg-primary-hover hover:scale-105 transition-all shadow-[0_0_20px_var(--primary-glow)]">
 <Download size={18} />
 <span className="tracking-widest uppercase text-sm">Export Data</span>
 </button>
 </div>
 </div>

 <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-xl relative">
 <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

 <div className="overflow-x-auto relative z-10">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-gray-200/60">
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500">Source Identity</th>
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500">Contact Vector</th>
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500">Payload</th>
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500">Status</th>
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500">Timestamp</th>
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500"></th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-100">
 {enquiries.map((enquiry) => (
 <tr key={enquiry.id} className="group hover:bg-white transition-all duration-300">
 <td className="p-8">
 <div className="flex items-center gap-6">
 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-500 border border-gray-200 shadow-sm group-hover:border-primary/20 group-hover:text-primary group-hover:shadow-md transition-all">
 <School size={20} />
 </div>
 <div>
 <div className="font-black text-gray-800 text-lg leading-tight mb-2 tracking-tight group-hover:text-primary transition-colors">{enquiry.school}</div>
 <div className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-2">
 <div className="w-1 h-1 bg-primary rounded-lg" />
 {enquiry.name}
 </div>
 </div>
 </div>
 </td>
 <td className="p-8">
 <div className="space-y-3">
 <div className="flex items-center gap-3 text-sm text-gray-500 font-medium group-hover:text-gray-800 transition-colors">
 <Mail size={14} className="text-gray-500 group-hover:text-primary transition-colors" />
 {enquiry.email}
 </div>
 <div className="flex items-center gap-3 text-sm text-gray-500 font-medium group-hover:text-gray-800 transition-colors">
 <Phone size={14} className="text-gray-500 group-hover:text-primary transition-colors" />
 {enquiry.phone}
 </div>
 </div>
 </td>
 <td className="p-8">
 <div className="flex items-start gap-3 text-sm text-gray-600 bg-slate-50 p-4 rounded-lg border border-gray-200 max-w-[250px] group-hover:bg-white group-hover:shadow-sm transition-all">
 <MessageCircle size={14} className="text-gray-500 mt-1 flex-shrink-0" />
 <span className="leading-relaxed line-clamp-2">{enquiry.message}</span>
 </div>
 </td>
 <td className="p-8">
 <div className="flex">
 <span className={`px-4 py-2 rounded-lg text-sm font-black uppercase tracking-widest flex items-center gap-2 ${enquiry.status === 'NEW'
 ? 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'
 : 'bg-green-50 text-green-600 border border-green-100 shadow-sm'
 }`}>
 <div className={`w-1.5 h-1.5 rounded-lg animate-pulse ${enquiry.status === 'NEW' ? 'bg-blue-500' : 'bg-green-500'}`} />
 {enquiry.status}
 </span>
 </div>
 </td>
 <td className="p-8">
 <div className="flex items-center gap-3 text-gray-500 text-xs font-bold uppercase tracking-wider">
 <Calendar size={14} className="text-gray-500" />
 {new Date(enquiry.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
 </div>
 </td>
 <td className="p-8 text-right">
 <EnquiryActions id={enquiry.id} currentStatus={enquiry.status} />
 </td>
 </tr>
 ))}
 {enquiries.length === 0 && (
 <tr>
 <td colSpan={6} className="p-32 text-center">
 <div className="flex flex-col items-center gap-6">
 <div className="w-20 h-20 bg-slate-50 rounded-lg flex items-center justify-center text-gray-500 border border-gray-200">
 <Inbox size={32} />
 </div>
 <div>
 <p className="text-gray-800 font-black text-xl tracking-tight mb-2">No Signals Detected</p>
 <p className="text-gray-500 text-sm uppercase tracking-widest">Awaiting Transmission</p>
 </div>
 </div>
 </td>
 </tr>
 )}
 </tbody>
 </table>
 </div>
 </div>
 </div>
 );
}
