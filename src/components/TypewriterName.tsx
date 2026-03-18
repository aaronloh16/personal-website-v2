"use client";

import { useEffect, useRef, useState } from "react";

const names = ["Aaron Loh", "Aaron"];

// Timing tuned for feel — typing is deliberate, deleting is snappy
const TYPE_SPEED = 110;
const DELETE_SPEED = 60;
const HOLD_DURATION = 3200; // sit on completed name
const PAUSE_BEFORE_TYPE = 600; // beat after fully deleted

type Phase = "typing" | "holding" | "deleting" | "pausing";

export default function TypewriterName() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const nameIdx = useRef(0);

  useEffect(() => {
    const target = names[nameIdx.current];

    let timeout: ReturnType<typeof setTimeout>;

    switch (phase) {
      case "typing":
        if (text.length < target.length) {
          timeout = setTimeout(() => {
            setText(target.slice(0, text.length + 1));
          }, TYPE_SPEED + Math.random() * 40); // subtle human variance
        } else {
          timeout = setTimeout(() => setPhase("holding"), 0);
        }
        break;

      case "holding":
        timeout = setTimeout(() => setPhase("deleting"), HOLD_DURATION);
        break;

      case "deleting":
        if (text.length > 0) {
          timeout = setTimeout(() => {
            setText(text.slice(0, -1));
          }, DELETE_SPEED);
        } else {
          nameIdx.current = (nameIdx.current + 1) % names.length;
          timeout = setTimeout(() => setPhase("pausing"), 0);
        }
        break;

      case "pausing":
        timeout = setTimeout(() => setPhase("typing"), PAUSE_BEFORE_TYPE);
        break;
    }

    return () => clearTimeout(timeout);
  }, [text, phase]);

  return (
    <span>
      {text}
      <span
        className="ml-0.5 inline-block h-[0.72em] w-[3px] translate-y-[3px] animate-blink bg-black"
        aria-hidden="true"
      />
    </span>
  );
}
