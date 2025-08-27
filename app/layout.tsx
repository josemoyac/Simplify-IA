import './globals.css';
import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import Schema from '@/lib/schema';

export const metadata: Metadata = {
  title: 'SIMPLIFY·IA | José Moya Consulting',
  description: 'Estrategia, Operaciones y Transformación Digital con impacto real en margen y productividad.',
  openGraph: {
    title: 'SIMPLIFY·IA | José Moya Consulting',
    description: 'Estrategia, Operaciones y Transformación Digital con impacto real en margen y productividad.',
    images: ['/og-image.svg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIMPLIFY·IA | José Moya Consulting',
    description: 'Estrategia, Operaciones y Transformación Digital con impacto real en margen y productividad.',
    images: ['/og-image.svg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 pt-16">
        <Schema />
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
