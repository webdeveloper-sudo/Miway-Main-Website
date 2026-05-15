import { notFound } from "next/navigation";
import { getBundleById } from "@/lib/bundles";
import { getPageContent } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, BookOpen, BrainCircuit, BrainIcon, CheckCircle, Infinity, Package, Waypoints } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BundleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const bundle = getBundleById(slug);

  if (!bundle) {
    notFound();
  }

  const content = await getPageContent("bundle_");

  const getContent = (key: string, fallback: string = "") => {
    return content[key] || fallback;
  };

  const needs = [
    {
      title: getContent("bundle_need1_title", "Neural Textbooks"),
      desc: getContent(
        "bundle_need1_desc",
        "Neuroscience-backed layouts for maximum retention.",
      ),
      icon: BookOpen,
    },
    {
      title: getContent("bundle_need2_title", "Digital Modules"),
      desc: getContent(
        "bundle_need2_desc",
        "Interactive content accessible on all modern devices.",
      ),
      icon: BrainCircuit,
    },
    {
      title: getContent("bundle_need3_title", "Practice Manuals"),
      desc: getContent(
        "bundle_need3_desc",
        "Hands-on exercises to solidify core concepts.",
      ),
      icon: Package,
    },
    {
      title: getContent("bundle_need4_title", "Teacher Guides"),
      desc: getContent(
        "bundle_need4_desc",
        "Comprehensive instructions for effective deployment.",
      ),
      icon: Infinity,
    },
  ];

  // Resolve dynamic content or fallbacks
  const title = content[`${bundle.contentKey}_title`] || bundle.titleDefault;
  const desc = content[`${bundle.contentKey}_desc`] || bundle.descDefault;
  const heroImage =
    content[`${bundle.contentKey}_image`] || "/bundles-hero.png"; // Fallback if specific image missing

  return (
    <div className="min-h-screen bg-slate-50">
      <BannerAndBreadCrumb title={title} subtitle={desc} img={getContent("bundle_hero_background", "/images/45115730_bnn2.jpg")} />

      {/* 3. Every Child Is Genius - Immersive Storytelling */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                {getContent("bundle_why_choose_tag", bundle.gradeDefault)}
              </span>
              <div className="w-10 h-px bg-accent" />
            </div>
            <h3
              className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-12 md:mb-13"
              dangerouslySetInnerHTML={{
                __html: getContent(
                  "bundle_why_choose_title",
                  `Why Choose <span class=" text-accent"> ${bundle.titleDefault}</span>`,
                ).replace("{bundle_title}", bundle.titleDefault),
              }}
            />
          </FadeIn>
        </div>
        <div className="container-premium">
          <div className="relative flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            {/* Visual Side */}
            <div className="flex-1 relative order-2 lg:order-1">
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                {/* Main Image with Layered Shadows */}
                <FadeIn
                  direction="none"
                  className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-20"
                >
                  <Image src={heroImage} alt={title} fill className="object-cover" />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </FadeIn>

                {/* Decorative Rings */}
                <style>
                  {`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes spin-slow-reverse {
                from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
              }
              .animate-spin-slow {
                animation: spin-slow 30s linear infinite;
              }
              .animate-spin-slow-reverse {
                animation: spin-slow-reverse 40s linear infinite;
              }
            `}
                </style>
                <div className="absolute -inset-10 border-2 border-dashed border-accent/20 rounded-[5rem] -z-10 animate-spin-slow" />
                <div className="absolute -inset-20 border border-primary/10 rounded-[6rem] -z-20 animate-spin-slow-reverse" />

                {/* Floating Badge */}
                <div
                  className="absolute -bottom-10 -right-10 z-30"
                  style={{
                    perspective: "1200px",
                  }}
                >
                  {/* Outer Thick 3D Ring */}
                  <div className="relative w-52 h-52 flex items-center justify-center">
                    {/* Thick Border Ring */}
                    <div
                      className="
        absolute
        inset-0
        rounded-full
        border-[18px]
        border-white
        bg-gradient-to-br
        from-white
        via-white
        to-white 
        shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        backdrop-blur-xl
      "
                      style={{
                        transform: "translateZ(-40px) rotateX(10deg)",
                      }}
                    />

                    {/* Main 3D Circle */}
                    <div
                      className="
        relative
        w-48
        h-48
        rounded-full
        bg-gradient-to-br
        from-[#2391CF]
        via-[#4db8ff]
        to-[#0b6ea8]
        flex
        flex-col
        items-center
        justify-center
        text-center
        overflow-hidden
        border
        border-white/20
      "
                      style={{
                        transformStyle: "preserve-3d",
                        transform: "rotateX(12deg) rotateY(-12deg)",
                      }}
                    >
                      {/* Inner Depth Shadow */}
                      <div className="absolute inset-0 rounded-full shadow-inner shadow-black/40" />

                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl animate-pulse" />

                      {/* Light Reflection */}
                      <div className="absolute top-5 left-8 w-24 h-10 bg-white/20 rounded-full blur-xl rotate-[-20deg]" />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center justify-center">
                        <h3 className="relative flex items-end leading-none">
                          <span className="text-6xl font-semibold text-white drop-shadow-2xl leading-none">
                            100
                          </span>

                          <span className="text-3xl font-bold text-white mb-4 ml-1 leading-none">
                            %
                          </span>
                        </h3>

                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 px-6 leading-relaxed">
                          {getContent(
                            "genius_activation_commitment",
                            "Potential Activation Commitment",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 order-1 lg:order-2 items-start">
              <FadeIn direction="right">
                <p className="text-md text-muted font-medium font-serif max-w-2xl mx-auto mb-8">
                  {getContent(
                    "bundle_why_choose_desc",
                    "Our curriculum is engineered for high-engagement classrooms, providing a holistic framework for cognitive and character development.",
                  )}
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: getContent(
                        "genius_point1_title",
                        "Personalized Trajectories",
                      ),
                      desc: getContent(
                        "genius_point1_desc",
                        "Adaptive learning paths for unique neural patterns.",
                      ),
                      icon: <Waypoints className="w-5 h-5 " />,
                    },
                    {
                      title: getContent("genius_point2_title", "Neuro-Spatial Mastery"),
                      desc: getContent(
                        "genius_point2_desc",
                        "Leveraging spatial intelligence for complex conceptualization.",
                      ),
                      icon: <BrainCircuit className="w-5 h-5" />,
                    },
                    {
                      title: getContent("genius_point3_title", "Continuous Iteration"),
                      desc: getContent(
                        "genius_point3_desc",
                        "The spiral approach ensures no core concept is ever lost.",
                      ),
                      icon: <Infinity className="w-5 h-5" />,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary p-2 flex items-center justify-center flex-shrink-0 text-accent font-semibold text-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="md:text-2xl text-xl font-bold text-primary">
                          {item.title}
                        </h4>
                        <p className="text-[16px] text-muted font-medium font-serif max-w-2xl mx-auto">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className=" py-10">
                  <Link href="/philosophy">
                    <Button
                      size="md"
                      className="rounded-full  bg-primary text-white text-lg font-bold"
                    >
                      {getContent("genius_cta", "Explore Framework")}
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Eight Pillars of Extraordinary Learning */}
      <section className="section-padding bg-background-alt relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                  {getContent("bundle_ecosystem_tag", "Inside the Box")}
                </span>
                <div className="w-10 h-px bg-accent" />
              </div>
              <h3
                className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6"
                dangerouslySetInnerHTML={{
                  __html: getContent(
                    "bundle_ecosystem_title",
                    'Complete Learning <span class=" text-accent"> Ecosystem.</span>',
                  ),
                }}
              />

              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto">
                {getContent(
                  "bundle_ecosystem_desc",
                  "Everything a student needs to master the curriculum.",
                )}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {needs.map((need, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group relative h-full">
                {/* Subtle Background Glow */}
                <div className="absolute -inset-2 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-accent" />

                <div className="relative glass-card p-10 h-full flex flex-col hover:border-primary/20 transition-colors overflow-hidden">
                  {/* Watermark Icon */}
                  <need.icon
                    className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
                    size={180}
                  />

                  <div className="w-16 h-16 rounded-full border text-accent bg-primary flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <need.icon size={32} />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                    {need.title}
                  </h3>

                  <p className="text-[16px] text-muted font-medium font-serif leading-relaxed">
                    {need.desc}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
