import Link from 'next/link';
import Section from '@/components/section';
import { getPosts } from '@/lib/posts';

export const metadata = { title: 'Recursos' };

export default function Recursos() {
  const posts = getPosts();
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-heading mb-8 text-center">Recursos</h1>
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug} className="border-b pb-4">
              <Link href={`/recursos/${p.slug}`} className="text-xl font-semibold hover:text-brand">
                {p.title}
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
              <span className="text-xs">{p.category}</span>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
