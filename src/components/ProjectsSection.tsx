import { motion } from "framer-motion";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import homeLabImg from "@/assets/projects/home-lab.jpg";
import cicdDockerImg from "@/assets/projects/cicd-docker.jpg";
import linuxHardeningImg from "@/assets/projects/linux-hardening.jpg";
import sshHoneypotImg from "@/assets/projects/ssh-honeypot.jpg";
import networkMonitoringImg from "@/assets/projects/network-monitoring.jpg";
import backupScriptImg from "@/assets/projects/backup-script.jpg";

const projects = [
  {
    title: "Home Lab Network Setup",
    description: "Designed and configured a home lab with VLANs, inter-VLAN routing, and firewall rules using Cisco Packet Tracer and physical hardware.",
    tech: ["VLANs", "Firewall", "Cisco IOS", "Routing"],
    github: "https://github.com/Prabhath-de/Home-Lab-Network-Setup.git",
    demo: null,
    image: homeLabImg,
  },
  {
    title: "CI/CD Pipeline with Docker",
    description: "Built a CI/CD pipeline for a sample web app using Docker containers and GitHub Actions for automated testing and deployment.",
    tech: ["Docker", "GitHub Actions", "CI/CD", "YAML"],
    github: "https://github.com/Prabhath-de/CI-CD-Pipeline-with-Docker-.git",
    demo: "#",
    image: cicdDockerImg,
  },
  {
    title: "Linux Server Hardening",
    description: "Hardened an Ubuntu server with SSH key auth, fail2ban, UFW firewall rules, and set up basic Prometheus + Grafana monitoring.",
    tech: ["Linux", "SSH", "Fail2ban", "Monitoring"],
    github: "https://github.com/Prabhath-de/Linux-Server-Hardening.git",
    demo: null,
    image: linuxHardeningImg,
  },
  {
    title: "SSH Honeypot Lab",
    description: "Deployed an SSH honeypot environment to study brute-force attack patterns and log analysis for threat detection learning.",
    tech: ["Python", "SSH", "Security", "Logging"],
    github: "https://github.com/Prabhath-de/SSH-Honeypot-Lab.git",
    demo: null,
    image: sshHoneypotImg,
  },
  {
    title: "Network Monitoring Dashboard",
    description: "Created a network monitoring setup using SNMP, Grafana dashboards, and automated alerting for device health tracking.",
    tech: ["SNMP", "Grafana", "Bash", "Alerting"],
    github: "https://github.com/Prabhath-de/Network-Monitoring-Dashboard.git",
    demo: "#",
    image: networkMonitoringImg,
  },
  {
    title: "Automated Backup Script",
    description: "Developed a Bash script for automated backups of server configurations with scheduling via cron and remote storage sync.",
    tech: ["Bash", "Cron", "Rsync", "Linux"],
    github: "#",
    demo: null,
    image: backupScriptImg,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-glow flex flex-col overflow-hidden"
              >
                {/* Project screenshot / placeholder */}
                <div className="relative w-full aspect-video bg-secondary/50 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
                      <ImageIcon size={32} className="opacity-40" />
                      <span className="text-xs font-mono opacity-60">// screenshot coming soon</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0 ml-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                          <Github size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs rounded bg-secondary text-primary font-mono">
                        {t}
                      </span>
                    ))}
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

export default ProjectsSection;
