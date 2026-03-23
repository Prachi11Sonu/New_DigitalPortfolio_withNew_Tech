import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

function ContactSection({ personal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const contacts = [
    { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
    { label: "GitHub", value: personal.github, href: personal.github, icon: Github },
    { label: "LinkedIn", value: personal.linkedin, href: personal.linkedin, icon: Linkedin },
    { label: "Location", value: personal.location, href: "#contact", icon: MapPin },
  ];

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!accessKey) {
      setStatus({
        type: "error",
        message:
          "Contact form is not configured yet. Add your Web3Forms access key to enable submissions.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message right now.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-shell scroll-mt-24 py-10 pb-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something thoughtful and useful together"
        subtitle="You can contact me here by sharing your name, email, and message."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="section-card p-8"
        >
          <h3 className="font-display text-2xl font-semibold text-primary">Connect directly</h3>
          <div className="mt-6 space-y-4">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="surface-muted flex items-center gap-4 rounded-3xl p-4 transition hover:-translate-y-1 hover:shadow-card"
              >
                <span className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary/70">{label}</p>
                  <p className="mt-1 break-all font-medium text-primary">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="section-card p-8"
        >
          <h3 className="font-display text-2xl font-semibold text-primary">Send a message</h3>
          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-surface rounded-2xl border border-primary/10 px-4 py-3 text-ink outline-none transition focus:border-primary/40"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-surface rounded-2xl border border-primary/10 px-4 py-3 text-ink outline-none transition focus:border-primary/40"
            />
            <textarea
              rows="6"
              name="message"
              placeholder="Tell me a little about your idea..."
              value={formData.message}
              onChange={handleChange}
              required
              className="input-surface rounded-3xl border border-primary/10 px-4 py-3 text-ink outline-none transition focus:border-primary/40"
            />
            {status.message ? (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-secondary" : "status-error"
                }`}
              >
                {status.message}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
