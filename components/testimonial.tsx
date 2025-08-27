interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  if (!items.length) return null;
  return (
    <div className="space-y-6">
      {items.map((t) => (
        <blockquote key={t.quote} className="border-l-4 border-brand pl-4">
          <p className="italic">“{t.quote}”</p>
          <footer className="mt-2 text-sm font-medium">{t.author}{t.role && `, ${t.role}`}</footer>
        </blockquote>
      ))}
    </div>
  );
}
