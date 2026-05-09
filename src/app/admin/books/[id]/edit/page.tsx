import { prisma } from '@/lib/prisma';
import Button from '@/components/ui/Button';
import { updateBook } from '@/lib/actions';
import { ArrowLeft, Box } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EditBookPage({ params }: { params: { id: string } }) {
 const book = await prisma.book.findUnique({
 where: { id: params.id }
 });

 if (!book) {
 return notFound();
 }

 const bundles = await prisma.bundle.findMany({
 orderBy: { title: 'asc' }
 });

 const updateAction = updateBook.bind(null, params.id);

 return (
 <div className="max-w-4xl mx-auto pb-20">
 <div className="mb-10">
 <Link href="/admin/books" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors mb-6 group">
 <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
 <span className="text-xs font-bold uppercase tracking-widest">Abort & Return</span>
 </Link>
 <h1 className="text-2xl font-black text-gray-800 tracking-tighter mb-2 ">Modify Asset</h1>
 <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Update Book details</p>
 </div>

 <div className="bg-white rounded-lg p-10 border border-gray-200 relative overflow-hidden shadow-2xl">
 <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-lg blur-[80px] -mr-32 -mt-32 pointer-events-none" />

 <form action={updateAction} className="space-y-8 relative z-10">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="space-y-2">
 <label className="text-sm font-black uppercase tracking-wider text-gray-500 ml-1">Asset Identity</label>
 <div className="relative group">
 <input
 type="text"
 name="title"
 defaultValue={book.title}
 required
 className="w-full bg-white border border-gray-200 rounded-lg p-4 text-gray-800 placeholder:text-gray-600 focus:ring-0 focus:border-orange-500 focus:shadow-[0_0_20px_rgba(249,115,22,0.4)] outline-none transition-all font-bold tracking-tight"
 />
 <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-orange-500 transition-colors">
 <Box size={20} />
 </div>
 </div>
 </div>

 <div className="space-y-2">
 <label className="text-sm font-black uppercase tracking-wider text-gray-500 ml-1">Subject Matter</label>
 <input
 type="text"
 name="subject"
 defaultValue={book.subject}
 required
 className="w-full bg-white border border-gray-200 rounded-lg p-4 text-gray-800 placeholder:text-gray-600 focus:ring-0 focus:border-orange-500 focus:shadow-[0_0_20px_rgba(249,115,22,0.4)] outline-none transition-all font-mono text-sm"
 />
 </div>
 </div>

 <div className="grid md:grid-cols-2 gap-8">
 <div className="space-y-2">
 <label className="text-sm font-black uppercase tracking-wider text-gray-500 ml-1">Asset Type</label>
 <div className="relative">
 <select
 name="type"
 defaultValue={book.type}
 required
 className="w-full bg-white border border-gray-200 rounded-lg p-4 text-gray-800 focus:ring-0 focus:border-orange-500 focus:shadow-[0_0_20px_rgba(249,115,22,0.4)] outline-none transition-all font-bold appearance-none cursor-pointer hover:bg-white"
 >
 <option value="" className="bg-white text-gray-500">Select Type</option>
 <option value="Textbook" className="bg-white">Textbook</option>
 <option value="Workbook" className="bg-white">Workbook</option>
 <option value="Teacher Guide" className="bg-white">Teacher Guide</option>
 </select>
 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 </div>
 </div>
 </div>

 <div className="space-y-2">
 <label className="text-sm font-black uppercase tracking-wider text-gray-500 ml-1">Assigned Bundle</label>
 <div className="relative">
 <select
 name="bundleId"
 defaultValue={book.bundleId}
 required
 className="w-full bg-white border border-gray-200 rounded-lg p-4 text-gray-800 focus:ring-0 focus:border-orange-500 focus:shadow-[0_0_20px_rgba(249,115,22,0.4)] outline-none transition-all font-bold appearance-none cursor-pointer hover:bg-white"
 >
 <option value="" className="bg-white text-gray-500">Select Bundle</option>
 {bundles.map((bundle) => (
 <option key={bundle.id} value={bundle.id} className="bg-white">{bundle.title}</option>
 ))}
 </select>
 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 </div>
 </div>
 </div>
 </div>

 <div className="pt-6 border-t border-gray-200 flex items-center justify-end gap-6">
 <Link href="/admin/books" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-800 transition-colors">
 Cancel
 </Link>
 <Button type="submit" variant="primary" className="shadow-[0_0_30px_var(--primary-glow)] hover:scale-105 transition-transform">
 Save Changes
 </Button>
 </div>
 </form>
 </div>
 </div>
 );
}
