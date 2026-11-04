"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname() || "/";
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));
  return (
    <header className="header">
      <div className="stripe" aria-hidden="true"><span className="k" /><span className="r" /><span className="s" /><span className="g" /></div>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Chromelite Technologies — home">
          <img src="/logo.svg" alt="Chromelite Technologies" width={142} height={42} />
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav id="main-nav" className={`nav${open ? " open" : ""}`} aria-label="Main">
          {NAV.slice(0, -1).map((n) => (
            <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <Link href="/contact/" className="btn btn-primary" onClick={() => setOpen(false)}>Get a quote</Link>
        </nav>
      </div>
    </header>
  );
}
