import { ReactNode } from 'react';
import Container from './container';

export default function Section({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section id={id} className="py-16">
      <Container>{children}</Container>
    </section>
  );
}
