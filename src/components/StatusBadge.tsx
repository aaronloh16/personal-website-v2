export default function StatusBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-darkTeal/30 bg-lightTeal/50 px-3 py-1 text-xs font-medium text-darkTeal">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-darkTeal" />
      {text}
    </span>
  );
}
