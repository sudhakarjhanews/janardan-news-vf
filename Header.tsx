"use client";

import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import Link from "next/link";
// Icons can be defined inline or imported. We'll use simple inline SVGs to match the original.
const SunIcon = ({size=20,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const MoonIcon = ({size=20,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
const SearchIcon = ({size=20,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const MenuIcon = ({size=20,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="18" y2="12"/><line x1="3" y1="18" x2="15" y2="18"/></svg>;

export default function Header() {
  const { theme, toggleTheme, fontScale, setFontScale } = useTheme();
  // Search state placeholder
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="jheader">
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none" }}>
            <div className="jlogo-box"><span className="jlogo-text">JN</span></div>
            <div>
              <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--text-primary)", lineHeight: 1.1, fontFamily: "'Noto Serif Devanagari', serif", letterSpacing: "-0.02em" }}>
                जनार्दन<span style={{ color: "var(--red)" }}>न्यूज़</span>
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "1px", marginTop: "2px" }}>सत्य। तथ्य। जन की आवाज़।</div>
            </div>
          </Link>

          <div className="jheader-actions" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {/* Font Controls */}
            <div className="jfont-ctrl jtm">
              <button className={`jfont-btn ${fontScale === 0.9 ? 'active' : ''}`} onClick={() => setFontScale(0.9)}>A-</button>
              <button className={`jfont-btn ${fontScale === 1.0 ? 'active' : ''}`} onClick={() => setFontScale(1.0)}>A</button>
              <button className={`jfont-btn ${fontScale === 1.1 ? 'active' : ''}`} onClick={() => setFontScale(1.1)}>A+</button>
            </div>
            {/* Theme Toggle */}
            <button onClick={toggleTheme} aria-label="Toggle Theme" style={{ background: "var(--bg-input)", border: "2px solid var(--border-color)", borderRadius: "50%", width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all .2s" }}>
              {theme === "light" ? <MoonIcon color="var(--navy)" /> : <SunIcon color="#FF9999" />}
            </button>
            {/* Search Button */}
            <button className="jsearch-btn" onClick={() => setSearchOpen(true)}>
              <SearchIcon size={18} color="currentColor" />
              <span>खोजें (⌘K)</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
