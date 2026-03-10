export default function TechnologyTag({ text }: { text: string }) {
  return (
    <span className="rounded bg-lightTeal/60 px-2 py-0.5 text-xs text-darkTeal">
      {text}
    </span>
  );
}
