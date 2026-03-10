"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LightDarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const actualTheme = theme === "system" || !theme ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(actualTheme === "light" ? "dark" : "light")}
      aria-label={`Switch to ${actualTheme === "light" ? "dark" : "light"} mode`}
      className="p-4 text-grey transition-colors hover:text-black"
    >
      {actualTheme === "dark" ? (
        <IconSun size={18} stroke={1.5} />
      ) : (
        <IconMoon size={18} stroke={1.5} />
      )}
    </button>
  );
}
