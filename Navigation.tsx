"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = ["होम", "झारखंड", "राष्ट्रीय", "राजनीति", "तकनीक", "कृषि", "स्वास्थ्य", "शिक्षा", "खेल", "विचार", "मनोरंजन", "हमारे बारे में", "नीति व अस्वीकरण"];

const categorySlugs: Record<string, string> = {
  "होम": "/",
  "झारखंड": "/category/jharkhand",
  "राष्ट्रीय": "/category/national",
  "राजनीति": "/category/politics",
  "तकनीक": "/category/tech",
  "कृषि": "/category/agriculture",
  "स्वास्थ्य": "/category/health",
  "शिक्षा": "/category/education",
  "खेल": "/category/sports",
  "विचार": "/category/opinion",
  "मनोरंजन": "/category/entertainment",
  "हमारे बारे में": "/about",
  "नीति व अस्वीकरण": "/policy"
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`jnav ${scrolled ? 'shrink' : ''}`}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", gap: "4px" }}>
          {navItems.map((item, i) => (
            <Link 
              key={i} 
              href={categorySlugs[item] || "/"} 
              className={`jnl ${item === "होम" ? "active" : ""}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
