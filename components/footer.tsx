import Link from 'next/link';
import Container from './container';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/70 bg-white/70 dark:border-slate-800/80 dark:bg-slate-900/60 text-sm backdrop-blur">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p className="text-slate-500 dark:text-slate-400">© 2025 José Moya Carrasco</p>
          <div className="flex gap-4 text-slate-600 dark:text-slate-300">
            <Link href="/aviso-legal" className="hover:text-brand">Aviso Legal</Link>
            <Link href="/privacidad" className="hover:text-brand">Privacidad</Link>
            <Link href="/cookies" className="hover:text-brand">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
