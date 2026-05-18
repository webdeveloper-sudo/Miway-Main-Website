import { prisma } from "@/lib/prisma";
import {
  Mail,
  Phone,
  Calendar,
  School,
  MessageCircle,
  Download,
  Inbox,
  CheckCircle2,
  Clock,
  BarChart3,
  Users,
} from "lucide-react";
import { EnquiryActions } from "./EnquiryActions";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function EnquiriesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const statusFilter =
    typeof resolvedSearchParams.status === "string" ? resolvedSearchParams.status : "ALL";

  const where = statusFilter !== "ALL" ? { status: statusFilter } : undefined;

  const [enquiries, totalCount, newCount, doneCount] = await Promise.all([
    prisma.enquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
    }),
    prisma.enquiry.count(),
    prisma.enquiry.count({ where: { status: "NEW" } }),
    prisma.enquiry.count({ where: { status: "DONE" } }),
  ]);

  const tabs = [
    { label: "All", value: "ALL", count: totalCount },
    { label: "New", value: "NEW", count: newCount },
    { label: "Done", value: "DONE", count: doneCount },
  ];

  return (
    <div className="pb-20">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h1 className="text-2xl font-black text-gray-800 tracking-tighter mb-1">
            Enquiries
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-wider text-xs">
            Partnership Requests &amp; Incoming Signals
          </p>
        </div>

        {/* CSV Export */}
        <a
          href="/api/enquiry/export"
          className="flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-md"
        >
          <Download size={16} />
          <span className="tracking-widest uppercase text-sm">Export CSV</span>
        </a>
      </div>

      {/* ── Summary Cards ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <StatCard
          label="Total Enquiries"
          value={totalCount}
          icon={<Users size={20} />}
          color="blue"
        />
        <StatCard
          label="Awaiting Action"
          value={newCount}
          icon={<Clock size={20} />}
          color="amber"
          pulse={newCount > 0}
        />
        <StatCard
          label="Completed"
          value={doneCount}
          icon={<CheckCircle2 size={20} />}
          color="green"
        />
      </div>

      {/* ── Filter Tabs ────────────────────────────────────────────── */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => {
          const active = statusFilter === tab.value;
          return (
            <Link
              key={tab.value}
              href={
                tab.value === "ALL"
                  ? "/admin/enquiries"
                  : `/admin/enquiries?status=${tab.value}`
              }
              className={`px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all border ${
                active
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-gray-500 border-gray-200 hover:border-primary/30 hover:text-gray-800"
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 px-2 py-0.5 rounded-full text-xs font-black ${
                  active
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {tab.count}
              </span>
            </Link>
          );
        })}
      </div>

      {/* ── Table ──────────────────────────────────────────────────── */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-slate-50">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">
                  Contact
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">
                  School / Institution
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">
                  Email &amp; Phone
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">
                  Message
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">
                  Date
                </th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {enquiries.map((enquiry) => (
                <tr
                  key={enquiry.id}
                  className="group hover:bg-slate-50/60 transition-colors duration-200"
                >
                  {/* Name */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">
                        {enquiry.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors">
                          {enquiry.name}
                        </p>
                        <p className="text-xs text-gray-400 font-medium mt-0.5">
                          #{enquiry.id.slice(-6).toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* School */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <School size={14} className="text-gray-400 shrink-0" />
                      <span className="max-w-[160px] truncate">
                        {enquiry.school || "—"}
                      </span>
                    </div>
                  </td>

                  {/* Email + Phone */}
                  <td className="px-6 py-5">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={13} className="text-gray-400 shrink-0" />
                        <a
                          href={`mailto:${enquiry.email}`}
                          className="hover:text-primary hover:underline transition-colors truncate max-w-[180px]"
                        >
                          {enquiry.email}
                        </a>
                      </div>
                      {enquiry.phone && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Phone size={13} className="text-gray-400 shrink-0" />
                          <a
                            href={`tel:${enquiry.phone}`}
                            className="hover:text-primary hover:underline transition-colors"
                          >
                            {enquiry.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Message */}
                  <td className="px-6 py-5">
                    <div className="flex items-start gap-2 text-sm text-gray-500 bg-slate-50 px-3 py-2 rounded-lg border border-gray-100 max-w-[220px] group-hover:bg-white group-hover:shadow-sm transition-all">
                      <MessageCircle
                        size={13}
                        className="text-gray-400 mt-0.5 shrink-0"
                      />
                      <span className="line-clamp-2 leading-relaxed">
                        {enquiry.message || "—"}
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <StatusBadge status={enquiry.status} />
                  </td>

                  {/* Date */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wide whitespace-nowrap">
                      <Calendar size={12} />
                      {new Date(enquiry.createdAt).toLocaleDateString(
                        undefined,
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </div>
                    <div className="text-xs text-gray-300 mt-1">
                      {new Date(enquiry.createdAt).toLocaleTimeString(
                        undefined,
                        { hour: "2-digit", minute: "2-digit" },
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5 text-right">
                    <EnquiryActions
                      id={enquiry.id}
                      currentStatus={enquiry.status}
                    />
                  </td>
                </tr>
              ))}

              {enquiries.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-28 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-gray-300 border border-gray-100">
                        <Inbox size={28} />
                      </div>
                      <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
                        No enquiries found
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer row */}
        {enquiries.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-100 bg-slate-50 flex items-center justify-between">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              Showing {enquiries.length}{" "}
              {statusFilter !== "ALL" ? statusFilter.toLowerCase() : ""} enquier
              {enquiries.length !== 1 ? "ies" : "y"}
            </p>
            <BarChart3 size={16} className="text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    NEW: "bg-blue-50 text-blue-600 border-blue-100",
    DONE: "bg-emerald-50 text-emerald-600 border-emerald-100",
  };
  const dots: Record<string, string> = {
    NEW: "bg-blue-500",
    DONE: "bg-emerald-500",
  };
  const style = styles[status] ?? "bg-gray-50 text-gray-500 border-gray-100";
  const dot = dots[status] ?? "bg-gray-400";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest border ${style}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${dot} ${status === "NEW" ? "animate-pulse" : ""}`}
      />
      {status}
    </span>
  );
}

function StatCard({
  label,
  value,
  icon,
  color,
  pulse,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: "blue" | "amber" | "green";
  pulse?: boolean;
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    green: "bg-emerald-50 text-emerald-600 border-emerald-100",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      {pulse && value > 0 && (
        <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
      )}
      <div
        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border mb-4 ${colors[color]}`}
      >
        {icon}
      </div>
      <p className="text-3xl font-black text-gray-800 mb-1">{value}</p>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
