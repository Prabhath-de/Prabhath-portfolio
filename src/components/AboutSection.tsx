import { motion } from "framer-motion";
import { Network, Server, Shield, Cloud } from "lucide-react";

const highlights = [
  { icon: Network, text: "Hands-on with routing & switching labs" },
  { icon: Server, text: "Experience as a DevOps trainee" },
  { icon: Shield, text: "Interest in network security" },
  { icon: Cloud, text: "Exploring cloud platforms (AWS/Azure)" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                I am a dedicated Computer Networking undergraduate at NSBM Green University, Sri Lanka,
                with a strong passion for networking, DevOps, and cloud computing. As a current DevOps
                trainee, I combine academic knowledge with real-world experience in building and
                maintaining infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My goal is to become a proficient network and DevOps engineer, contributing to
                building secure, scalable, and automated network solutions. I actively work on
                hands-on projects related to network security, automation, and cloud infrastructure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors shadow-card group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
