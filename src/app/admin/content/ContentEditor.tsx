"use client";

import { useState } from "react";
import { updateSiteContent } from "@/lib/actions";
import Button from "@/components/ui/Button";
import {
  Edit2,
  Save,
  X,
  FileText,
  CheckCircle2,
  Clock,
  Search,
  Layout,
} from "lucide-react";

interface ContentEditorProps {
  initialContent: Array<{
    id: string;
    key: string;
    content: string;
    updatedAt: Date;
  }>;
}

export default function ContentEditor({ initialContent }: ContentEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Group content by prefix
  const groupedContent = content.reduce(
    (acc, item) => {
      const prefix = item.key.split("_")[0];
      const label = prefix.charAt(0).toUpperCase() + prefix.slice(1);

      if (!acc[label]) {
        acc[label] = [];
      }
      acc[label].push(item);
      return acc;
    },
    {} as Record<string, typeof content>,
  );

  const handleEdit = (key: string, currentValue: string) => {
    console.log("Edit button clicked:", key);
    setEditingKey(key);
    setEditValue(currentValue);
  };

  const handleSave = async (key: string) => {
    setSaving(true);
    try {
      await updateSiteContent(key, editValue);

      // Update local state
      setContent((prev) =>
        prev.map((item) =>
          item.key === key
            ? { ...item, content: editValue, updatedAt: new Date() }
            : item,
        ),
      );

      setEditingKey(null);
    } catch (error) {
      console.error("Failed to save:", error);
      alert("Failed to save content");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditingKey(null);
    setEditValue("");
  };

  const getReadableLabel = (key: string) => {
    const parts = key.split("_");
    return parts
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="relative pt-24 pb-20">
      {/* Fixed Search and Filters Bar */}
      <div className="bg-white/80 backdrop-blur-xl p-4 border-b border-gray-200 fixed z-50 top-0 left-[280px] right-0 shadow-sm flex items-center gap-4 px-10">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search content by key or text..."
            className="w-full pl-12 pr-4 py-2.5 bg-slate-50/50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {Object.keys(groupedContent).map((page) => (
            <button
              key={page}
              className="px-4 py-2 bg-slate-50 border border-gray-200 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-500 hover:bg-slate-100 transition-colors"
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {Object.entries(groupedContent).map(([page, items]) => {
        const filteredItems = items.filter(
          (item) =>
            item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.content.toLowerCase().includes(searchTerm.toLowerCase()),
        );

        if (filteredItems.length === 0) return null;

        return (
          <div key={page} className="relative group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Layout size={20} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-800 tracking-tight">
                  {page} Page
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  {filteredItems.length} Editable Fields
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.key}
                  className={`bg-white rounded-lg border transition-all duration-300 ${editingKey === item.key ? "border-primary shadow-xl ring-4 ring-primary/5" : "border-gray-200 shadow-sm hover:shadow-md hover:border-gray-200"}`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 leading-none mb-2">
                          {getReadableLabel(item.key)}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold uppercase tracking-widest text-gray-500 bg-slate-50 px-2 py-0.5 rounded border border-gray-200">
                            {item.key}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                        <Clock size={12} />
                        Last updated{" "}
                        {new Date(item.updatedAt).toISOString().split("T")[0]}
                      </div>
                    </div>

                    {editingKey === item.key ? (
                      <div className="space-y-4">
                        <div className="relative">
                          <textarea
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="w-full min-h-[160px] p-4 bg-slate-50 border border-gray-200 rounded-lg text-gray-800 focus:bg-white focus:border-primary outline-none resize-y transition-all font-medium leading-relaxed"
                            placeholder="Enter content..."
                          />
                          <div className="absolute bottom-4 right-4 text-sm font-bold text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                            {editValue.length} Characters
                          </div>
                        </div>
                        <div className="flex gap-3 justify-end pt-2">
                          <button
                            onClick={handleCancel}
                            className="px-6 py-2.5 rounded-lg text-sm font-bold text-gray-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                            disabled={saving}
                          >
                            <X size={16} /> Cancel
                          </button>
                          <button
                            onClick={() => handleSave(item.key)}
                            className="px-8 py-2.5 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center gap-2"
                            disabled={saving}
                          >
                            {saving ? (
                              <Clock size={16} className="animate-spin" />
                            ) : (
                              <Save size={16} />
                            )}
                            {saving ? "Saving Changes..." : "Save Changes"}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="group/content relative">
                        <div className="p-4 bg-slate-50 rounded-lg border border-gray-200 text-gray-800 whitespace-pre-line leading-relaxed min-h-[80px]">
                          {item.content || (
                            <em className="text-gray-500">
                              No content provided
                            </em>
                          )}
                        </div>
                        <button
                          onClick={() => handleEdit(item.key, item.content)}
                          className="absolute top-3 right-3 p-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-500 opacity-0 group-hover/content:opacity-100 hover:text-primary hover:border-primary/30 transition-all"
                          title="Quick Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="flex items-center gap-1.5 text-green-600 text-sm font-bold uppercase tracking-wider">
                            <CheckCircle2 size={12} /> Synchronized
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              console.log("Direct Edit clicked for:", item.key);
                              handleEdit(item.key, item.content);
                            }}
                            className="text-primary text-sm font-bold hover:underline transition-all cursor-pointer"
                          >
                            Edit Field
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
