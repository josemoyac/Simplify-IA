import Link from 'next/link';
import Container from './container';

export default function Footer() {
  return (
    <footer className="mt-24 bg-slate-100 dark:bg-slate-800 text-sm">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p>© 2025 José Moya Carrasco</p>
          <div className="flex gap-4">
            <Link href="/aviso-legal">Aviso Legal</Link>
            <Link href="/privacidad">Privacidad</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
