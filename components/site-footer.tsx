import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="brand footer-brand">Lovelace <b>GTM Studio</b></p>
          <p className="muted">Small, practical marketing improvements.<br />Southern Oregon.</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Lovelace GTM Studio</p>
      </div>
    </footer>
  );
}
