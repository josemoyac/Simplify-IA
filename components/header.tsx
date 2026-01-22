'use client';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import Button from './button';
import { useTheme } from './theme-provider';

const links = [
  { href: '/', label: 'Home' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/casos', label: 'Casos' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' }
];

export default function Header() {
  const { toggle } = useTheme();
  return (
    <header className="fixed top-0 w-full bg-white/75 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200/60 dark:border-slate-800/60 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          SIMPLIFY·IA
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-brand dark:text-slate-300">
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className="p-2 rounded-full border border-slate-200/80 bg-white/80 text-slate-600 hover:text-brand hover:border-brand/50 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300"
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="h-4 w-4 hidden dark:block" />
          </button>
          <Button as="a" href="/contacto" className="ml-2">
            Agenda una reunión
          </Button>
        </div>
      </nav>
    </header>
  );
}
