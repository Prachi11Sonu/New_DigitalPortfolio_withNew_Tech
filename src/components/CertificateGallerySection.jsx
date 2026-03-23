import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function CertificateGallerySection({ certifications }) {
  return (
    <section id="certifications" className="section-shell scroll-mt-24 py-10">
      <SectionHeading
        eyebrow="Certifications"
        title="Certificate Gallery"
        subtitle="These certificates show the courses, training, and milestones I have completed so far."
        variant="centered"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {certifications.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.certificateUrl || "#"}
            target={item.certificateUrl ? "_blank" : undefined}
            rel={item.certificateUrl ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="section-card group flex h-full flex-col overflow-hidden p-5 transition duration-300 hover:-translate-y-2 hover:shadow-soft"
          >
            <div className="relative flex h-40 items-end overflow-hidden rounded-[24px] bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/20 p-4">
              {item.previewImage ? (
                <img
                  src={item.previewImage}
                  alt={item.name}
                  className="absolute inset-6 h-[136px] w-[calc(100%-3rem)] rounded-[18px] object-cover"
                />
              ) : item.certificateUrl?.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  title={`${item.name} preview`}
                  src={`${item.certificateUrl}#toolbar=0&navpanes=0&scrollbar=0&view=fitH`}
                  className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-[18px] border border-primary/10 bg-white/80"
                />
              ) : null}
              <span className="relative z-10 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                {item.accent}
              </span>
            </div>
            <div className="mt-4 flex flex-1 flex-col">
              <h3 className="min-h-[3.5rem] font-display text-lg font-semibold leading-7 text-primary">
                {item.name}
              </h3>
              <p className="mt-2 min-h-[3rem] text-sm leading-6 text-primary/75">
                {item.platform}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="pill text-xs">{item.year}</span>
                {item.certificateUrl ? (
                  <span className="inline-flex items-center text-sm font-medium text-secondary">
                    View
                    <ExternalLink className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                ) : (
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-secondary/70">
                    Added to gallery
                  </span>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default CertificateGallerySection;
