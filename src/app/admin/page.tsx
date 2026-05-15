import { prisma } from "@/lib/prisma";
import {
  BookOpen,
  MessageSquare,
  Users,
  TrendingUp,
  Calendar,
  ArrowRight,
  PlusCircle,
  Inbox,
} from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getStats() {
  const bundleCount = await prisma.bundle.count();
  const enquiryCount = await prisma.enquiry.count();
  const newEnquiries = await prisma.enquiry.count({ where: { status: "NEW" } });

  return { bundleCount, enquiryCount, newEnquiries };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="pb-20">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-800 tracking-tighter mb-2 ">
            Mission Control
          </h1>
          <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
            System Status:{" "}
            <span className="text-emerald-600 font-bold glow-green">
              Nominal
            </span>
          </p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-sm font-black text-primary uppercase tracking-[0.5em] mb-2">
            Current Cycle
          </p>
          <p className="text-2xl font-bold text-gray-800 font-mono">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <StatsCard
          title="Active Curriculum"
          value={stats.bundleCount}
          icon={<BookOpen size={24} />}
          trend="Operating"
          color="primary"
        />
        <StatsCard
          title="Total Outreach"
          value={stats.enquiryCount}
          icon={<Users size={24} />}
          trend="Global Leads"
          color="accent"
        />
        <StatsCard
          title="Action Required"
          value={stats.newEnquiries}
          icon={<MessageSquare size={24} />}
          trend="Pending Review"
          color="amber"
          isStatus={true}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Quick Actions - Light Glass Panel */}
        <div className="bg-white rounded-lg p-10 border border-gray-200 shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/10">
                <PlusCircle size={24} />
              </div>
              <h2 className="text-3xl font-black text-gray-800 tracking-tight">
                Direct Commands
              </h2>
            </div>

            <div className="grid gap-6">
              <Link
                href="/admin/bundles/new"
                className="group/item flex items-center justify-between p-6 bg-white rounded-lg hover:bg-primary hover:border-primary border border-gray-200 shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-gray-500 shadow-inner group-hover/item:bg-white group-hover/item:text-primary transition-colors">
                    <BookOpen size={24} />
                  </div>
                  <span className="font-bold text-lg text-gray-600 group-hover/item:text-gray-800">
                    Initialize Bundle
                  </span>
                </div>
                <ArrowRight
                  size={24}
                  className="text-slate-300 group-hover/item:text-gray-800 -translate-x-4 group-hover/item:translate-x-0 transition-all"
                />
              </Link>

              <Link
                href="/admin/enquiries"
                className="group/item flex items-center justify-between p-6 bg-white rounded-lg hover:bg-white hover:text-gray-800 border border-gray-200 shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center text-gray-500 shadow-inner group-hover/item:bg-slate-800 group-hover/item:text-gray-800 transition-colors">
                    <Inbox size={24} />
                  </div>
                  <span className="font-bold text-lg text-gray-600 group-hover/item:text-gray-800">
                    Process Signals
                  </span>
                </div>
                <ArrowRight
                  size={24}
                  className="text-slate-300 group-hover/item:text-gray-800 -translate-x-4 group-hover/item:translate-x-0 transition-all"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* System Status - Light Panel */}
        <div className="bg-white rounded-lg p-10 border border-gray-200 shadow-xl relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-lg blur-[80px] -mr-32 -mt-32" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-gray-800 border border-gray-200">
                <TrendingUp size={24} />
              </div>
              <h2 className="text-3xl font-black text-gray-800 tracking-tight">
                Neural Network
              </h2>
            </div>

            <div className="space-y-8 flex-grow">
              <StatusRow
                label="Database Connection"
                status="Active"
                color="text-emerald-600"
              />
              <StatusRow
                label="CMS Synchronization"
                status="Global"
                color="text-emerald-600"
              />
              <StatusRow
                label="Public Access Node"
                status="Live"
                color="text-blue-600"
              />
            </div>

            <div className="mt-auto pt-10 flex items-center gap-4 text-sm font-black text-gray-500 uppercase tracking-wider border-t border-gray-200">
              <Calendar size={14} />
              Last Sync: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusRow({ label, status, color }: any) {
  return (
    <div className="flex items-center justify-between group">
      <span className="text-gray-500 font-bold tracking-wide group-hover:text-gray-800 transition-colors">
        {label}
      </span>
      <span
        className={`flex items-center gap-3 ${color} font-black text-sm uppercase tracking-wider`}
      >
        <div
          className={`w-2 h-2 rounded-lg currentColor shadow-[0_0_10px_currentColor] animate-pulse`}
          style={{ backgroundColor: "currentColor" }}
        />
        {status}
      </span>
    </div>
  );
}

function StatsCard({ title, value, icon, trend, color, isStatus }: any) {
  const colorMap: any = {
    primary:
      "text-mi-blue border-mi-blue/30 shadow-[0_0_30px_-10px_var(--mi-blue-light)]", // Mapped to Blue
    accent:
      "text-mi-red border-mi-red/30 shadow-[0_0_30px_-10px_var(--accent-glow)]",
    amber:
      "text-mi-yellow border-mi-yellow/30 shadow-[0_0_30px_-10px_var(--mi-yellow-light)]",
    green:
      "text-mi-green border-mi-green/30 shadow-[0_0_30px_-10px_var(--mi-green-light)]",
  };

  const activeColor = colorMap[color] || "text-gray-800 border-gray-200";

  return (
    <div
      className={`bg-white rounded-lg p-8 shadow-xl border border-gray-200 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl`}
    >
      {isStatus && value > 0 && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[60px] -mr-16 -mt-16 animate-pulse" />
      )}

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div
            className={`p-4 rounded-lg bg-slate-50 border border-gray-200 text-gray-800 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white group-hover:shadow-md`}
          >
            {icon}
          </div>
          {isStatus && value > 0 && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-red-100 border border-red-200">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-lg animate-ping" />
              <span className="text-sm font-black text-red-600 uppercase tracking-wider">
                Alert
              </span>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-gray-500 text-sm font-black uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-baseline gap-4">
            <p className={`text-2xl font-black tracking-tighter text-gray-800`}>
              {value}
            </p>
            <span className="text-xs font-bold text-gray-500 group-hover:text-gray-600 transition-colors">
              {trend}
            </span>
          </div>
        </div>
      </div>

      {/* Holographic Border Effect */}
      <div
        className={`absolute inset-0 border-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${activeColor.split(" ")[1]}`}
      />
    </div>
  );
}
