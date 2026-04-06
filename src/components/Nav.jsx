import { useState } from "react";
import {  useEffect, useRef } from "react";
import {
  Globe,
  Users,
  ShieldCheck,
  CreditCard,
  ChevronDown,
  ArrowRight,
  Star,
  CheckCircle2,
  BarChart3,
  FileText,
  Building2,
  Zap,
  HeadphonesIcon,
  TrendingUp,
  Menu,
  X,
  Bell,
  Search,
  Settings,
  LogOut,
  Home,
  DollarSign,
  UserCheck,
  Briefcase,
  PieChart,
  Calendar,
  ChevronRight,
  MapPin,
  Clock,
  Award,
} from "lucide-react";
export default function Navbar({login, setLogin}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Products", hasDropdown: true, sub: ["Global Payroll","HR Core","Compliance","Benefits","Analytics"] },
    { label: "Solutions", hasDropdown: true, sub: ["For Startups","For Enterprise","For HR Teams","For Finance"] },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", hasDropdown: true, sub: ["Blog","Guides","Webinars","Help Center"] },
    { label: "Company", href: "/company" },
  ];

  return (
    <nav style={{
      position:"sticky", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(5,7,26,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s ease",
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", height: 72, gap: 40 }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "var(--gradient)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Globe size={18} color="#fff" />
          </div>
          <span className="sora" style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>
            pavyn
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, marginLeft: 16 }}>
          {navLinks.map((link) => (
            <div key={link.label} style={{ position: "relative" }}
              onMouseEnter={() => link.hasDropdown && setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}>
              <a href={link.href || "#"}
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  color: dropdown === link.label ? "#fff" : "var(--muted)",
                  textDecoration: "none", fontSize: 14, fontWeight: 500,
                  padding: "8px 14px", borderRadius: 8,
                  background: dropdown === link.label ? "var(--card)" : "transparent",
                  transition: "all 0.2s",
                }}>
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: dropdown === link.label ? "rotate(180deg)" : "rotate(0)" }} />}
              </a>
              {link.hasDropdown && dropdown === link.label && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", left: 0,
                  background: "var(--navy2)", border: "1px solid var(--border)",
                  borderRadius: 12, padding: 8, minWidth: 200,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}>
                  {link.sub.map((s) => (
                    <a key={s} href={`/${s.toLowerCase().replace(/\s+/g, "-")}`}
                      style={{
                        display: "block", padding: "10px 14px", color: "var(--muted)",
                        textDecoration: "none", fontSize: 14, borderRadius: 8,
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "var(--card)"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--muted)"; }}>
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} onClick={() => setLogin(1)}>
            {
                login ? <></> : 
                <>
                  <div  style={{ color: "var(--muted)",cursor:"pointer", textDecoration: "none", fontSize: 14, fontWeight: 500, padding: "8px 16px" }}>Log in</div>
                  <div style={{
                      background: "var(--gradient)",cursor:"pointer", color: "#fff", textDecoration: "none",
                      fontSize: 14, fontWeight: 600, padding: "10px 22px", borderRadius: 10,
                      boxShadow: "0 4px 20px rgba(91,106,248,0.35)",
                    }} onClick={() => setLogin(1)}>Get started free</div>
                </>
            }
        </div>

        {/* Mobile menu btn */}
        <button onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
