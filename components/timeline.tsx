interface Step { title: string; }

export default function Timeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="flex flex-col md:flex-row md:items-center md:justify-between">
      {steps.map((s, i) => (
        <li key={s.title} className="flex items-center md:flex-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white mr-2">{i + 1}</span>
          <span>{s.title}</span>
          {i < steps.length - 1 && <span className="mx-2 hidden md:block">→</span>}
        </li>
      ))}
    </ol>
  );
}
