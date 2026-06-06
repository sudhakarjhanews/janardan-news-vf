"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Facebook = ({size=18,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = ({size=18,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
const Instagram = ({size=18,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Youtube = ({size=18,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>;
const MailIcon = ({size=18,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const Clock = ({size=18,color="currentColor"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;

function LiveClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const u = () => setT(new Intl.DateTimeFormat('hi-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata', hour12: true }).format(new Date()));
    u();
    const i = setInterval(u, 1000);
    return () => clearInterval(i);
  }, []);
  return <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 900, fontSize: "18px", color: "#FF9999", letterSpacing: "1px" }}>{t} IST</span>;
}

export default function Footer() {
  const sLinks = [
    { Icon: Facebook, url: "#", name: "Facebook", color: "#1877F2" },
    { Icon: Twitter, url: "#", name: "Twitter", color: "#1DA1F2" },
    { Icon: Instagram, url: "#", name: "Instagram", color: "#E4405F" },
    { Icon: Youtube, url: "#", name: "Youtube", color: "#FF0000" }
  ];

  const navItems = ["होम", "झारखंड", "राष्ट्रीय", "राजनीति", "तकनीक", "कृषि"];

  return (
    <footer style={{ background: "var(--navy-dark)" }}>
      <svg className="jwave" viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "auto", marginBottom: "-2px" }}>
        <path d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,0 L0,0 Z" fill="var(--bg-body)" />
      </svg>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "40px 20px 0" }}>
        <div className="j4col" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gap: "48px", marginBottom: "56px" }}>
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", textDecoration: "none" }}>
              <div className="jlogo-box" style={{ width: "56px", height: "56px", animation: "none", background: "linear-gradient(135deg,#CC0000,#ff4444)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="jlogo-text" style={{ fontSize: "32px", color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontWeight: 900 }}>JN</span>
              </div>
              <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 900, fontSize: "28px", letterSpacing: "1.5px", color: "#fff" }}>
                जनार्दन <span style={{ color: "#CC0000" }}>न्यूज़</span>
              </div>
            </Link>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#A0AEC0", marginBottom: "28px", fontWeight: 600 }}>
              यह मंच मुख्य रूप से झारखंड और राष्ट्रीय स्तर की घटनाओं व समाचारों के लिए बनाया गया है। हमारा उद्देश्य सत्य और तथ्य पर आधारित स्वतंत्र पत्रकारिता को बढ़ावा देना है।
            </p>
            <div style={{ display: "flex", gap: "14px" }}>
              {sLinks.map(({ Icon, url, name, color }, i) => (
                <a key={i} href={url} target="_blank" rel="noopener" aria-label={name}
                  style={{ width: "44px", height: "44px", background: "rgba(255,255,255,.06)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all .3s" }}
                  onMouseOver={e => { e.currentTarget.style.background = color; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 4px 16px ' + color + '60'; }}
                  onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <Icon size={18} color="currentColor" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 900, fontSize: "20px", color: "#fff", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "24px", paddingBottom: "12px", borderBottom: "4px solid var(--red)" }}>महत्वपूर्ण लिंक</div>
            <Link href="/about" className="jflink">हमारे बारे में</Link>
            <Link href="/policy" className="jflink">नीति व अस्वीकरण</Link>
            {navItems.map((l, i) => <Link key={i} href={`/category/${l}`} className="jflink">{l}</Link>)}
          </div>
          <div>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 900, fontSize: "20px", color: "#fff", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "24px", paddingBottom: "12px", borderBottom: "4px solid var(--red)" }}>संपर्क करें</div>
            <div style={{ fontSize: "16px", color: "#A0AEC0", marginBottom: "8px", fontWeight: 700 }}>सुझाव / समाचार:</div>
            <div style={{ fontSize: "19px", fontWeight: 800, color: "#fff", display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <MailIcon size={18} color="currentColor" /> sudhakarjhanews@gmail.com
            </div>
            <div style={{ fontSize: "16px", color: "#A0AEC0", marginBottom: "8px", fontWeight: 700 }}>विज्ञापन:</div>
            <div style={{ fontSize: "19px", fontWeight: 800, color: "#fff", display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <MailIcon size={18} color="currentColor" /> sudhakarjhanews@gmail.com
            </div>
            <div style={{ background: "rgba(255,255,255,.06)", padding: "16px 20px", borderRadius: "10px", display: "flex", alignItems: "center", gap: "12px" }}>
              <Clock size={18} color="#A0AEC0" />
              <LiveClock />
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "18px", fontWeight: 800, color: "#718096", letterSpacing: "1px" }}>© 2026 जनार्दन न्यूज़. सर्वाधिकार सुरक्षित।</span>
            <span style={{ fontSize: "15px", color: "#4a5568", fontWeight: 700 }}>Made with ❤️ in Jharkhand</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
