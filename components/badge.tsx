import { ReactNode } from 'react';
import clsx from 'clsx';

export default function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={clsx('inline-flex items-center rounded bg-brand/10 px-2 py-1 text-xs font-medium text-brand', className)}>{children}</span>;
}
