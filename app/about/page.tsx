import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageIntro } from "@/components/page-intro";

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="Small by design. Curious by nature. Practical in the work.">
        <p>LL GTM Studio is an independent, hands-on marketing and go-to-market studio.</p>
      </PageIntro>
      <section className="shell about-grid">
        <div className="about-feature"><span className="note-number">Studio note / 01</span><p>Technology should make useful work more efficient—not make a simple project harder to understand.</p></div>
        <div className="prose">
          <h2>What that means today</h2>
          <p>LL GTM is exploring practical ways AI can support better marketing work while keeping human judgment, business context, and customer ownership at the center.</p>
          <p>For small businesses, that begins with contained projects: a real problem, a clear boundary, and a useful finish line. No oversized agency pitch. No promise that one tactic will transform a business overnight.</p>
          <p>The studio is early-stage, and the public service offering will grow only as new work is tested and shown to be genuinely useful.</p>
          <Link className="text-link" href="/services">See the current service <ArrowIcon /></Link>
        </div>
      </section>
      <section className="soft-section"><div className="shell values-row"><div><p className="eyebrow">Working principles</p><h2>Clear scope.<br />Useful work.<br />Honest claims.</h2></div><p>AI can speed up research, organization, and drafting. It does not replace careful review, local business knowledge, or the owner’s final say.</p></div></section>
    </>
  );
}
