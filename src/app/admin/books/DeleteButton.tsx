'use client';

import { Trash2 } from 'lucide-react';
import { useTransition } from 'react';
import { deleteBook } from '@/lib/actions';

export function DeleteBookButton({ id }: { id: string }) {
 const [isPending, startTransition] = useTransition();

 return (
 <button
 disabled={isPending}
 onClick={() => {
 if (confirm('Are you sure you want to delete this book?')) {
 startTransition(() => deleteBook(id));
 }
 }}
 className="p-2 text-red-400 hover:text-red-300 hover:bg-slate-700 rounded-lg disabled:opacity-50"
 >
 <Trash2 size={18} />
 </button>
 );
}
