import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Education {
  icon: LucideIcon;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  modules: string[];
  achievement?: string;
}

const educationData: Education[] = [
  {
    icon: GraduationCap,
    degree: "BSc (Hons) in Computer Networks",
    institution: "NSBM Green University, Sri Lanka",
    period: "2022 – 2026 (Expected)",
    description: "Pursuing a comprehensive degree in computer networking with focus on modern network infrastructure, cloud systems, and security.",
    modules: [
      "Computer Networks", "Operating Systems", "Network Security",
      "Cloud Computing", "Database Systems", "Web Technologies",
      "Systems Administration", "Network Design",
    ],
    
  },
  {
    icon: Award,
    degree: "Diploma in Information Technology",
    institution: "National Institute of Business Management (NIBM)",
    period: "2020 – 2022",
    description: "Foundation in IT fundamentals covering programming, databases, and web technologies.",
    modules: [
      "Programming Fundamentals", "Database Management",
      "Web Development", "IT Project Management",
    ],
  },
  {
    icon: BookOpen,
    degree: "G.C.E. Advanced Level – Physical Science Stream",
    institution: "Mirigama Central College, Sri Lanka",
    period: "2017 – 2019",
    modules: [
      "Combined Mathematics", "Physics", "ICT",
    ],
  },
  {
    icon: BookOpen,
    degree: "G.C.E. Ordinary Level",
    institution: "Mirigama Central College, Sri Lanka",
    period: "2015 – 2016",
    modules: [],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line with gradient */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
              <div className="w-full h-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
            </div>

            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16 md:pl-0 mb-8 last:mb-0"
              >
                {/* Timeline dot — animated pulse */}
                <div className="absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Connector line to card on mobile */}
                <div className="absolute left-6 top-8 w-10 h-px bg-primary/30 md:hidden" />

                <div className={`md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="group relative rounded-2xl bg-background/80 backdrop-blur-sm border border-border/80 shadow-card hover:border-primary/40 hover:shadow-glow transition-all duration-500 overflow-hidden">
                    {/* Gradient accent — top */}
                    <div className="h-1 bg-gradient-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="p-4">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 shadow-sm">
                          <edu.icon size={16} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {edu.degree}
                          </h3>
                          <p className="text-accent text-xs font-semibold mt-0.5">{edu.institution}</p>
                        </div>
                      </div>

                      {/* Date + achievement badges */}
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-[11px] font-mono text-foreground/70 bg-secondary px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                          <Calendar size={10} />
                          {edu.period}
                        </span>
                        {edu.achievement && (
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 flex items-center gap-1">
                            <Sparkles size={9} />
                            {edu.achievement}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      {edu.description && (
                        <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                          {edu.description}
                        </p>
                      )}

                      {/* Modules */}
                      {edu.modules.length > 0 && (
                        <div className="pt-3 border-t border-border/60">
                          <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                            Key Modules
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.modules.map((mod) => (
                              <span
                                key={mod}
                                className="px-2 py-0.5 text-[11px] rounded-full bg-primary/5 text-secondary-foreground font-medium border border-border/60 hover:bg-primary/10 hover:text-primary transition-colors"
                              >
                                {mod}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
