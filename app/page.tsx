import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Independent marketing studio · Southern Oregon</p>
          <h1>Make the basics<br /><em>work better.</em></h1>
          <p className="lede">LL GTM helps small businesses improve how they show up online—through focused, one-time projects with clear scope and hands-on review.</p>
          <div className="actions">
            <Link className="button" href="/services">View the current service <ArrowIcon /></Link>
            <Link className="text-link" href="/contact">Start a conversation <ArrowIcon /></Link>
          </div>
        </div>
        <aside className="field-note" aria-label="Current focus">
          <span className="note-number">01 / Current focus</span>
          <div className="signal-line" aria-hidden="true" />
          <h2>Google Business Profile<br />Cleanup &amp; Optimization</h2>
          <p>Correct it. Complete it. Improve how it presents your business.</p>
          <Link href="/services">See what’s included <ArrowIcon /></Link>
        </aside>
      </section>

      <section className="statement-section">
        <div className="shell statement-grid">
          <p className="eyebrow">A practical starting point</p>
          <div>
            <h2>Small improvements can remove real customer friction.</h2>
            <p>Outdated hours, missing services, unclear descriptions, and inconsistent links make it harder for people to understand and trust a business. The first LL GTM service focuses on fixing that foundation.</p>
          </div>
        </div>
      </section>

      <section className="shell principles">
        <article><span>01</span><h3>Fixed scope</h3><p>You know what the project covers before work begins.</p></article>
        <article><span>02</span><h3>Human reviewed</h3><p>AI may assist the work, but judgment and final QA stay human.</p></article>
        <article><span>03</span><h3>You keep ownership</h3><p>You retain control of your profile. Password sharing is not part of the process.</p></article>
      </section>

      <section className="shell closing-cta">
        <p className="eyebrow">Serving Medford, Grants Pass, Jacksonville &amp; Ashland</p>
        <h2>Have a profile that needs attention?</h2>
        <Link className="button button-light" href="/contact">Tell me about your business <ArrowIcon /></Link>
      </section>
    </>
  );
}
