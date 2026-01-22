import Section from '@/components/section';
import { CheckCircle2, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';
import Button from '@/components/button';

export const metadata = { title: 'Sobre José Moya' };

export default function SobreMi() {
  return (
    <main>
      <Section>
        {/* INTRODUCCIÓN */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Ingeniero Aeroespacial con visión de Negocio.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Soy José Moya, actual <strong>Director de Innovación y Transformación Digital en Grupo Aconser</strong>. Mi carrera se define por una obsesión: optimizar procesos complejos para mejorar la rentabilidad.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Combino el rigor analítico de la ingeniería con la visión estratégica de un Executive MBA. No solo implemento tecnología; diseño la estrategia operativa que hace que esa tecnología genere dinero.
            </p>
            <div className="flex gap-4 pt-4">
              <Button as="a" href="/contacto" variant="primary">Contactar</Button>
              <Button as="a" href="https://linkedin.com/in/josemoyac" target="_blank" variant="secondary">LinkedIn</Button>
            </div>
          </div>
          <div className="w-full md:w-1/3">
             {/* Placeholder para foto real si la tienes, o tarjeta visual */}
             <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center border border-slate-200 dark:border-slate-700">
                <span className="text-6xl mb-4">🚀</span>
                <p className="font-heading font-bold text-xl">"Resolver retos sin soluciones previas"</p>
             </div>
          </div>
        </div>

        {/* TRAYECTORIA DESTACADA */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-brand" />
              <h2 className="text-2xl font-bold">Experiencia Ejecutiva</h2>
            </div>
            <ul className="space-y-6">
              <li>
                <h3 className="font-bold text-lg">Director de Innovación y Transformación Digital</h3>
                <p className="text-sm text-slate-500 mb-2">Grupo Aconser • Presente</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Liderando el plan de digitalización 2024-2027. Optimización de procesos, mejora de margen y despliegue de IA aplicada a negocio.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-lg">Ex-Director de Calidad</h3>
                <p className="text-sm text-slate-500 mb-2">Aciturri (Aeronáutica)</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Gestión de aeroestructuras, ramp-ups complejos y estabilización de procesos industriales bajo normativa estricta.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-brand" />
              <h2 className="text-2xl font-bold">Formación de Élite</h2>
            </div>
            <ul className="space-y-6">
              <li>
                <h3 className="font-bold text-lg">Executive MBA</h3>
                <p className="text-sm text-slate-500">San Telmo Business School</p>
                <p className="text-sm mt-2">Visión global de negocio, estrategia y gestión de P&L.</p>
              </li>
              <li>
                <h3 className="font-bold text-lg">Ingeniería Aeroespacial</h3>
                <p className="text-sm text-slate-500">Universidad de Sevilla</p>
                <p className="text-sm mt-2">Especialización en sistemas complejos y optimización matemática.</p>
              </li>
              <li>
                <h3 className="font-bold text-lg">Idiomas</h3>
                <p className="text-sm mt-2">Español (Nativo), Inglés (C1), Francés (B2).</p>
              </li>
            </ul>
          </div>
        </div>

        {/* HABILIDADES CLAVE */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Competencias Clave</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Estrategia de Negocio & P&L",
              "Implantación ERP (Business Central)",
              "IA Predictiva & Big Data",
              "Lean Construction & Industrialización",
              "Liderazgo de Equipos de Alto Rendimiento",
              "Compras & Cadena de Suministro 4.0"
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0" />
                <span className="font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PERSONAL - IKIGAI */}
        <div className="bg-brand text-white p-8 md:p-12 rounded-3xl text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Más allá del trabajo</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Me apasiona jugar al golf por su componente estratégico, divulgar avances tecnológicos y explorar oportunidades de inversión innovadoras. Mi objetivo final es la autonomía financiera mediante el emprendimiento y la generación de valor real.
          </p>
        </div>
      </Section>
    </main>
  );
}
