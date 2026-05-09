import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Edit, Plus, Library } from 'lucide-react';
import { DeleteBookButton } from './DeleteButton';

export default async function BooksAdminPage({ searchParams }: { searchParams: { success?: string } }) {
 const books = await prisma.book.findMany({
 orderBy: { title: 'asc' },
 include: { bundle: true }
 });

 return (
 <div>
 {searchParams?.success && (
 <div className="mb-6 p-4 bg-green-50/80 border border-green-200 text-green-700 rounded-lg flex items-center justify-between animate-in fade-in slide-in-from-top-4">
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
 </div>
 <span className="font-bold text-sm">Asset updated successfully. Repository synchronized.</span>
 </div>
 </div>
 )}
 <div className="flex justify-between items-end mb-12">
 <div>
 <h1 className="text-2xl font-black text-gray-800 tracking-tighter mb-2 ">Library Core</h1>
 <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Manage Book Assets</p>
 </div>
 <Link href="/admin/books/new" className="flex items-center gap-3 px-6 py-3 bg-primary border border-primary/50 text-white rounded-lg text-sm font-bold hover:bg-primary-hover hover:scale-105 transition-all shadow-[0_0_20px_var(--primary-glow)]">
 <Plus size={20} />
 <span className="tracking-widest uppercase text-sm">Initialize Book</span>
 </Link>
 </div>

 <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-xl relative">
 <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

 <div className="overflow-x-auto relative z-10">
 <table className="w-full text-left">
 <thead>
 <tr className="border-b border-gray-200/60">
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500">Book Identity</th>
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500">Subject</th>
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500">Type</th>
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500">Bundle</th>
 <th className="p-8 text-sm font-black uppercase tracking-wider text-gray-500 text-right">Protocols</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-100">
 {books.map((book) => (
 <tr key={book.id} className="group hover:bg-white transition-all duration-300">
 <td className="p-8">
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-gray-500 border border-gray-200 group-hover:border-primary/20 group-hover:text-primary transition-all">
 <Library size={18} />
 </div>
 <div>
 <div className="font-black text-gray-800 text-xl tracking-tight group-hover:text-primary transition-colors ">{book.title}</div>
 <div className="text-sm font-mono text-gray-500 mt-1">{book.id}</div>
 </div>
 </div>
 </td>
 <td className="p-8">
 <span className="px-4 py-2 rounded-lg bg-slate-100 border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
 {book.subject}
 </span>
 </td>
 <td className="p-8">
 <span className="text-sm font-medium text-gray-600">{book.type}</span>
 </td>
 <td className="p-8">
 <span className="text-sm font-bold text-gray-800">{book.bundle?.title || 'Unassigned'}</span>
 </td>
 <td className="p-8">
 <div className="flex gap-3 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
 <Link href={`/admin/books/${book.id}/edit`} className="p-3 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-all border border-transparent hover:border-primary/20">
 <Edit size={18} />
 </Link>
 <DeleteBookButton id={book.id} />
 </div>
 </td>
 </tr>
 ))}
 {books.length === 0 && (
 <tr>
 <td colSpan={5} className="p-32 text-center text-gray-500">
 No active books found. Initialize a new sequence.
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
