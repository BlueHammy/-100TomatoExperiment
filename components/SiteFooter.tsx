import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav" aria-label="Site">
        <Link href="/why">Why £100?</Link>
        <span className="footer-sep" aria-hidden="true">
          ·
        </span>
        <Link href="/what-you-get">What you get</Link>
        <span className="footer-sep" aria-hidden="true">
          ·
        </span>
        <Link href="/faq">FAQ</Link>
      </nav>
      <p className="footer-copy">
        «© 2026 £100 Tomato
        <br />
        A completely unnecessary purchase.»
      </p>
    </footer>
  );
}
