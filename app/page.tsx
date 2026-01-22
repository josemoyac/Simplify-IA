import Button from '@/components/button';
import Section from '@/components/section';
import Card from '@/components/card';
import Timeline from '@/components/timeline';
import { Target, ServerCog, Factory, LineChart, ShieldCheck, Cog } from 'lucide-react';

const methodology = ['Diagnóstico y Rentabilidad', 'Hoja de Ruta 3 Años', 'MVPs & Pilotos Rápidos', 'Escalado y Estandarización', 'Gobierno del Dato'];

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <Section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute bottom-0 left-6 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),_transparent_60%)]" />
        </div>
        <div className="text-center space-y-6 py-10">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand shadow-sm dark:border-brand/40 dark:bg-slate-900/70">
            Consultoría Estratégica + IA aplicada
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
            Maximiza la rentabilidad operativa con <span className="text-brand">IA y rigor aeroespacial</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transformo constructoras e industrias en organizaciones de alto rendimiento. Integro procesos estandarizados, ERP (Business Central) e IA predictiva para blindar el margen y eliminar ineficiencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button as="a" href="/contacto" variant="primary" className="text-lg px-8">Agenda una reunión estratégica</Button>
            <Button as="a" href="/jose-moya.pdf" variant="secondary">Descargar perfil ejecutivo</Button>
          </div>
          <div className="grid gap-4 pt-8 md:grid-cols-3 text-left">
            {[
              {
                title: 'Margen defendido',
                copy: 'Procesos y KPIs que aseguran rentabilidad estable desde la obra hasta finanzas.'
              },
              {
                title: 'ERP + datos unificados',
                copy: 'Business Central como columna vertebral para decisiones en tiempo real.'
              },
              {
                title: 'IA lista para operar',
                copy: 'Automatizaciones predictivas sin fricción en operaciones críticas.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/60"
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.copy}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 pt-6">
            Estrategia aplicada en: <span className="font-semibold text-slate-700 dark:text-slate-200">Grupo Aconser • Aciturri • San Telmo Business School</span>
          </p>
        </div>
      </Section>

      {/* SECTORES - ENFOQUE INGENIERÍA */}
      <Section id="sectores">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Especialización</p>
          <h2 className="text-3xl font-heading mt-3 font-bold">Especialización Sectorial</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-4 transition-colors group-hover:bg-brand group-hover:text-white">
              <Factory className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Construcción 4.0</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Industrialización de procesos y control de obra en tiempo real. Reducción de variabilidad y carga física mediante estandarización Lean.
            </p>
          </Card>
          <Card className="group">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-4 transition-colors group-hover:bg-brand group-hover:text-white">
              <ServerCog className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Energía y Renovables</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Gobierno de costes en proyectos complejos. Integración de compras inteligentes para evitar desviaciones en P&L.
            </p>
          </Card>
          <Card className="group">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-4 transition-colors group-hover:bg-brand group-hover:text-white">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Aeronáutica e Industrial</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Gestión de *ramp-ups* y calidad total. Aplicación de OEE, FPY y Takt Time para maximizar la capacidad productiva.
            </p>
          </Card>
        </div>
      </Section>

      {/* VALOR DIFERENCIAL - EL MÉTODO AEROESPACIAL */}
      <Section className="relative">
        <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/60">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Por qué un Ingeniero Aeroespacial en tu empresa</h2>
              <p className="text-lg mb-6 text-slate-600 dark:text-slate-300">
                La construcción y la industria moderna ya no admiten la gestión por intuición. Aplico la mentalidad de "cero defectos" y sistemas complejos al negocio.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-brand mt-1" />
                  <div>
                    <strong className="block text-slate-900 dark:text-slate-100">Rigor y Procedimiento</strong>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Procesos auditables y estandarizados, sin depender de "héroes".</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <LineChart className="h-6 w-6 text-brand mt-1" />
                  <div>
                    <strong className="block text-slate-900 dark:text-slate-100">Decisiones basadas en Datos</strong>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Analítica predictiva para anticipar problemas, no solo reportarlos.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Cog className="h-6 w-6 text-brand mt-1" />
                  <div>
                    <strong className="block text-slate-900 dark:text-slate-100">Visión de Sistema (MBA)</strong>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Entiendo cómo un cambio técnico impacta en la cuenta de resultados.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/90 dark:bg-slate-950/70 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-xl mb-4">Mi Ikigai Profesional</h3>
              <p className="italic text-slate-600 dark:text-slate-400 mb-6">
                "Transformar empresas en organizaciones altamente productivas mediante la integración de procesos, IA y liderazgo efectivo."
              </p>
              <Button as="a" href="/sobre-mi" variant="secondary" className="w-full">Conoce mi trayectoria</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* METODOLOGÍA */}
      <Section id="metodologia">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Método</p>
          <h2 className="text-3xl font-heading mt-3 font-bold">Hoja de Ruta de Transformación</h2>
        </div>
        <Timeline steps={methodology.map((m) => ({ title: m }))} />
      </Section>

      {/* CTA FINAL */}
      <Section id="cta-final">
        <div className="bg-gradient-to-r from-brand via-emerald-600 to-green-600 text-white rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">¿Tu empresa está lista para escalar?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Hablemos de tus cuellos de botella y diseñemos una solución orientada al margen.
          </p>
          <div className="flex justify-center gap-4">
            <Button as="a" href="/contacto" className="bg-white text-brand hover:bg-slate-100 font-bold px-8 py-3 rounded-lg transition-colors">
              Cuéntame tu reto
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
