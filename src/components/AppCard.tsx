import Link from "next/link";

type AppCardProps = {
  name: string;
  description: string;
  category: string;
  status: string;
  href: string;
  index: string;
};

export function AppCard({
  name,
  description,
  category,
  status,
  href,
  index,
}: AppCardProps) {
  return (
    <article className="app-card">
      <div className="app-card-top">
        <span className="app-index">{index}</span>
        <span className="status-pill">{status}</span>
      </div>
      <p className="app-category">{category}</p>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link href={href} className="text-link">
        Lihat detail <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
