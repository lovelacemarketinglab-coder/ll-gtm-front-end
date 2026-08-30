import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageIntro } from "@/components/page-intro";

const included = ["Review of current profile information", "Factual cleanup and consistency check", "Description, categories, products and services review", "Attributes, links and photo review", "One customer check-in and one reasonable revision round", "Final quality check and closeout notes"];
const excluded = ["Guaranteed rankings or search placement", "Full local SEO or website development", "Paid advertising", "Ongoing posting or review management", "Profile suspension recovery", "Complex or large multi-location work"];

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services / 01" title="Google Business Profile Cleanup & Optimization">
        <p>Correct it. Complete it. Improve how it presents your business.</p>
      </PageIntro>
      <section className="shell service-overview">
        <div className="service-summary">
          <p className="eyebrow">The outcome</p>
          <h2>A clearer, more complete profile your customers can trust.</h2>
          <p>This one-time service is for independent Southern Oregon businesses whose profile is incomplete, outdated, inconsistent, or simply overdue for a careful review.</p>
          <dl className="service-facts">
            <div><dt>Format</dt><dd>One-time, fixed-scope service</dd></div>
            <div><dt>Timing</dt><dd>About 5 business days after complete intake and access</dd></div>
            <div><dt>Access</dt><dd>Manager access—never your password</dd></div>
          </dl>
        </div>
        <div className="scope-card">
          <p className="eyebrow">What’s included</p>
          <ul className="check-list">{included.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="soft-section">
        <div className="shell split-section">
          <div><p className="eyebrow">Clear boundaries</p><h2>Focused cleanup, not a full marketing overhaul.</h2></div>
          <div><p>The service is deliberately narrow. It does not include:</p><ul className="plain-list">{excluded.map(item => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>
      <section className="shell process-section">
        <p className="eyebrow">A simple process</p>
        <ol className="process-grid">
          <li><span>01</span><h3>Intake &amp; access</h3><p>Share the facts about your business and grant secure Manager access.</p></li>
          <li><span>02</span><h3>Review &amp; cleanup</h3><p>Your profile is reviewed and improved within the agreed scope.</p></li>
          <li><span>03</span><h3>Check-in &amp; revision</h3><p>You review important changes and request one reasonable revision round.</p></li>
          <li><span>04</span><h3>Final QA &amp; closeout</h3><p>The profile receives a final check and access can be removed after completion.</p></li>
        </ol>
        <div className="center-action"><Link className="button" href="/contact">Ask about your profile <ArrowIcon /></Link></div>
      </section>
    </>
  );
}
