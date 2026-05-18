import React from 'react'
import { FadeIn } from './ui/FadeIn'
import Link from 'next/link'
import Button from './ui/Button'
import { ArrowRight } from 'lucide-react'

interface CurriculamPortfolioProps {
  content?: Record<string, string>;
}

const CurriculamPortfolio = ({ content = {} }: CurriculamPortfolioProps) => {
  const getContent = (key: string, fallback: string = "") => {
    return content[key] || fallback;
  };

  const bundles = [
    {
      slug: "pre-primary",
      title: getContent("portfolio_pre_primary_title", "Pre-Primary"),
      grade: getContent("portfolio_pre_primary_grade", "pre-mont to mont-II"),
      subtitle: getContent("portfolio_pre_primary_sub", "Sensory Mastery"),
      description: getContent(
        "portfolio_pre_primary_desc",
        "Early childhood ecosystem focusing on sensory development and motor skill refinement.",
      ),
      color: "var(--brand-gold)",
    },
    {
      slug: "primary",
      title: getContent("portfolio_primary_title", "Primary"),
      grade: getContent("portfolio_primary_grade", "Grades 1 - 5"),
      subtitle: getContent("portfolio_primary_sub", "Cognitive Foundation"),
      description: getContent(
        "portfolio_primary_desc",
        "Multi-volume workbooks and memory mapping tools for neuro-cognitive development.",
      ),
      color: "var(--brand-purple-deep)",
    },
    {
      slug: "middle",
      title: getContent("portfolio_middle_title", "Middle School"),
      grade: getContent("portfolio_middle_grade", "Grades 6 - 8"),
      subtitle: getContent("portfolio_middle_sub", "Conceptual Mastery"),
      description: getContent(
        "portfolio_middle_desc",
        "Advanced science and logic modules with case-study methods for systemic thinking.",
      ),
      color: "var(--brand-blue)",
    },
  ];

  return (
    <section className="section-padding bg-background-alt relative">
      <div className="container-premium">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                  {getContent("portfolio_tag", "Institutional Solutions")}
                </span>
                <div className="w-10 h-px bg-accent" />
              </div>
              <h3
                className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6"
                dangerouslySetInnerHTML={{
                  __html: getContent(
                    "portfolio_title",
                    'The Curriculum <span class=" text-accent"> Portfolio.</span>',
                  ),
                }}
              />
            </div>
            <div className="py-10">
              <Link href="/bundles">
                <Button
                  size="md"
                  className="rounded-full px-8 py-3  bg-primary text-white text-lg font-bold"
                >
                  Browse the Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle, i) => (
            <FadeIn key={i} delay={0.2 * i}>
              <Link
                href={`/bundles/${bundle.slug}`}
                className="group relative block aspect-[3/3] overflow-hidden border border-gray-200 shadow-premium hover:shadow-2xl transition-all duration-700"
              >
                <div className="absolute inset-0 bg-white" />
                <div
                  className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
                  style={{
                    backgroundImage:
                      "radial-gradient(var(--brand-purple-deep) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                  {/* Corner Grade Badge */}
                  <div
                    className="absolute -top-2 -right-2 w-36 h-36 flex items-center justify-center transition-transform group-hover:scale-105 duration-700 z-20"
                    style={{
                      backgroundColor: bundle.color,
                      borderRadius: "0 0 0 100%",
                    }}
                  >
                    <span
                      className={`text-white font-bold uppercase tracking-wider text-center ${
                        bundle.slug === "pre-primary"
                          ? "text-[12px] rotate-45 whitespace-pre-line leading-tight translate-x-2 -translate-y-2"
                          : "text-sm rotate-45 translate-x-2 -translate-y-2"
                      }`}
                    >
                      {bundle.grade?.split(" ").join("\n")}
                    </span>
                  </div>

                  <div className="mt-12">
                    <div
                      className="text-[12px] font-semibold uppercase tracking-[0.3em] mb-4 text-primary"
                      style={{ color: bundle.color }}
                    >
                      {bundle.subtitle}
                    </div>
                    <h4 className="text-5xl font-bold tracking-tighter font-serif mb-6">
                      {bundle.title}
                    </h4>
                    <p className="text-xl text-muted font-medium font-serif max-w-2xl">
                      {bundle.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div
                      className="w-14 h-14 rounded-full border border-primary/80 flex items-center justify-center group-hover:bg-[var(--bundle-color)] group-hover:border-[var(--bundle-color)] group-hover:text-white transition-all duration-500"
                      style={{ "--bundle-color": bundle.color } as any}
                    >
                      <ArrowRight size={24} />
                    </div>
                    <span className="text-[12px] font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Portfolio
                    </span>
                  </div>
                </div>

                {/* Background Accents */}
                <div
                  className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity"
                  style={{ backgroundColor: bundle.color }}
                />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculamPortfolio