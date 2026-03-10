"use client";

import { useState } from "react";

export default function HiddenProjects({
  children,
}: {
  children: React.ReactNode;
}) {
  const [shown, setShown] = useState(false);

  if (shown) return <>{children}</>;

  return (
    <button
      onClick={() => setShown(true)}
      className="w-full py-4 text-left text-sm text-grey underline decoration-lightGrey underline-offset-4 transition-colors hover:text-black hover:decoration-black"
    >
      Show all projects
    </button>
  );
}
