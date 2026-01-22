import { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  as?: React.ElementType;
  href?: string;
  className?: string;
  [key: string]: any;
}

export default function Button({
  children,
  variant = 'primary',
  as: Comp = 'button',
  className,
  ...props
}: Props) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900';
  const styles = {
    primary: 'bg-gradient-to-r from-brand to-emerald-600 text-white shadow-lg shadow-brand/30 hover:-translate-y-0.5 hover:shadow-brand/40',
    secondary: 'border border-slate-200 bg-white/80 text-slate-700 hover:border-brand/60 hover:text-brand hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200'
  };
  return (
    <Comp className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </Comp>
  );
}
