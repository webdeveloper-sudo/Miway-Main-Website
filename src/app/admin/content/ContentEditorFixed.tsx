"use client";

import { useState, useRef } from "react";
import { updateSiteContent, uploadImage } from "@/lib/actions";
import {
  Edit2,
  Save,
  X,
  CheckCircle2,
  Clock,
  Search,
  Layout,
  Terminal,
  Image as ImageIcon,
  Upload,
  Loader2,
} from "lucide-react";

interface ContentEditorProps {
  initialContent: Array<{
    id: string;
    key: string;
    content: string;
    type?: string;
    updatedAt: Date;
  }>;
}

export default function ContentEditorFixed({
  initialContent,
}: ContentEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const TABS = [
    "Home",
    "About",
    "Philosophy",
    "Curriculam",
    "Contact",
    "Partner schools",
    "Media Center",
  ];

  const MAPPING: Record<string, Array<{ name: string; prefixes: string[] }>> = {
    Home: [
      { name: "Premium Hero", prefixes: ["home_hero_"] },
      { name: "Stats", prefixes: ["home_stats_"] },
      { name: "Our Philosophy", prefixes: ["phil_"] },
      { name: "Ten Dimensions (General)", prefixes: ["dim_"] },
      { name: "Ten Dimension 1", prefixes: ["dim1_"] },
      { name: "Ten Dimension 2", prefixes: ["dim2_"] },
      { name: "Ten Dimension 3", prefixes: ["dim3_"] },
      { name: "Ten Dimension 4", prefixes: ["dim4_"] },
      { name: "Ten Dimension 5", prefixes: ["dim5_"] },
      { name: "Ten Dimension 6", prefixes: ["dim6_"] },
      { name: "Ten Dimension 7", prefixes: ["dim7_"] },
      { name: "Ten Dimension 8", prefixes: ["dim8_"] },
      { name: "Ten Dimension 9", prefixes: ["dim9_"] },
      { name: "Ten Dimension 10", prefixes: ["dim10_"] },
      { name: "Our Conviction Center", prefixes: ["genius_"] },
      { name: "Eight Pillars", prefixes: ["pillar"] },
      { name: "Curriculam Portfolio", prefixes: ["portfolio_"] },
      { name: "Academic Leadership", prefixes: ["founder_"] },
      { name: "Testimonial Sections", prefixes: ["testimonial"] },
      { name: "Mastery Spiral", prefixes: ["mastery_", "home_mastery_"] },
      { name: "Parent Trust", prefixes: ["reason", "home_parent_trust_"] },
      { name: "Visual Assets", prefixes: ["home_hero_image", "phil_main", "genius_main", "founder_image"] },
    ],
    About: [
      { name: "Hero Section", prefixes: ["about_hero_"] },
      { name: "Our Philosophy", prefixes: ["phil_"] },
      { name: "Six Beliefs", prefixes: ["about_belief"] },
      {
        name: "Mission and Vision",
        prefixes: ["about_mandate", "about_mission", "about_vision"],
      },
      { name: "Academic Leadership", prefixes: ["founder_"] },
      { name: "Brochure Section", prefixes: ["about_brochure"] },
      { name: "Visual Assets", prefixes: ["about_hero_background", "about_mandate_bg", "about_brochure_image", "founder_image"] },
    ],
    Philosophy: [
      { name: "Hero Section", prefixes: ["philosophy_hero"] },
      { name: "Pedagogical Framework", prefixes: ["philosophy_pillars"] },
      { name: "Eight Pillars", prefixes: ["pillar"] },
      { name: "Visual Assets", prefixes: ["philosophy_hero_background"] },
    ],
    Curriculam: [
      { name: "Hero Section", prefixes: ["bundles_hero_", "bundle_hero_"] },
      { name: "Pre-Primary Portfolio", prefixes: ["bundles_item_1_"] },
      { name: "Primary Portfolio", prefixes: ["bundles_item_2_"] },
      { name: "Middle School Portfolio", prefixes: ["bundles_item_3_"] },
      { name: "Detailed Ecosystem", prefixes: ["bundle_"] },
      { name: "Visual Assets", prefixes: ["bundles_hero_background", "bundle_hero_background"] },
    ],
    Contact: [
      { name: "Hero Section", prefixes: ["contact_hero_"] },
      { name: "Direct Access Info", prefixes: ["contact_info_"] },
      { name: "Visual Assets", prefixes: ["contact_hero_background"] },
    ],
    "Partner schools": [
      { name: "Hero Section", prefixes: ["schools_hero_"] },
      { name: "MIWAY Standards", prefixes: ["schools_standard_"] },
      { name: "Visual Assets", prefixes: ["schools_hero_background"] },
    ],
    "Media Center": [
      { name: "Global Banners", prefixes: ["about_hero_background", "philosophy_hero_background", "bundles_hero_background", "schools_hero_background", "bundle_hero_background", "about_mandate_bg"] },
      { name: "Home Gallery", prefixes: ["home_hero_image"] },
      { name: "Section Visuals", prefixes: ["phil_main", "genius_main", "founder_image"] },
      { name: "Brochure Manifesto", prefixes: ["about_brochure_image"] },
      { name: "Avatars", prefixes: ["testimonial", "user_"] },
    ],
  };

  // Group content based on the structured mapping
  const getStructuredContent = () => {
    const structured: Record<string, Record<string, typeof content>> = {};

    TABS.forEach((tab) => {
      structured[tab] = {};
      const sections = MAPPING[tab] || [];

      sections.forEach((section) => {
        const matchingItems = content.filter((item) =>
          section.prefixes.some((p) => item.key.startsWith(p)),
        );
        if (matchingItems.length > 0) {
          // Advanced Priority-based sort: Tag > Title > Desc > Point1_Title > Point1_Desc > ...
          structured[tab][section.name] = matchingItems.sort((a, b) => {
            const getPriority = (key: string) => {
              const lowerKey = key.toLowerCase();
              
              // 1. Tags always first
              if (lowerKey.includes("_tag")) return 0;
              
              // 2. Main Section Title/Desc (not numbered or specific to a portfolio category)
              const isSpecific = /pre_primary|primary|middle|\d+/.test(lowerKey);
              if (!isSpecific) {
                if (lowerKey.includes("_title")) return 1;
                if (lowerKey.includes("_desc")) return 2;
              }

              // 3. Portfolio Categories (Pre-Primary > Primary > Middle)
              if (lowerKey.includes("pre_primary")) {
                const base = 100;
                if (lowerKey.includes("_title")) return base + 1;
                if (lowerKey.includes("_grade")) return base + 2;
                if (lowerKey.includes("_sub") || lowerKey.includes("_focus")) return base + 3;
                if (lowerKey.includes("_desc")) return base + 4;
                return base + 10;
              }
              if (lowerKey.includes("primary") && !lowerKey.includes("pre_primary")) {
                const base = 200;
                if (lowerKey.includes("_title")) return base + 1;
                if (lowerKey.includes("_grade")) return base + 2;
                if (lowerKey.includes("_sub") || lowerKey.includes("_focus")) return base + 3;
                if (lowerKey.includes("_desc")) return base + 4;
                return base + 10;
              }
              if (lowerKey.includes("middle")) {
                const base = 300;
                if (lowerKey.includes("_title")) return base + 1;
                if (lowerKey.includes("_grade")) return base + 2;
                if (lowerKey.includes("_sub") || lowerKey.includes("_focus")) return base + 3;
                if (lowerKey.includes("_desc")) return base + 4;
                return base + 10;
              }
              
              // 4. Numbered items (points, beliefs, pillars, testimonials)
              // 4. Images and backgrounds last in their section
              if (lowerKey.includes("_image") || lowerKey.includes("_img") || lowerKey.includes("_bg") || lowerKey.includes("_background")) return 1000;

              // 5. Numbered items (points, beliefs, pillars, testimonials)
              const numMatch = lowerKey.match(/(\d+)/);
              if (numMatch) {
                const num = parseInt(numMatch[1]);
                const basePrio = 500 + num * 10;
                
                if (lowerKey.includes("_title") || lowerKey.includes("_name")) return basePrio + 1;
                if (lowerKey.includes("_desc") || lowerKey.includes("_text") || lowerKey.includes("_role")) return basePrio + 2;
                if (lowerKey.includes("_sub") || lowerKey.includes("_grade")) return basePrio + 3;
                return basePrio + 5;
              }
              
              return 2000; // Others last
            };

            const prioA = getPriority(a.key);
            const prioB = getPriority(b.key);

            if (prioA !== prioB) return prioA - prioB;
            return a.key.localeCompare(b.key);
          });
        }
      });
    });

    // Add "Uncategorized" for any keys that didn't match anything
    const allMappedKeys = new Set(
      Object.values(MAPPING)
        .flat()
        .flatMap((s) => s.prefixes),
    );
    const uncategorized = content.filter(
      (item) => !Array.from(allMappedKeys).some((p) => item.key.startsWith(p)),
    );

    if (uncategorized.length > 0) {
      if (!structured["Misc"]) structured["Misc"] = {};
      structured["Misc"]["Uncategorized"] = uncategorized;
    }

    return structured;
  };

  const groupedContent = getStructuredContent();
  const availableTabs = Object.keys(groupedContent).filter(
    (tab) => Object.keys(groupedContent[tab]).length > 0,
  );

  const handleEdit = (key: string, currentValue: string) => {
    setEditingKey(key);
    setEditValue(currentValue);
  };

  const handleSave = async (key: string, type: string = "TEXT") => {
    setSaving(true);
    try {
      await updateSiteContent(key, editValue, type);

      // Update local state
      setContent((prev) =>
        prev.map((item) =>
          item.key === key
            ? { ...item, content: editValue, type, updatedAt: new Date() }
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

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadImage(formData);
      if (result.success && result.url) {
        setEditValue(result.url);
        // Automatically save for images to make it "one-click" replacement
        await updateSiteContent(key, result.url, "IMAGE");

        setContent((prev) =>
          prev.map((item) =>
            item.key === key
              ? {
                  ...item,
                  content: result.url!,
                  type: "IMAGE",
                  updatedAt: new Date(),
                }
              : item,
          ),
        );
        setEditingKey(null);
      } else {
        alert(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
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

  const isImageContent = (item: any) => {
    return (
      item.type === "IMAGE" ||
      item.key.toLowerCase().includes("image") ||
      item.key.toLowerCase().includes("img") ||
      item.content?.startsWith("/uploads/") ||
      item.content?.includes("cloudinary.com") ||
      item.content?.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)
    );
  };

  // Set initial selected page (default to first one)
  const [selectedPage, setSelectedPage] = useState<string>(
    availableTabs.includes("Home") ? "Home" : (availableTabs[0] || ""),
  );

  return (
    <div className="relative pt-24 pb-20">
      {/* Fixed Search and Filters Bar */}
      <div className="bg-white/80 backdrop-blur-xl p-4 border-b border-gray-200 fixed z-50 top-0 left-[280px] right-0 shadow-sm flex flex-col md:flex-row items-center gap-4 px-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent pointer-events-none" />
 
        <div className="relative flex-1 w-full z-10">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by key or text..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-lg outline-none focus:border-primary focus:shadow-[0_0_20px_var(--primary-light)] transition-all font-bold text-gray-800 placeholder:text-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 z-10 no-scrollbar">
          {TABS.map((page) => {
             const hasContent = groupedContent[page] && Object.keys(groupedContent[page]).length > 0;
             if (!hasContent) return null;
             
             return (
              <button
                key={page}
                onClick={() => setSelectedPage(page)}
                className={`px-5 py-2.5 rounded-lg text-sm font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  selectedPage === page
                    ? "bg-primary text-white border border-primary shadow-[0_0_15px_-5px_var(--primary-light)]"
                    : "bg-slate-100 border border-gray-200 text-gray-500 hover:bg-slate-200 hover:text-gray-800"
                }`}
              >
                {page}
              </button>
             );
          })}
          {groupedContent["Misc"] && (
            <button
              onClick={() => setSelectedPage("Misc")}
              className={`px-5 py-2.5 rounded-lg text-sm font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                selectedPage === "Misc"
                  ? "bg-primary text-white border border-primary shadow-[0_0_15px_-5px_var(--primary-light)]"
                  : "bg-slate-100 border border-gray-200 text-gray-500 hover:bg-slate-200 hover:text-gray-800"
              }`}
            >
              Others
            </button>
          )}
        </div>
      </div>

      {Object.entries(groupedContent).map(([page, sections]) => {
        if (page !== selectedPage && searchTerm === "") return null;

        const allPageItems = Object.values(sections).flat();
        const hasMatchingItem = allPageItems.some(
          (item) =>
            item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.content.toLowerCase().includes(searchTerm.toLowerCase()),
        );

        if (!hasMatchingItem && searchTerm !== "") return null;

        return (
          <div
            key={page}
            className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="flex items-center gap-4 mb-8 pl-4 border-b border-gray-200 pb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary border border-gray-200 shadow-sm">
                <Layout size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-800 tracking-tighter ">
                  {page} Workspace
                </h2>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                  {allPageItems.length} Editable Assets
                </p>
              </div>
            </div>

            <div className="space-y-12 pl-4">
              {Object.entries(sections).map(([section, items]) => {
                const filteredItems = items.filter(
                  (item) =>
                    item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.content
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()),
                );

                if (filteredItems.length === 0) return null;

                return (
                  <div key={section} className="space-y-6">
                    <h3 className="text-lg font-black text-gray-800 uppercase tracking-widest flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {section} Section
                    </h3>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 pl-4 border-l-2 border-gray-100">
                      {filteredItems.map((item) => {
                        const isImg = isImageContent(item);

                        return (
                          <div
                            key={item.key}
                            className={`bg-white rounded-lg border transition-all duration-300 relative overflow-hidden ${editingKey === item.key ? "border-primary shadow-lg ring-1 ring-primary/20" : "border-gray-200 shadow-sm hover:shadow-md hover:bg-white"}`}
                          >
                            <div className="p-8 relative z-10">
                              <div className="flex items-start justify-between mb-6">
                                <div>
                                  <h3 className="text-xl font-bold text-gray-800 leading-none mb-3 tracking-tight flex items-center gap-3">
                                    {isImg && (
                                      <ImageIcon
                                        size={20}
                                        className="text-primary"
                                      />
                                    )}
                                    {getReadableLabel(item.key)}
                                  </h3>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-mono text-gray-500 bg-slate-100 px-3 py-1 rounded-lg border border-gray-200 flex items-center gap-2">
                                      <Terminal size={10} />
                                      {item.key}
                                    </span>
                                    {isImg && (
                                      <span className="text-[8px] font-black uppercase tracking-widest text-white bg-primary px-2 py-0.5 rounded-lg">
                                        Image Asset
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500">
                                  <Clock size={12} />
                                  Updated{" "}
                                  {
                                    new Date(item.updatedAt)
                                      .toISOString()
                                      .split("T")[0]
                                  }
                                </div>
                              </div>

                              {editingKey === item.key ? (
                                <div className="space-y-6">
                                  {isImg ? (
                                    <div className="space-y-4">
                                      <div className="relative group/upload aspect-video max-h-[300px] w-full rounded-lg overflow-hidden bg-slate-100 border-2 border-dashed border-gray-200 flex items-center justify-center">
                                        {editValue ? (
                                          <>
                                            <img
                                              src={editValue}
                                              alt="Preview"
                                              className="w-full h-full object-contain"
                                            />
                                            <div className="absolute inset-0 bg-white/40 opacity-0 group-hover/upload:opacity-100 transition-opacity flex items-center justify-center">
                                              <button
                                                onClick={() =>
                                                  fileInputRef.current?.click()
                                                }
                                                className="px-6 py-3 bg-white text-gray-800 rounded-lg text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl hover:scale-105 transition-all"
                                              >
                                                <Upload size={16} /> Replace
                                                Image
                                              </button>
                                            </div>
                                          </>
                                        ) : (
                                          <button
                                            onClick={() =>
                                              fileInputRef.current?.click()
                                            }
                                            className="flex flex-col items-center gap-3 text-gray-500 hover:text-primary transition-colors"
                                          >
                                            <Upload size={40} />
                                            <span className="text-xs font-bold uppercase tracking-widest">
                                              Select Image File
                                            </span>
                                          </button>
                                        )}
                                        {uploading && (
                                          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-3">
                                            <Loader2
                                              size={32}
                                              className="animate-spin text-primary"
                                            />
                                            <span className="text-sm font-black uppercase tracking-wider text-primary">
                                              Uploading...
                                            </span>
                                          </div>
                                        )}
                                      </div>
                                      <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) =>
                                          handleFileUpload(e, item.key)
                                        }
                                      />
                                      <input
                                        type="text"
                                        value={editValue}
                                        onChange={(e) =>
                                          setEditValue(e.target.value)
                                        }
                                        className="w-full p-4 bg-slate-50 border border-gray-200 rounded-lg text-sm font-mono text-gray-500 focus:border-primary outline-none transition-all"
                                        placeholder="Image URL or Path..."
                                      />
                                    </div>
                                  ) : (
                                    <div className="relative">
                                      <textarea
                                        value={editValue}
                                        onChange={(e) =>
                                          setEditValue(e.target.value)
                                        }
                                        className="w-full min-h-[200px] p-6 bg-slate-50 border border-primary/30 rounded-lg text-gray-800 focus:bg-white focus:border-primary focus:shadow-inner outline-none resize-y transition-all font-medium leading-relaxed font-mono text-sm"
                                        placeholder="Enter content..."
                                      />
                                      <div className="absolute bottom-4 right-4 text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-lg border border-gray-200">
                                        {editValue.length} Chars
                                      </div>
                                    </div>
                                  )}

                                  <div className="flex gap-4 justify-end pt-2 border-t border-gray-200">
                                    <button
                                      onClick={handleCancel}
                                      className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-800 hover:bg-slate-100 transition-all flex items-center gap-2"
                                      disabled={saving || uploading}
                                    >
                                      <X size={16} /> Cancel
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleSave(
                                          item.key,
                                          isImg ? "IMAGE" : "TEXT",
                                        )
                                      }
                                      className="px-8 py-3 bg-primary text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
                                      disabled={saving || uploading}
                                    >
                                      {saving ? (
                                        <Clock
                                          size={16}
                                          className="animate-spin"
                                        />
                                      ) : (
                                        <Save size={16} />
                                      )}
                                      {saving ? "Synching..." : "Execute Save"}
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="group/content relative">
                                  {isImg ? (
                                    <div className="flex items-center gap-8 bg-slate-50 p-6 rounded-lg border border-gray-200/50">
                                      <div className="w-32 h-32 rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden flex items-center justify-center flex-shrink-0">
                                        {item.content ? (
                                          <img
                                            src={item.content}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                          />
                                        ) : (
                                          <ImageIcon
                                            size={32}
                                            className="text-slate-200"
                                          />
                                        )}
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-sm font-black uppercase tracking-widest text-gray-500 mb-2">
                                          Source Path
                                        </p>
                                        <code className="text-[11px] font-mono text-primary font-bold break-all">
                                          {item.content ||
                                            "No image persistent"}
                                        </code>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="p-6 bg-slate-50 rounded-lg border border-gray-200/50 text-gray-600 whitespace-pre-line leading-relaxed min-h-[100px] font-medium">
                                      {item.content || (
                                        <em className="text-gray-500">
                                          No data present in sector
                                        </em>
                                      )}
                                    </div>
                                  )}

                                  <button
                                    onClick={() =>
                                      handleEdit(item.key, item.content)
                                    }
                                    className="absolute top-4 right-4 p-3 bg-white rounded-lg shadow-md border border-gray-200 text-gray-500 opacity-0 group-hover/content:opacity-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 transform translate-y-2 group-hover/content:translate-y-0"
                                    title="Quick Edit"
                                  >
                                    <Edit2 size={18} />
                                  </button>

                                  <div className="mt-4 flex justify-between items-center px-2">
                                    <span className="flex items-center gap-2 text-emerald-600 text-sm font-black uppercase tracking-widest">
                                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-lg animate-pulse" />
                                      Synchronized
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleEdit(item.key, item.content)
                                      }
                                      className="text-gray-500 hover:text-primary text-sm font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 group/edit"
                                    >
                                      Modify Asset
                                      <span className="group-hover/edit:translate-x-1 transition-transform">
                                        →
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
