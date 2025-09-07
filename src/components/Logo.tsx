'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/")} aria-label="Aurum Delights" className="inline-flex items-center gap-3 group">
      <span className="relative h-10 w-10 md:h-12 md:w-12 rounded-xl overflow-hidden ring-2 ring-[var(--gold-400)]/60 shadow-[0_8px_24px_rgba(245,160,0,0.35)] transition-transform group-hover:scale-105">
        <Image src="/images/logo.png" alt="Aurum Delights logo" fill className="object-contain" priority />
      </span>
      <span className="hidden sm:inline-block text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide leading-tight pb-1 bg-gradient-to-r from-[var(--gold-400)] via-[var(--gold-500)] to-[var(--gold-400)] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
        Aurum Delights
      </span>
    </button>
  );
}