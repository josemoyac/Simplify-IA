interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  if (!items.length) return null;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((t) => (
        <blockquote
          key={t.quote}
          className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/60"
        >
          <p className="text-sm italic text-slate-600 dark:text-slate-300">“{t.quote}”</p>
          <footer className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
            {t.author}
            {t.role && <span className="text-slate-500 dark:text-slate-400">, {t.role}</span>}
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
