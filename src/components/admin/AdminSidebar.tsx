'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, MessageSquare, LogOut, Settings, FileText, Library } from 'lucide-react';
import { signOut } from 'next-auth/react';
import styles from './sidebar.module.css';

export default function AdminSidebar() {
 const pathname = usePathname();

 const links = [
 { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, color: 'text-mi-blue', bg: 'bg-mi-blue/10', border: 'border-mi-blue/30', glow: 'shadow-[0_0_20px_rgba(0,136,204,0.4)]', bar: 'bg-mi-blue' },
 { name: 'Bundles', href: '/admin/bundles', icon: BookOpen, color: 'text-mi-yellow', bg: 'bg-mi-yellow/10', border: 'border-mi-yellow/30', glow: 'shadow-[0_0_20px_rgba(249,178,51,0.4)]', bar: 'bg-mi-yellow' },
 { name: 'Books', href: '/admin/books', icon: Library, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30', glow: 'shadow-[0_0_20px_rgba(249,115,22,0.4)]', bar: 'bg-orange-500' },
 { name: 'Content', href: '/admin/content', icon: FileText, color: 'text-mi-purple', bg: 'bg-mi-purple/10', border: 'border-mi-purple/30', glow: 'shadow-[0_0_20px_rgba(102,45,145,0.4)]', bar: 'bg-mi-purple' },
 { name: 'Enquiries', href: '/admin/enquiries', icon: MessageSquare, color: 'text-mi-green', bg: 'bg-mi-green/10', border: 'border-mi-green/30', glow: 'shadow-[0_0_20px_rgba(118,188,33,0.4)]', bar: 'bg-mi-green' },
 { name: 'Settings', href: '/admin/settings', icon: Settings, color: 'text-gray-500', bg: 'bg-slate-100', border: 'border-gray-200', glow: 'shadow-none', bar: 'bg-slate-500' },
 ];

 return (
 <aside className="fixed left-0 top-0 h-screen w-[280px] bg-white border-r border-gray-200/60 z-50 flex flex-col justify-between shadow-2xl">
 {/* Branding Area - Official Logo Recreation */}
 <div className="p-10">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-2 h-2 bg-mi-red rounded-lg animate-pulse" />
 <span className="text-sm font-black uppercase tracking-[0.4em] text-gray-500">Command Center</span>
 </div>

 <div className="flex items-center gap-1">
 {/* Mi Box - Red */}
 <div className="bg-mi-red px-2 py-1 rounded-lg shadow-[0_0_15px_rgba(237,28,36,0.3)]">
 <span className="text-3xl font-black text-gray-800 tracking-tighter font-sans">Mi</span>
 </div>
 {/* WAY Text - Dark for Light Mode */}
 <span className="text-3xl font-black text-gray-800 tracking-tighter font-sans pl-1">WAY</span>
 <span className="text-xs font-bold text-gray-500 self-end mb-1 ml-1">OS</span>
 </div>
 </div>

 {/* Navigation */}
 <nav className="flex-1 px-6 space-y-3 overflow-y-auto">
 {links.map((link) => {
 const Icon = link.icon;
 const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/admin');

 return (
 <Link
 key={link.href}
 href={link.href}
 className={`flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 group relative overflow-hidden ${isActive
 ? `${link.bg} text-gray-800 ${link.glow} border ${link.border}`
 : 'text-gray-500 hover:bg-slate-100 hover:text-gray-800 border border-transparent'
 }`}
 >
 {isActive && <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 ${link.bar} rounded-r-full shadow-[0_0_10px_currentColor]`} />}
 <Icon size={20} className={`transition-transform duration-300 ${isActive ? `${link.color} scale-110 drop-shadow-md` : 'group-hover:scale-110'}`} />
 <span className="font-bold tracking-wide text-sm">{link.name}</span>
 </Link>
 );
 })}
 </nav>

 {/* User Area */}
 <div className="p-6 border-t border-gray-200/60 bg-slate-50/50">
 <button
 onClick={() => signOut()}
 className="flex items-center gap-4 w-full px-6 py-4 rounded-lg text-gray-500 hover:bg-mi-red/10 hover:text-mi-red hover:border-mi-red/20 border border-transparent transition-all group"
 >
 <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
 <span className="font-bold text-sm tracking-wide">Disconnect</span>
 </button>
 </div>
 </aside>
 );
}
