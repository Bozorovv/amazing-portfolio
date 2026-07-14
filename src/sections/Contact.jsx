import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container py-16 md:py-24"
    >
      <SectionTitle
        id="contact-title"
        title="Contact"
        subtitle="Have a project in mind? Let's talk."
      />
      <form
        className="mx-auto max-w-lg space-y-5"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Contact form"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-semibold text-text"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-glass-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-semibold text-text"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-glass-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-semibold text-text"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message..."
            className="w-full resize-none rounded-xl border border-glass-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
        </Button>
      </form>
    </section>
  );
}
