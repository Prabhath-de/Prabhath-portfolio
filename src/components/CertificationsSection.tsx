import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

const certifications = [
  {
    name: "ACE Multicloud Network Associate",
    issuer: "Aviatrix",
    date: "Issued Oct 2025",
    expires: "Expires Oct 2028",
    credentialId: "2025-28130",
    skills: ["Cloud Applications", "Networking"],
    link: "https://www.credly.com/badges/f5d25f6c-b25e-439d-bcad-4cbfecc24a62/public_url",
  },
  {
    name: "Career Essentials in System Administration by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "Issued Feb 2025",
    skills: ["Network Security", "System Administration"],
    link: "https://www.linkedin.com/learning/certificates/ba133ab72efec8d2dd19abe3aabd4fbd159cfb21427f4e9a93817fe32bdb15bb",
  },
  {
    name: "Microsoft Security Essentials Professional Certificate",
    issuer: "Microsoft",
    date: "Issued Feb 2025",
    skills: ["GRC", "Cloud Security", "Microsoft Security"],
    link: "https://www.linkedin.com/learning/certificates/95a84a56261b09c965df9155e753b30b39b5a4ddb58df102935b3d82a59170b8",
  },
  {
    name: "Atlassian IT Service Management (ITSM) Professional Certificate",
    issuer: "Atlassian",
    date: "Issued 2025",
    skills: ["ITSM", "Service Management"],
    link: "https://www.linkedin.com/learning/certificates/b30e0ff873d21d42a59cf8cd41e29f52df2fa6ff1310596f93c75197bdfe3c30",
  },
  {
    name: "CompTIA IT Fundamentals (FC0-U61) Cert Prep 2: Files and Applications, Networking, and Security",
    issuer: "LinkedIn",
    date: "Issued Feb 2025",
    skills: ["Network Administration"],
    link: "https://www.linkedin.com/learning/certificates/bb8e4ac2d520a3378426e95c3c6792cbefe720d83923c1239efef98edf97c168",
  },
  {
    name: "CompTIA IT Fundamentals (FC0-U61) Cert Prep 1: Computer Basics, Hardware, and Operating Systems",
    issuer: "LinkedIn",
    date: "Issued Feb 2025",
    skills: ["Network Administration"],
    link: "https://www.linkedin.com/learning/certificates/ab4c813906500eec5218abbcbdbd52e4245eddf3621d6171b4bbe68761ab87a8",
  },
  {
    name: "The Cybersecurity Threat Landscape",
    issuer: "LinkedIn",
    date: "Issued Jan 2025",
    skills: ["Threat & Vulnerability Management", "Cybersecurity"],
    link: "https://www.linkedin.com/learning/certificates/60a21fc6b556ce9d1ced7127f88922ebf9b01842da54a8a461fca593540d7f08",
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900) Cert Prep by Microsoft Press",
    issuer: "LinkedIn",
    date: "Issued Jan 2025",
    skills: ["Microsoft Azure", "Data Governance"],
    link: "https://www.linkedin.com/learning/certificates/7dc88b6a724aafe70f3feb0161b5d1c124f9cc4eb4e4e36d11c0a0332f199e88",
  },
  {
    name: "Cisco Networking Foundations: Fundamentals of Cisco Networking",
    issuer: "LinkedIn",
    date: "Issued 2025",
    skills: ["Cisco Networking", "Network Fundamentals"],
    link: "https://www.linkedin.com/learning/certificates/d18e7a505a397130e4464611305cb2e51871d9b0454a7f45fc682fa17c1e0879",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative p-6 rounded-xl bg-background border border-border shadow-card hover:border-primary/30 hover:shadow-glow transition-all duration-300"
              >
                {/* Accent top bar */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-primary rounded-b opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <ShieldCheck size={20} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {cert.name}
                      </h3>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-accent text-sm font-medium mb-2">{cert.issuer}</p>

                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Calendar size={10} />
                        {cert.date}
                      </span>
                      {cert.expires && (
                        <span className="text-xs text-muted-foreground">{cert.expires}</span>
                      )}
                      {cert.credentialId && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Award size={10} />
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>

                    {cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                      >
                        <ShieldCheck size={13} />
                        Show Credential
                        <ExternalLink size={11} />
                      </a>
                    )}
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

export default CertificationsSection;
