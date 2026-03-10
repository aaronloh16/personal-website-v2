import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

export default function LinkWithUpRightArrow({
  text,
  href,
  prefetch = true,
}: {
  text: string;
  href: string;
  prefetch?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/link w-fit"
      prefetch={prefetch}
    >
      <LinkOrButtonContent text={text} />
    </Link>
  );
}

export function ButtonWithUpRightArrow({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group/link w-fit"
      role="button"
      tabIndex={0}
    >
      <LinkOrButtonContent text={text} />
    </div>
  );
}

function LinkOrButtonContent({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-sm text-black transition-colors group-hover/link:text-darkTeal">
      {text}
      <IconArrowUpRight
        size={14}
        stroke={1.5}
        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      />
    </span>
  );
}
