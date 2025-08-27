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
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur z-50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-heading text-lg font-bold">SIMPLIFY·IA</Link>
        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand">
              {l.label}
            </Link>
          ))}
          <button onClick={toggle} aria-label="Cambiar tema" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
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
