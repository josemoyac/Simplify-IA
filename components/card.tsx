import { ReactNode } from 'react';

export default function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm bg-white dark:bg-slate-800">{children}</div>;
}
