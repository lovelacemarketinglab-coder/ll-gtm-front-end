import { PageIntro } from "@/components/page-intro";

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Tell me what needs attention.">
        <p>If your Google Business Profile is outdated, incomplete, or inconsistent, share a few details below.</p>
      </PageIntro>
      <section className="shell contact-grid">
        <form className="contact-form" aria-describedby="form-note">
          <div className="field-row"><label>First name<input name="firstName" autoComplete="given-name" /></label><label>Last name<input name="lastName" autoComplete="family-name" /></label></div>
          <label>Email<input type="email" name="email" autoComplete="email" /></label>
          <label>Business name<input name="businessName" autoComplete="organization" /></label>
          <label>Business location<input name="location" placeholder="City, Oregon" autoComplete="address-level2" /></label>
          <label>What would you like help with?<textarea name="message" rows={5} /></label>
          <button className="button disabled-button" type="button" aria-disabled="true">Inquiry form coming soon</button>
          <p className="form-note" id="form-note">This preview form does not send or store information yet. Contact delivery will be connected before launch.</p>
        </form>
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
