import Section from '@/components/section';
import Card from '@/components/card';
import { Brain, Database, BarChart3, HardHat, GraduationCap, Briefcase } from 'lucide-react';
import Button from '@/components/button';

const services = [
  {
    icon: Brain,
    title: 'Central de Compras Inteligente (IA)',
    details: ['Algoritmos de clasificación BC3', 'Estimación predictiva de precios', 'Homologación automatizada de proveedores'],
    impact: 'Reducción drástica de desviaciones y optimización de stock.',
    duration: '8-16 semanas',
    highlight: true
  },
  {
    icon: Database,
    title: 'Implantación ERP (Dynamics 365 BC)',
    details: ['Migración experta desde SAP B1', 'Diseño de dimensiones analíticas', 'Automatización de flujos financieros'],
    impact: 'Control total del P&L en tiempo real y dato único.',
    duration: '6-9 meses'
  },
  {
    icon: Briefcase,
    title: 'Dirección Estratégica y Procesos',
    details: ['Diagnóstico Lean', 'Definición de KPIs y OKRs', 'Cadencias ejecutivas de seguimiento'],
    impact: 'Alineamiento total de la organización hacia objetivos rentables.',
    duration: 'Recurrente / Por proyecto'
  },
  {
    icon: HardHat,
    title: 'Lean Construction & Ops',
    details: ['Planificación Takt Time', 'Gestión de Cuellos de Botella', 'Reducción de WIP y desperdicios'],
    impact: 'Mayor productividad con los mismos recursos.',
    duration: '12-20 semanas'
  },
  {
    icon: BarChart3,
    title: 'Analítica Predictiva de Negocio',
    details: ['Modelos de alerta temprana', 'Cuadros de mando ejecutivos', 'Control de costes de obra'],
    impact: 'Toma de decisiones basada en hechos, no en intuiciones.',
    duration: '8-12 semanas'
  },
  {
    icon: GraduationCap,
    title: 'Formación Ejecutiva en IA',
    details: ['Productividad directiva con IA', 'Casos de uso reales en negocio', 'Adopción de herramientas digitales'],
    impact: 'Equipos más ágiles y capacitados tecnológicamente.',
    duration: 'Workshops / In-company'
  }
];

export const metadata = { title: 'Servicios de Consultoría' };

export default function Servicios() {
  return (
    <main>
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold mb-6">Soluciones de Alto Impacto</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Mis servicios no son horas de consultoría, son <strong>proyectos de transformación</strong> con entregables claros y retorno de inversión medible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Card key={s.title} className={`flex flex-col h-full ${s.highlight ? 'border-brand border-2 shadow-xl ring-4 ring-brand/10' : ''}`}>
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-lg ${s.highlight ? 'bg-brand text-white' : 'bg-slate-100 dark:bg-slate-800 text-brand'}`}>
                  <s.icon className="h-6 w-6" />
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-4">{s.title}</h2>
              
              <div className="flex-grow space-y-4">
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-brand mt-1">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Impacto en negocio:</p>
                <p className="text-sm text-brand font-medium mb-4">{s.impact}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Duración est.: {s.duration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl">
          <p className="text-lg font-medium mb-4">¿Necesitas un enfoque a medida o Interim Management?</p>
          <Button as="a" href="/contacto" variant="secondary">Consultar disponibilidad</Button>
        </div>
      </Section>
    </main>
  );
}
