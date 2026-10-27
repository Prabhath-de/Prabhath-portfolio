import { motion, AnimatePresence } from "framer-motion";
import { Users, Award } from "lucide-react";
import { useState, useEffect } from "react";
import csslImg from "@/assets/volunteering-cssl.png";
import csslImg2 from "@/assets/volunteering-cssl-2.png";
import compuvateImg from "@/assets/volunteering-compuvate.png";
import compuvateImg2 from "@/assets/volunteering-compuvate-2.png";
import compuvateImg3 from "@/assets/volunteering-compuvate-3.png";
import zone24x7Img1 from "@/assets/volunteering-zone24x7-1.png";
import zone24x7Img2 from "@/assets/volunteering-zone24x7-2.png";
import zone24x7Img3 from "@/assets/volunteering-zone24x7-3.png";
import zone24x7Img4 from "@/assets/volunteering-zone24x7-4.png";
import ideathonImg1 from "@/assets/volunteering-ideathon-1.png";
import ideathonImg2 from "@/assets/volunteering-ideathon-2.png";
import ideathonImg3 from "@/assets/volunteering-ideathon-3.png";

const volunteering = [
  {
    icon: Users,
    role: "Student Volunteer",
    organization: "CSSL GenZ Chapter | NSBM Green University",
    period: "Mar 2024 · 1 mo",
    description:
      "The Road to AI event, held on March 27th, 2024, was a collaborative effort between the Department of Computer and Data Science, CSSL GenZ NSBM, and TIQRI. Volunteered in organizing and supporting the event.",
    images: [
      { src: csslImg, position: "object-center" },
      { src: csslImg2, position: "object-center" },
    ],
    imageClass: "h-44",
  },
  {
    icon: Award,
    role: "Executive Board Member",
    organization: "Compuvate Association",
    period: "Dec 2024 – Jan 2026 · 1 yr 2 mos",
    description:
      "Served as an Executive Board Member, contributing to leadership, event planning, and community engagement initiatives within the association.",
    images: [
      { src: compuvateImg, position: "object-top" },
      { src: compuvateImg2, position: "object-[center_20%]" },
      { src: compuvateImg3, position: "object-center" },
    ],
    imageClass: "h-48",
  },
  {
    icon: Users,
    role: "Workshop Organizer",
    organization: "Compuvate Association | UI/UX Workshop",
    period: "2025",
    description:
      "Organized the Compuvate Society UI/UX Workshop in collaboration with industry professionals, providing students with hands-on experience and insights into real-world design practices.",
    images: [
      { src: zone24x7Img1, position: "object-center" },
      { src: zone24x7Img2, position: "object-center" },
      { src: zone24x7Img3, position: "object-center" },
      { src: zone24x7Img4, position: "object-center" },
    ],
    imageClass: "h-48",
  },
  {
    icon: Award,
    role: "Event Organizer",
    organization: "Compuvate Association | Ideathon 1.0 & DesignSprint",
    period: "2025",
    description:
      "Organized the Ideathon 1.0 and DesignSprint Competition under the Compuvate Association, fostering innovation and creative problem-solving among students through competitive challenges.",
    images: [
      { src: ideathonImg1, position: "object-center" },
      { src: ideathonImg2, position: "object-center" },
      { src: ideathonImg3, position: "object-center" },
    ],
    imageClass: "h-48",
  },
];

const ImageSlideshow = ({
  images,
  alt,
  imageClass,
}: {
  images: { src: string; position: string }[];
  alt: string;
  imageClass: string;
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`relative ${imageClass} overflow-hidden`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 w-full h-full object-cover ${images[current].position}`}
        />
      </AnimatePresence>

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-primary w-5"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const VolunteeringSection = () => {
  return (
    <section id="volunteering" className="py-16 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-gradient">Volunteering</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-4">
            {volunteering.map((vol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-xl bg-background border border-border shadow-card hover:border-primary/30 hover:shadow-glow transition-all duration-300 overflow-hidden"
              >
                {/* Image Slideshow */}
                <div className="relative">
                  <ImageSlideshow
                    images={vol.images}
                    alt={vol.organization}
                    imageClass={vol.imageClass}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-xs font-mono text-primary-foreground bg-primary/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {vol.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <vol.icon size={16} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {vol.role}
                      </h3>
                      <p className="text-accent text-xs font-medium mb-1">{vol.organization}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-1.5">{vol.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteeringSection;
