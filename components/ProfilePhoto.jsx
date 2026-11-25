"use client";
import { useState } from "react";
import { profile } from "../data/content";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  const initials = profile.name.split(" ").map((w) => w[0]).join("");
  return (
    <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-2 border-accent md:h-80 md:w-80">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-card font-display text-7xl text-accent" aria-label={profile.name}>{initials}</div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
