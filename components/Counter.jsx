"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value, label }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(value); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let i = 0;
      const t = setInterval(() => { i += 1; setN(i); if (i >= value) clearInterval(t); }, 70);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-6xl text-accent">{n}+</p>
      <p className="mt-2 text-muted">{label}</p>
    </div>
  );
}
