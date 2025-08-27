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
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2';
  const styles = {
    primary: 'bg-brand text-white hover:bg-green-600',
    secondary: 'border border-brand text-brand hover:bg-brand/10'
  };
  return (
    <Comp className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </Comp>
  );
}
