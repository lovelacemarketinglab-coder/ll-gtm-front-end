import { PageIntro } from "@/components/page-intro";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Tell me what needs attention.">
        <p>If your Google Business Profile is outdated, incomplete, or inconsistent, share a few details below.</p>
      </PageIntro>
      <section className="shell contact-grid">
        <ContactForm />
        <aside className="contact-aside">
          <p className="eyebrow">Good to know</p>
          <h2>A short, no-pressure first conversation.</h2>
          <p>We’ll confirm whether the current service fits your profile and explain what would happen next. If the work is outside the service scope, you’ll hear that clearly.</p>
          <div className="territory"><span>Initial service area</span><p>Medford · Grants Pass<br />Jacksonville · Ashland</p></div>
        </aside>
      </section>
    </>
  );
}
