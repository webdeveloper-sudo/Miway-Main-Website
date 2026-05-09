'use client';

import { useTransition } from 'react';
import { updateEnquiryStatus, deleteEnquiry } from '@/lib/actions';
import { CheckCircle, Trash2 } from 'lucide-react';

export function EnquiryActions({ id, currentStatus }: { id: string; currentStatus: string }) {
 const [isPending, startTransition] = useTransition();

 return (
 <div className="flex gap-2 justify-end">
 {currentStatus === 'NEW' && (
 <button
 disabled={isPending}
 onClick={() => startTransition(() => updateEnquiryStatus(id, 'DONE'))}
 className="p-2 text-green-500 hover:text-green-600 hover:bg-green-50 rounded-lg disabled:opacity-50 transition-colors"
 title="Mark as Done"
 >
 <CheckCircle size={18} />
 </button>
 )}
 <button
 disabled={isPending}
 onClick={() => {
 if (confirm('Are you sure you want to delete this enquiry?')) {
 startTransition(() => deleteEnquiry(id));
 }
 }}
 className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-lg disabled:opacity-50 transition-colors"
 title="Delete"
 >
 <Trash2 size={18} />
 </button>
 </div>
 );
}
