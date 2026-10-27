import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Networking",
    skills: ["TCP/IP", "Subnetting", "Routing & Switching", "VLANs", "VPNs", "Firewall Basics", "DNS", "DHCP"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Linux", "Docker", "Git", "GitHub", "GitLab", "CI/CD (GitHub Actions)", "AWS Basics", "Azure Concepts"],
  },
  {
    title: "Programming / Scripting",
    skills: ["Bash", "Python (Basic)", "YAML", "JSON", "Markdown"],
  },
  {
    title: "Professional",
    skills: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border shadow-card"
              >
                <h3 className="font-mono text-primary text-sm font-semibold mb-4 tracking-wider uppercase">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
