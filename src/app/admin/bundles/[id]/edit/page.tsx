import { prisma } from "@/lib/prisma";
import { updateBundle } from "@/lib/actions";
import { ArrowLeft, Box } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";

export default async function EditBundlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bundle = await prisma.bundle.findUnique({
    where: { id },
  });

  if (!bundle) {
    return notFound();
  }

  const updateAction = updateBundle.bind(null, id);

  const subjectsString = JSON.parse(bundle.subjects).join(", ");
  const featuresString = JSON.parse(bundle.features).join("\n");

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-10">
        <Link
          href="/admin/bundles"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors mb-6 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-xs font-bold uppercase tracking-widest">
            Abort & Return
          </span>
        </Link>
        <h1 className="text-2xl font-black text-gray-800 tracking-tighter mb-2 ">
          Modify Sequence
        </h1>
        <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">
          Update Curriculum Module
        </p>
      </div>

      <div className="bg-white rounded-lg p-10 border border-gray-200 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-lg blur-[80px] -mr-32 -mt-32 pointer-events-none" />

        <form action={updateAction} className="space-y-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-wider text-gray-500 ml-1">
                Module Identity
              </label>
              <div className="relative group">
                <input
                  type="text"
                  name="title"
                  defaultValue={bundle.title}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg p-4 text-gray-800 placeholder:text-gray-600 focus:ring-0 focus:border-primary focus:shadow-[0_0_20px_var(--primary-glow)] outline-none transition-all font-bold tracking-tight"
                  placeholder="e.g. Primary Foundation Kit"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-primary transition-colors">
                  <Box size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black uppercase tracking-wider text-gray-500 ml-1">
                Target Sector
              </label>
              <div className="relative">
                <select
                  name="grade"
                  defaultValue={bundle.grade}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg p-4 text-gray-800 focus:ring-0 focus:border-primary focus:shadow-[0_0_20px_var(--primary-glow)] outline-none transition-all font-bold appearance-none cursor-pointer hover:bg-white"
                >
                  <option value="" className="bg-white text-gray-500">
                    Select Grade Sector
                  </option>
                  <option value="Nursey - KG" className="bg-white">
                    Preschool (Nursery - KG)
                  </option>
                  <option value="Grades 1-5" className="bg-white">
                    Primary (Grades 1-5)
                  </option>
                  <option value="Grades 6-8" className="bg-white">
                    Middle School (Grades 6-8)
                  </option>
                  <option value="Grades 9-10" className="bg-white">
                    High School (Grades 9-10)
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black uppercase tracking-wider text-gray-500 ml-1">
              Core Components{" "}
              <span className="text-gray-600 normal-case tracking-normal">
                (Comma separated)
              </span>
            </label>
            <input
              type="text"
              name="subjects"
              defaultValue={subjectsString}
              required
              className="w-full bg-white border border-gray-200 rounded-lg p-4 text-gray-800 placeholder:text-gray-600 focus:ring-0 focus:border-primary focus:shadow-[0_0_20px_var(--primary-glow)] outline-none transition-all font-mono text-sm"
              placeholder="English, Maths, Science"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black uppercase tracking-wider text-gray-500 ml-1">
              Technical Specifications{" "}
              <span className="text-gray-600 normal-case tracking-normal">
                (One per line)
              </span>
            </label>
            <textarea
              name="features"
              rows={5}
              defaultValue={featuresString}
              required
              className="w-full bg-white border border-gray-200 rounded-lg p-4 text-gray-800 placeholder:text-gray-600 focus:ring-0 focus:border-primary focus:shadow-[0_0_20px_var(--primary-glow)] outline-none transition-all font-mono text-sm"
              placeholder="Interactive Textbook&#10;Workbook included&#10;Digital Access Code"
            ></textarea>
          </div>

          <div className="pt-6 border-t border-gray-200 flex items-center justify-end gap-6">
            <Link
              href="/admin/bundles"
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-800 transition-colors"
            >
              Cancel
            </Link>
            <Button
              type="submit"
              variant="primary"
              className="shadow-[0_0_30px_var(--primary-glow)] hover:scale-105 transition-transform"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
