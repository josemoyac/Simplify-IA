import Section from '@/components/section';
import Card from '@/components/card';
import KPI from '@/components/kpi';

const cases = [
  {
    context: 'Sector Aeronáutico (Aciturri)',
    action: 'Gestión de Ramp-up y Calidad',
    result: 'Estabilización de procesos en 6 meses con WIP ≈ 0 en interfases.',
    details: 'Implementación de sistema SQDCP, medición de OEE/FPY y takt time en entorno de alta exigencia normativa. Uso de war-rooms para gestión visual de incidencias.',
    metrics: [
      { label: 'Tiempo Estabilización', value: '6 meses' },
      { label: 'WIP Interfase', value: '~0 uds' },
      { label: 'Metodología', value: 'Lean/Takt' }
    ]
  },
  {
    context: 'Construcción (Grupo Aconser)',
    action: 'Transformación Digital & ERP',
    result: 'Migración SAP B1 a Dynamics 365 Business Central y Analítica Predictiva.',
    details: 'Diseño de hoja de ruta 2024-2027. Integración de IA en compras y estandarización de control de obra para optimizar el margen operativo del grupo.',
    metrics: [
      { label: 'Horizonte', value: '2024-27' },
      { label: 'Tecnología', value: 'Dyn 365 BC' },
      { label: 'Foco', value: 'Margen' }
    ]
  },
  {
    context: 'Compras y Aprovisionamiento',
    action: 'Central de Compras Inteligente (IA)',
    result: 'Algoritmos de códigos padre-hijo y estimación de precios.',
    details: 'Desarrollo de modelos de IA para la homologación automática de proveedores y detección de desviaciones de precios antes de la contratación.',
    metrics: [
      { label: 'Innovación', value: 'IA/ML' },
      { label: 'Aplicación', value: 'Precios' },
      { label: 'Objetivo', value: 'Eficiencia' }
    ]
  }
];

export const metadata = { title: 'Casos de Éxito' };

export default function Casos() {
  return (
    <main>
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">Resultados Reales</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            La teoría está bien, pero los resultados mandan. Aquí hay ejemplos concretos de cómo he aplicado ingeniería y estrategia para resolver problemas complejos.
          </p>
        </div>
        
        <div className="space-y-8">
          {cases.map((c, idx) => (
            <Card key={idx} className="border-l-4 border-l-brand overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <span className="text-xs font-bold tracking-wider text-brand uppercase">{c.context}</span>
                    <h2 className="text-2xl font-bold mt-1">{c.action}</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {c.details}
                  </p>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Resultado Clave:</p>
                    <p className="text-slate-700 dark:text-slate-300">{c.result}</p>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center gap-4 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 pt-6 md:pt-0 md:pl-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="block text-xs text-slate-500 uppercase">{m.label}</span>
                      <span className="block text-lg font-bold text-brand">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
