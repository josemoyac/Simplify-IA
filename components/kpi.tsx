interface Props {
  context: string;
  action: string;
  result: string;
}

export default function KPI({ context, action, result }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2 text-sm">
      <div>{context}</div>
      <div>{action}</div>
      <div className="font-semibold text-brand">{result}</div>
    </div>
  );
}
