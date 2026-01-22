import { ReactNode } from 'react';
import clsx from 'clsx';
import Container from './container';

export default function Section({
  children,
  id,
  className
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={clsx('py-20 sm:py-24', className)}>
      <Container>{children}</Container>
    </section>
  );
}
