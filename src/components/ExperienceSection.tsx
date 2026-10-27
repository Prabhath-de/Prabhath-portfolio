import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "DevOps Trainee",
    company: "Sri Lanka Telecom",
    location: "Sri Lanka",
    period: "Aug 2025 – Feb 2026",
    duration: "6 mos",
    type: "Internship",
    bullets: [
      "Gained hands-on experience with DevOps practices and CI/CD pipelines",
      "Assisted in infrastructure monitoring and system administration tasks",
      "Worked with cloud services and containerization technologies",
      "Supported the team in automating deployment workflows",
    ],
    tech: ["DevOps", "CI/CD", "Cloud Services", "Automation"],
    link: null as string | null,
  },
  {
    role: "Administrative Assistant",
    company: "Pixel Clear (Pvt) Ltd",
    location: "Colombo District, Western Province, Sri Lanka",
    period: "Jan 2023 – Jan 2026",
    duration: "3 yrs 1 mo",
    type: "Apprenticeship",
    bullets: [
      "Managed administrative operations and coordinated internal communications",
      "Handled documentation, scheduling, and office workflow management",
      "Supported IT infrastructure tasks and system administration",
      "Assisted in project coordination and client communications",
    ],
    tech: ["Office Management", "Documentation", "IT Support", "Coordination"],
    link: null as string | null,
  },
  {
    role: "Program Coordinator",
    company: "Pixel Clear (Pvt) Ltd",
    location: "Sri Lanka",
    period: "Dec 2019 – Jan 2023",
    duration: "3 yrs 2 mos",
    type: "Hybrid",
    bullets: [
      "Coordinated program activities and managed project timelines",
      "Liaised with stakeholders and ensured deliverables were met on schedule",
      "Organized team workflows and maintained program documentation",
      "Contributed to process improvement initiatives",
    ],
    tech: ["Project Management", "Coordination", "Stakeholder Management", "Documentation"],
    link: null as string | null,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-card/50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line with gradient */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
              <div className="w-full h-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
            </div>

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
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
                    <div className="h-1 bg-gradient-primary opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="p-4">
                      {/* Header row */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500 shadow-sm">
                          <Briefcase size={16} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            <span className="text-accent text-xs font-semibold flex items-center gap-1">
                              {exp.company}
                              {exp.link && (
                                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                  <ArrowUpRight size={12} />
                                </a>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Meta badges */}
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                          {exp.type}
                        </span>
                        <span className="text-[11px] font-mono text-foreground/70 bg-secondary px-2.5 py-0.5 rounded-full">
                          {exp.period}
                        </span>
                        {exp.duration && (
                          <span className="text-[11px] text-muted-foreground font-medium">· {exp.duration}</span>
                        )}
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 mb-3 text-muted-foreground text-xs">
                        <MapPin size={11} className="text-primary/60" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-1.5 mb-3">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="text-muted-foreground text-xs flex gap-2 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 text-[11px] rounded-full bg-primary/5 text-primary font-mono border border-primary/15 hover:bg-primary/10 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
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

export default ExperienceSection;
