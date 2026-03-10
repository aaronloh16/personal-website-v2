export default function StatusBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-grey">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-darkTeal" />
      {text}
    </span>
  );
}
