import Section from '@/components/section';
import Card from '@/components/card';

const services = [
  {
    title: 'Dirección estratégica y operativa',
    details: ['Gobierno de objetivos y KPIs', 'Cadencias ejecutivas', 'Cuadros de mando'],
    artifacts: 'Hojas de ruta, dashboards, playbooks',
    duration: '12-24 semanas'
  },
  {
    title: 'Implantación ERP (Dynamics 365 BC)',
    details: ['Migración desde SAP B1', 'Diseño de dimensiones', 'Automatización de procesos'],
    artifacts: 'Estándares de datos, formación',
    duration: '16-32 semanas'
  },
  {
    title: 'Central de Compras Inteligente (IA)',
    details: ['Algoritmos BC3', 'Estimación de precios', 'Homologación de proveedores'],
    artifacts: 'Modelos y cuadros de control',
    duration: '8-16 semanas'
  },
  {
    title: 'Lean Construction y excelencia operacional',
    details: ['Flujo y Takt', 'Reducción de WIP', 'Resolución de cuellos de botella'],
    artifacts: 'Estándares de trabajo',
    duration: '12-20 semanas'
  },
  {
    title: 'Analítica predictiva',
    details: ['Alertas tempranas de costes y plazos'],
    artifacts: 'Modelos y dashboards',
    duration: '8-12 semanas'
  },
  {
    title: 'Formación ejecutiva en IA aplicada',
    details: ['Programas prácticos', 'Casos reales'],
    artifacts: 'Materiales y ejercicios',
    duration: '2-4 semanas'
  }
];

export const metadata = { title: 'Servicios' };

export default function Servicios() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-heading mb-8 text-center">Servicios</h1>
        <div className="space-y-6">
          {services.map((s) => (
            <Card key={s.title}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="mt-2 text-sm">Duración orientativa: {s.duration}</p>
              <p className="text-sm">Entregables típicos: {s.artifacts}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm">Modalidad opcional de proyectos a éxito.</p>
      </Section>
    </main>
  );
}
