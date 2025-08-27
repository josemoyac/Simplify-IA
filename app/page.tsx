import Link from 'next/link';
import Button from '@/components/button';
import Section from '@/components/section';
import Card from '@/components/card';
import Timeline from '@/components/timeline';
import KPI from '@/components/kpi';
import Testimonials from '@/components/testimonial';
import { Check, Target, ServerCog, Brain, Factory, LineChart, GraduationCap } from 'lucide-react';

const services = [
  { icon: Target, title: 'Dirección estratégica y operativa', desc: 'Gobierno de objetivos, KPIs, cuadros de mando y cadencias ejecutivas para foco, alineamiento y entrega.' },
  { icon: ServerCog, title: 'Implantación ERP (Dynamics 365 BC)', desc: 'Migración desde SAP B1, diseño de dimensiones estables, gobierno de datos, automatización de procesos y formación.' },
  { icon: Brain, title: 'Central de Compras Inteligente (IA)', desc: 'Algoritmos para BC3/códigos padre-hijo, estimación de precios, homologación de proveedores y control de desviaciones.' },
  { icon: Factory, title: 'Lean Construction y excelencia operacional', desc: 'Flujo, Takt, reducción de WIP, estándares de trabajo y resolución de cuellos de botella.' },
  { icon: LineChart, title: 'Analítica predictiva', desc: 'Modelos de alerta temprana de costes y plazos; decisiones basadas en datos, no en intuiciones.' },
  { icon: GraduationCap, title: 'Formación ejecutiva en IA aplicada', desc: 'Programas prácticos para directivos y mandos, productividad y casos reales.' }
];

const methodology = ['Diagnóstico', 'Hoja de Ruta', 'MVPs & Pilotos', 'Escalado', 'Gobierno & Mejora Continua'];

const results = [
  { context: 'Ramp-up aeroestructuras (etapa en Aciturri)', action: 'implementación SQDCP, OEE/FPY, Takt y war-rooms', result: 'estabilización ~6 meses en takt ≈ 1 u con WIP ~0 en inter-fases' },
  { context: 'Roadmap 2024–27 (Grupo Aconser)', action: 'migración SAP B1 → Dynamics 365 BC, analítica predictiva de coste/obra y Central de Compras Inteligente', result: 'optimizar margen' }
];

export default function Home() {
  return (
    <main>
      <Section>
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-heading font-bold">Transformo tu empresa en una organización más productiva y rentable.</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">Integro procesos estandarizados, ERP (Dynamics 365 Business Central) e IA aplicada para controlar costes, anticipar desviaciones y acelerar la ejecución.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="a" href="/contacto" variant="primary">Agenda una reunión</Button>
            <Button as="a" href="/jose-moya.pdf" variant="secondary">Descargar perfil</Button>
          </div>
          <p className="text-sm max-w-2xl mx-auto">
Soy José Moya, Ingeniero Aeroespacial (Univ. de Sevilla) y Executive MBA (San Telmo). Director de Innovación y Transformación Digital en Grupo Aconser (&gt;€160M). +10 años liderando estrategia, operaciones y calidad en construcción y aeronáutica. Especialista en ERP (Dynamics 365 Business Central), analítica avanzada, IA aplicada a compras y control de obra, y excelencia operacional (Lean). He gestionado P&L, ramp-ups complejos y cuadros de mando SQDCP con resultados medibles.
          </p>
        </div>
      </Section>

      <Section id="servicios">
        <h2 className="text-2xl font-heading mb-8 text-center">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title}>
              <div className="flex items-start gap-4">
                <s.icon className="h-6 w-6 text-brand" />
                <div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="metodologia">
        <h2 className="text-2xl font-heading mb-8 text-center">Metodología</h2>
        <Timeline steps={methodology.map((m) => ({ title: m }))} />
      </Section>

      <Section id="resultados">
        <h2 className="text-2xl font-heading mb-8 text-center">Resultados destacables</h2>
        <div className="space-y-4">
          {results.map((r) => (
            <KPI key={r.context} {...r} />
          ))}
        </div>
      </Section>

      <Section id="sectores">
        <h2 className="text-2xl font-heading mb-8 text-center">Sectores</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold mb-2">Construcción</h3>
            <p className="text-sm">ROI operativo mediante estandarización y control de obra.</p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Energía</h3>
            <p className="text-sm">Ejecución de proyectos con datos y gobierno de costes.</p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Aeronáutica/Industrial</h3>
            <p className="text-sm">Productividad y calidad en ramp-ups complejos.</p>
          </Card>
        </div>
      </Section>

      <Section>
        <Testimonials items={[]} />
      </Section>

      <Section id="cta-final">
        <div className="text-center">
          <Button as="a" href="/contacto" variant="primary">Cuéntame tu reto</Button>
        </div>
      </Section>
    </main>
  );
}
