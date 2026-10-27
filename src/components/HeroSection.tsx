import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, BadgeCheck, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const useTypewriter = (text: string, speed = 50, delay = 0) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
};

const HeroSection = () => {
  const greeting = useTypewriter("// Hello, I'm", 60, 300);
  const name = useTypewriter("H.H.K.R. Prabhath De Silva", 45, 1200);
  const title = useTypewriter("Computer Networking Undergraduate | NSBM Green University", 30, 2600);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="font-mono text-primary text-sm mb-4 tracking-wider">
              {greeting.displayed}
              {!greeting.done && <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse align-middle" />}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {name.displayed.includes("De Silva") ? (
                <>
                  {name.displayed.replace("De Silva", "")}<span className="text-gradient">De Silva</span>
                </>
              ) : (
                name.displayed
              )}
              {!name.done && <span className="inline-block w-1 h-10 sm:h-12 bg-primary ml-1 animate-pulse align-middle" />}
            </h1>
            <p className="font-mono text-accent text-base sm:text-lg mb-6">
              {title.displayed}
              {!title.done && greeting.done && name.done && <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 animate-pulse align-middle" />}
            </p>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              A Computer Networking undergraduate at NSBM and DevOps trainee passionate about
              network security, automation, and cloud infrastructure. Building the
              future of connected systems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold transition-all hover:opacity-90 shadow-glow"
              >
                View Projects
                <ArrowDown size={18} />
              </a>
              <a
                href="https://www.credly.com/users/rashmika-prabhath/badges/credly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold transition-all hover:bg-secondary"
              >
                <BadgeCheck size={18} />
                View Credly
              </a>
              <a
                href="https://www.linkedin.com/in/prabhath-de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full animate-pulse-glow" />
              <img
                src={profilePhoto}
                alt="H.H.K.R. Prabhath De Silva"
                className="relative w-80 sm:w-96 lg:w-[30rem] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
