import Link from "next/link";
import { SiteFooter } from "./SiteFooter";

type ContentPageProps = {
  title: string;
  children: React.ReactNode;
};

export function ContentPage({ title, children }: ContentPageProps) {
  return (
    <div className="content-page">
      <main>
        <p className="content-back">
          <Link href="/">← Back to the tomato</Link>
        </p>
        <h1>{title}</h1>
        <div className="content-body">{children}</div>
        <SiteFooter />
      </main>
    </div>
  );
}
