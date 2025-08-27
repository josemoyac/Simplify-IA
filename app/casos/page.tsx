import Section from '@/components/section';
import Card from '@/components/card';

const cases = [
  {
    title: 'Alineamiento operación',
    before: 'Reporting reactivo',
    after: 'Tablero SQDCP diario/semanal con foco en throughput y coste',
    metrics: 'WIP ~0, puntualidad en hitos +20%'
  },
  {
    title: 'ERP a valor',
    before: 'Migración “técnica”',
    after: 'Rediseño de procesos, dimensiones y automatizaciones con impacto en margen',
    metrics: 'Tiempo de ciclo -15%, adopción de estándares 90%'
  },
  {
    title: 'Compras inteligentes',
    before: 'Precios dispersos',
    after: 'Homologación, estimación y negociación con datos',
    metrics: 'Desviaciones de compra -12%'
  }
];

export const metadata = { title: 'Casos' };

export default function Casos() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-heading mb-8 text-center">Casos</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Card key={c.title}>
              <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
              <p className="text-sm">Antes: {c.before}</p>
              <p className="text-sm">Después: {c.after}</p>
              <p className="mt-2 text-sm text-brand">{c.metrics}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
