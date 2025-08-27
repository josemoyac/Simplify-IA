import Section from '@/components/section';
import Card from '@/components/card';

export const metadata = { title: 'Sobre mí' };

export default function SobreMi() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-heading mb-8 text-center">Sobre mí</h1>
        <div className="space-y-6">
          <p className="text-sm">
Soy José Moya, Ingeniero Aeroespacial (Univ. de Sevilla) y Executive MBA (San Telmo). Director de Innovación y Transformación Digital en Grupo Aconser (&gt;€160M). +10 años liderando estrategia, operaciones y calidad en construcción y aeronáutica. Especialista en ERP (Dynamics 365 Business Central), analítica avanzada, IA aplicada a compras y control de obra, y excelencia operacional (Lean). He gestionado P&L, ramp-ups complejos y cuadros de mando SQDCP con resultados medibles.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Dirección estratégica y operativa.</li>
            <li>ERP (Dynamics 365 BC) + gobierno de datos.</li>
            <li>Lean/Excelencia Operacional.</li>
            <li>IA aplicada a compras y control de obra.</li>
            <li>Comunicación, liderazgo y gestión de cambio.</li>
          </ul>
          <p className="text-sm">Idiomas: Inglés C1, Francés B2.</p>
          <div className="flex gap-4 opacity-60">
            <div className="h-12 w-24 bg-slate-200 flex items-center justify-center rounded">US</div>
            <div className="h-12 w-24 bg-slate-200 flex items-center justify-center rounded">SanTelmo</div>
            <div className="h-12 w-24 bg-slate-200 flex items-center justify-center rounded">Aconser</div>
          </div>
        </div>
      </Section>
    </main>
  );
}
