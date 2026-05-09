export const dynamic = 'force-dynamic';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
        <div className="flex bg-slate-50 min-h-screen text-gray-800 relative overflow-hidden font-sans -mt-[80px]">
            {/* Sidebar Shell */}
 <AdminSidebar />

 {/* Main Content Area */}
 <div style={{ marginLeft: '280px', width: '100%' }} className="relative z-10 transition-all duration-300">
 <main className="p-10 max-w-[1600px] mx-auto">
 {children}
 </main>
 </div>
 </div>
 );
}
