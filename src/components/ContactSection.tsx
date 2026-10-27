import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Phone, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "info.rashmika.prabhath@gmail.com",
    href: "mailto:info.rashmika.prabhath@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "prabhath-de",
    href: "https://www.linkedin.com/in/prabhath-de/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Prabhath-de",
    href: "https://github.com/Prabhath-de",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mirigama, Sri Lanka",
    href: null,
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:info.rashmika.prabhath@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] translate-y-1/2" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mb-4 mx-auto" />
            <p className="text-muted-foreground max-w-lg mx-auto">
              I'm always open to discussing networking, DevOps, or cloud topics.
              Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Contact cards */}
            <div className="space-y-4 flex flex-col justify-between">
              {contactLinks.map((link, i) => {
                const Wrapper = link.href ? "a" : "div";
                const wrapperProps = link.href
                  ? { href: link.href, target: link.href.startsWith("http") ? "_blank" : undefined, rel: link.href.startsWith("http") ? "noopener noreferrer" : undefined }
                  : {};

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <Wrapper
                      {...(wrapperProps as any)}
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-card transition-all duration-300 ${
                        link.href ? "hover:border-primary/40 hover:shadow-glow cursor-pointer" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <link.icon size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                          {link.label}
                        </p>
                        <p className="text-sm font-medium text-foreground truncate">
                          {link.value}
                        </p>
                      </div>
                      {link.href && (
                        <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      )}
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=""
            >
              <div className="p-6 sm:p-8 rounded-xl bg-card border border-border shadow-card relative overflow-hidden">
                <div className="h-1 bg-gradient-primary absolute top-0 left-0 right-0 opacity-60" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Send size={28} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Almost there!</h3>
                    <p className="text-muted-foreground text-sm">Your email app has opened — just hit send. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-glow"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
