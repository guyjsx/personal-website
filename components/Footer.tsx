'use client';

interface Props {
  lastUpdated?: string;
}

export default function Footer({ lastUpdated }: Props) {
  const display = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric'
      })
    : undefined;
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      <div className="content-width">
        {display ? (
          <p>Resume last updated: {display}</p>
        ) : (
          <p>Built with Next.js • Crafted by Guy Stitt</p>
        )}
      </div>
    </footer>
  );
}

