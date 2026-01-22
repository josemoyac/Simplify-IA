interface Step { title: string; }

export default function Timeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-5">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className="relative flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/60"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-semibold">
            {i + 1}
          </span>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{s.title}</span>
        </li>
      ))}
    </ol>
  );
}
