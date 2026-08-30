import Link from "next/link";

const links = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Lovelace GTM Studio home">
          <span className="brand-mark" aria-hidden="true">L</span>
          <span>Lovelace <b>GTM Studio</b></span>
        </Link>
        <nav aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
