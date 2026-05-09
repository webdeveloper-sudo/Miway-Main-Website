import { getAllSiteContent } from '@/lib/actions';
import ContentEditor from './ContentEditorFixed';

export const dynamic = 'force-dynamic';

export default async function ContentManagementPage() {
 const content = await getAllSiteContent();

 return (
 <div className="pb-20">
 <div className="mb-12">
 <h1 className="text-2xl font-black text-gray-800 tracking-tighter mb-2 ">Global Content Grid</h1>
 <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Manage Enterprise Data</p>
 </div>

 <ContentEditor initialContent={content} />
 </div>
 );
}
