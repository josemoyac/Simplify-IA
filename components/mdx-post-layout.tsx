import { ReactNode } from 'react';
import Container from './container';
import Button from './button';

interface Meta { title: string; readingTime: string; }

export default function MDXPostLayout({ children, meta }: { children: ReactNode; meta: Meta }) {
  return (
    <Container>
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="font-heading text-3xl mb-2">{meta.title}</h1>
        <p className="text-sm text-slate-500 mb-8">{meta.readingTime} min</p>
        {children}
        <Button as="a" href="#" className="mt-8">Descargar checklist</Button>
      </article>
    </Container>
  );
}
