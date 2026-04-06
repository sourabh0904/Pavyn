import { useState, useEffect, useRef } from "react";
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
import Navbar from './Nav'

/* ─── STYLES ─── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy: #05071a;
    --navy2: #0b0e2a;
    --navy3: #10153a;
    --accent: #5b6af8;
    --accent2: #7c8aff;
    --accent-soft: rgba(91,106,248,0.15);
    --green: #22d3a4;
    --green-soft: rgba(34,211,164,0.15);
    --white: #ffffff;
    --muted: #8b9cbe;
    --border: rgba(255,255,255,0.08);
    --card: rgba(255,255,255,0.04);
    --card-hover: rgba(255,255,255,0.07);
    --gradient: linear-gradient(135deg, #5b6af8 0%, #a78bfa 100%);
  }

  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--navy); color: var(--white); overflow-x: hidden; }

  .sora { font-family: 'Sora', sans-serif; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--navy); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }

  /* Logo Marquee */
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track { animation: marquee 28s linear infinite; }
  .marquee-track:hover { animation-play-state: paused; }

  /* Fade-in-up */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.7s ease both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }

  /* Glow blob */
  @keyframes blobMove {
    0%,100% { transform: translate(0,0) scale(1); }
    33%      { transform: translate(60px,-40px) scale(1.08); }
    66%      { transform: translate(-40px,30px) scale(0.95); }
  }
  .blob { animation: blobMove 12s ease-in-out infinite; }

  /* Pulse dot */
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.5;transform:scale(1.4);} }
  .pulse-dot { animation: pulse 2s ease-in-out infinite; }

  /* Dashboard number count */
  @keyframes countUp { from{opacity:0;transform:scale(0.8);} to{opacity:1;transform:scale(1);} }
  .count-in { animation: countUp 0.6s ease both; }

  /* Shimmer */
  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .shimmer {
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%);
    background-size: 200% 100%;
    animation: shimmer 2.5s linear infinite;
  }
`;

/* ─── HERO ─── */
function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 80 }}>
      {/* Blobs */}
      <div className="blob" style={{
        position: "absolute", width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(91,106,248,0.18) 0%, transparent 70%)",
        top: -200, left: -200, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,164,0.1) 0%, transparent 70%)",
        bottom: -100, right: 100, pointerEvents: "none",
      }} />

      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px", display: "flex", alignItems: "center", gap: 80, width: "100%" }}>
        {/* Left */}
        <div style={{ flex: 1, maxWidth: 660 }}>
          {/* Badge */}
          <div className="fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--accent-soft)", border: "1px solid rgba(91,106,248,0.3)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 32,
          }}>
            <Zap size={14} color="var(--accent2)" />
            <span style={{ fontSize: 13, fontWeight: 500, color: "var(--accent2)" }}>New: AI-powered payroll automation →</span>
          </div>

          <h1 className="sora fade-up delay-1" style={{
            fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 800,
            lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 24,
            color: "#fff",
          }}>
            Hire, pay & manage{" "}
            <span style={{ background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              global teams
            </span>{" "}
            without limits
          </h1>

          <p className="fade-up delay-2" style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", marginBottom: 40, maxWidth: 520 }}>
            Pavyn is the all-in-one HR platform that lets you onboard contractors and full-time employees in 150+ countries — compliantly, instantly, effortlessly.
          </p>

          <div className="fade-up delay-3" style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a href="/signup" style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "var(--gradient)", color: "#fff", textDecoration: "none",
              fontSize: 16, fontWeight: 600, padding: "14px 28px", borderRadius: 12,
              boxShadow: "0 8px 32px rgba(91,106,248,0.4)", transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(91,106,248,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 32px rgba(91,106,248,0.4)"; }}>
              Get started free <ArrowRight size={18} />
            </a>
            <a href="/demo" style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "var(--card)", border: "1px solid var(--border)",
              color: "#fff", textDecoration: "none",
              fontSize: 16, fontWeight: 500, padding: "14px 28px", borderRadius: 12,
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--card-hover)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--card)"}>
              Book a demo
            </a>
          </div>

          {/* Trust badges */}
          <div className="fade-up delay-4" style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { icon: <CheckCircle2 size={15} color="var(--green)" />, text: "No credit card required" },
              { icon: <CheckCircle2 size={15} color="var(--green)" />, text: "GDPR & SOC 2 compliant" },
              { icon: <CheckCircle2 size={15} color="var(--green)" />, text: "Setup in minutes" },
            ].map((b) => (
              <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {b.icon}
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Dashboard preview */}
        <div className="fade-up delay-2" style={{ flex: 1, maxWidth: 520, position: "relative" }}>
          <DashboardPreviewCard />
        </div>
      </div>
    </section>
  );
}

/* ─── DASHBOARD PREVIEW CARD ─── */
function DashboardPreviewCard() {
  return (
    <div style={{
      background: "var(--navy2)", border: "1px solid var(--border)", borderRadius: 20,
      overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
      position: "relative",
    }}>
      {/* Top bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 12, padding: "14px 20px",
        borderBottom: "1px solid var(--border)", background: "var(--navy3)",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{
          flex: 1, background: "var(--card)", borderRadius: 6, padding: "5px 12px",
          fontSize: 12, color: "var(--muted)",
        }}>app.pavyn.com/dashboard</div>
        <Bell size={16} color="var(--muted)" />
      </div>

      {/* Dashboard layout */}
      <div style={{ display: "flex", height: 420 }}>
        {/* Sidebar */}
        <div style={{ width: 180, borderRight: "1px solid var(--border)", padding: "20px 0" }}>
          <div style={{ padding: "0 12px", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--gradient)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Globe size={14} color="#fff" />
              </div>
              <span className="sora" style={{ fontSize: 13, fontWeight: 700 }}>pavyn</span>
            </div>
          </div>
          {[
            { icon: <Home size={14} />, label: "Dashboard", active: true },
            { icon: <Users size={14} />, label: "Team", active: false },
            { icon: <DollarSign size={14} />, label: "Payroll", active: false },
            { icon: <ShieldCheck size={14} />, label: "Compliance", active: false },
            { icon: <BarChart3 size={14} />, label: "Analytics", active: false },
            { icon: <FileText size={14} />, label: "Documents", active: false },
          ].map(item => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "9px 16px",
              margin: "2px 8px", borderRadius: 8, cursor: "pointer",
              background: item.active ? "var(--accent-soft)" : "transparent",
              color: item.active ? "var(--accent2)" : "var(--muted)",
              fontSize: 12, fontWeight: item.active ? 600 : 400,
            }}>
              {item.icon} {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: 20, overflow: "hidden" }}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Overview</div>
          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
            {[
              { label: "Total Employees", value: "1,284", icon: <Users size={12} />, color: "var(--accent)", delta: "+12%" },
              { label: "Payroll (USD)", value: "$2.4M", icon: <DollarSign size={12} />, color: "var(--green)", delta: "+5.2%" },
              { label: "Countries", value: "47", icon: <Globe size={12} />, color: "#f472b6", delta: "+3" },
            ].map(s => (
              <div key={s.label} style={{ background: "var(--card)", borderRadius: 10, padding: "12px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4, color: s.color, marginBottom: 6, fontSize: 11 }}>
                  {s.icon} <span style={{ color: "var(--muted)", fontSize: 10 }}>{s.label}</span>
                </div>
                <div className="sora" style={{ fontSize: 18, fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontSize: 10, color: "var(--green)", marginTop: 2 }}>{s.delta}</div>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div style={{ background: "var(--card)", borderRadius: 10, padding: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", marginBottom: 10 }}>Recent Payroll Runs</div>
            {[
              { country: "🇺🇸 United States", amount: "$840,000", status: "Completed", statusColor: "var(--green)" },
              { country: "🇩🇪 Germany", amount: "$210,000", status: "Processing", statusColor: "#facc15" },
              { country: "🇮🇳 India", amount: "$95,000", status: "Pending", statusColor: "var(--muted)" },
            ].map(r => (
              <div key={r.country} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "7px 0", borderBottom: "1px solid var(--border)",
                fontSize: 11,
              }}>
                <span>{r.country}</span>
                <span style={{ color: "var(--muted)" }}>{r.amount}</span>
                <span style={{
                  background: r.statusColor === "var(--green)" ? "var(--green-soft)" : "rgba(250,204,21,0.1)",
                  color: r.statusColor, padding: "2px 8px", borderRadius: 100, fontSize: 10, fontWeight: 600,
                }}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shimmer overlay */}
      <div className="shimmer" style={{ position: "absolute", inset: 0, pointerEvents: "none", borderRadius: 20 }} />
    </div>
  );
}

/* ─── LOGO MARQUEE ─── */
function LogoMarquee() {
  const logos = ["Stripe","Shopify","Notion","Figma","Linear","Vercel","Supabase","Airtable","Atlassian","HubSpot","Slack","Twilio"];
  const doubled = [...logos, ...logos];

  return (
    <section style={{ padding: "60px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
      <p style={{ textAlign: "center", fontSize: 13, color: "var(--muted)", fontWeight: 500, marginBottom: 32, letterSpacing: 1, textTransform: "uppercase" }}>
        Trusted by 35,000+ companies worldwide
      </p>
      <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)" }}>
        <div className="marquee-track" style={{ display: "flex", gap: 0 }}>
          {doubled.map((name, i) => (
            <div key={i} style={{
              minWidth: 160, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
              padding: "0 24px", borderRight: "1px solid var(--border)",
            }}>
              <span className="sora" style={{ fontSize: 15, fontWeight: 700, color: "var(--muted)", letterSpacing: "-0.5px" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  const stats = [
    { value: "150+", label: "Countries supported", icon: <MapPin size={20} color="var(--accent)" /> },
    { value: "35K+", label: "Businesses trust Pavyn", icon: <Building2 size={20} color="var(--green)" /> },
    { value: "$14B+", label: "Processed in payroll", icon: <DollarSign size={20} color="#f472b6" /> },
    { value: "98.7%", label: "Customer satisfaction", icon: <Star size={20} color="#facc15" /> },
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {stats.map((s) => (
            <div key={s.label} style={{
              background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20,
              padding: "36px 32px", textAlign: "center",
              transition: "border-color 0.3s, transform 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,106,248,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>{s.icon}</div>
              <div className="sora" style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-2px", background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ─── */
function Features() {
  const [active, setActive] = useState(0);
  const features = [
    {
      icon: <Globe size={24} />, title: "Global Payroll",
      desc: "Run payroll in 150+ countries with automatic tax calculations, local compliance, and multi-currency support — all in one click.",
      points: ["Automated tax filings", "Multi-currency payments", "Real-time FX rates", "Payslip generation"],
      color: "var(--accent)",
    },
    {
      icon: <UserCheck size={24} />, title: "Employer of Record",
      desc: "Hire full-time employees anywhere without setting up a local entity. Pavyn becomes the legal employer so you don't have to.",
      points: ["Legal hiring in 150+ countries", "Compliant contracts", "Benefits administration", "Visa & work permits"],
      color: "var(--green)",
    },
    {
      icon: <ShieldCheck size={24} />, title: "Compliance & Risk",
      desc: "Stay ahead of labor laws, tax regulations, and reporting requirements with AI-powered compliance monitoring.",
      points: ["Real-time law updates", "Risk alerts & audit logs", "IP & data protection", "GDPR & SOC 2 ready"],
      color: "#f472b6",
    },
    {
      icon: <BarChart3 size={24} />, title: "HR Analytics",
      desc: "Make smarter workforce decisions with powerful dashboards, headcount planning, and compensation benchmarking.",
      points: ["Headcount planning", "Compensation benchmarks", "Attrition predictions", "Custom reports"],
      color: "#facc15",
    },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--navy2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-soft)", borderRadius: 100, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(91,106,248,0.25)" }}>
            <Zap size={13} color="var(--accent2)" />
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent2)", textTransform: "uppercase", letterSpacing: 1 }}>Everything you need</span>
          </div>
          <h2 className="sora" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
            One platform, infinite possibilities
          </h2>
          <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 540, margin: "0 auto" }}>
            Replace your patchwork of HR tools with a unified platform built for global teams.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
          {features.map((f, i) => (
            <button key={f.title} onClick={() => setActive(i)} style={{
              display: "flex", alignItems: "center", gap: 8,
              background: active === i ? "var(--accent-soft)" : "var(--card)",
              border: `1px solid ${active === i ? "rgba(91,106,248,0.5)" : "var(--border)"}`,
              color: active === i ? "var(--accent2)" : "var(--muted)",
              padding: "10px 22px", borderRadius: 10, cursor: "pointer",
              fontSize: 14, fontWeight: 500, transition: "all 0.2s",
            }}>
              {f.icon} {f.title}
            </button>
          ))}
        </div>

        {/* Active Feature */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(91,106,248,0.15)`, display: "flex", alignItems: "center", justifyContent: "center", color: features[active].color }}>
                {features[active].icon}
              </div>
              <h3 className="sora" style={{ fontSize: 28, fontWeight: 700 }}>{features[active].title}</h3>
            </div>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.8, marginBottom: 32 }}>
              {features[active].desc}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {features[active].points.map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <CheckCircle2 size={18} color="var(--green)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "var(--muted)" }}>{p}</span>
                </div>
              ))}
            </div>
            <a href={`/${features[active].title.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, marginTop: 32,
                color: features[active].color, textDecoration: "none", fontWeight: 600, fontSize: 15,
              }}>
              Learn more <ArrowRight size={16} />
            </a>
          </div>

          {/* Feature visual */}
          <div style={{ background: "var(--navy)", border: "1px solid var(--border)", borderRadius: 20, padding: 32, minHeight: 360, position: "relative", overflow: "hidden" }}>
            <FeatureVisual index={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ index }) {
  const visuals = [
    // Global Payroll
    <div key="payroll" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 4 }}>Payroll Summary — June 2025</div>
      {[
        { flag: "🇺🇸", country: "United States", employees: 412, amount: "$1,240,800", status: "Done" },
        { flag: "🇬🇧", country: "United Kingdom", employees: 87, amount: "£312,000", status: "Done" },
        { flag: "🇩🇪", country: "Germany", employees: 54, amount: "€198,400", status: "Running" },
        { flag: "🇮🇳", country: "India", employees: 231, amount: "₹8,200,000", status: "Scheduled" },
      ].map(r => (
        <div key={r.country} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--card)", borderRadius: 10, padding: "12px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 20 }}>{r.flag}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{r.country}</div>
              <div style={{ fontSize: 11, color: "var(--muted)" }}>{r.employees} employees</div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="sora" style={{ fontSize: 13, fontWeight: 600 }}>{r.amount}</div>
            <div style={{ fontSize: 10, color: r.status === "Done" ? "var(--green)" : r.status === "Running" ? "#facc15" : "var(--muted)", fontWeight: 600 }}>{r.status}</div>
          </div>
        </div>
      ))}
    </div>,

    // EOR
    <div key="eor" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 4 }}>New Hire Onboarding</div>
      {[
        { step: "Contract drafted", done: true },
        { step: "Background check", done: true },
        { step: "Benefits enrollment", done: true },
        { step: "Payroll setup", done: false },
        { step: "Equipment shipping", done: false },
      ].map((s, i) => (
        <div key={s.step} style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: s.done ? "var(--green)" : "var(--card)",
            border: `2px solid ${s.done ? "var(--green)" : "var(--border)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {s.done && <CheckCircle2 size={14} color="#fff" />}
          </div>
          <span style={{ fontSize: 14, color: s.done ? "#fff" : "var(--muted)", fontWeight: s.done ? 500 : 400 }}>{s.step}</span>
          {s.done && <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--green)" }}>Complete</span>}
        </div>
      ))}
    </div>,

    // Compliance
    <div key="compliance" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 4 }}>Compliance Score</div>
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 8 }}>
        <div className="sora" style={{ fontSize: 52, fontWeight: 800, color: "var(--green)" }}>98%</div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>All critical checks passed. 2 minor items to review.</div>
      </div>
      {[
        { label: "Tax filings", score: 100, color: "var(--green)" },
        { label: "Contract validity", score: 97, color: "var(--green)" },
        { label: "Data privacy", score: 100, color: "var(--green)" },
        { label: "Benefits compliance", score: 91, color: "#facc15" },
      ].map(r => (
        <div key={r.label}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 5 }}>
            <span style={{ color: "var(--muted)" }}>{r.label}</span>
            <span style={{ color: r.color, fontWeight: 600 }}>{r.score}%</span>
          </div>
          <div style={{ height: 6, background: "var(--card)", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${r.score}%`, background: r.color, borderRadius: 3, transition: "width 0.8s ease" }} />
          </div>
        </div>
      ))}
    </div>,

    // Analytics
    <div key="analytics" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 4 }}>Headcount Growth</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 140, padding: "0 8px" }}>
        {[60, 72, 68, 85, 90, 95, 88, 100, 110, 118, 125, 140].map((v, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ width: "100%", height: `${v}%`, background: i === 11 ? "var(--gradient)" : "var(--accent-soft)", borderRadius: "4px 4px 0 0", transition: "height 0.5s ease" }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--muted)", padding: "0 8px" }}>
        {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => <span key={m}>{m}</span>)}
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
        <div style={{ flex: 1, background: "var(--card)", borderRadius: 10, padding: "12px 16px" }}>
          <div style={{ fontSize: 11, color: "var(--muted)" }}>Total Headcount</div>
          <div className="sora" style={{ fontSize: 24, fontWeight: 700, color: "var(--accent2)" }}>1,284</div>
          <div style={{ fontSize: 11, color: "var(--green)" }}>↑ 18.4% YoY</div>
        </div>
        <div style={{ flex: 1, background: "var(--card)", borderRadius: 10, padding: "12px 16px" }}>
          <div style={{ fontSize: 11, color: "var(--muted)" }}>Avg. Cost/Head</div>
          <div className="sora" style={{ fontSize: 24, fontWeight: 700, color: "#f472b6" }}>$11,200</div>
          <div style={{ fontSize: 11, color: "var(--green)" }}>↓ 3.1% vs last yr</div>
        </div>
      </div>
    </div>,
  ];

  return visuals[index];
}

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    { n: "01", icon: <Building2 size={28} />, title: "Set up your account", desc: "Create your workspace, invite your team, and connect your existing HR tools in minutes." },
    { n: "02", icon: <Users size={28} />, title: "Add your employees", desc: "Import your team or add new hires. We generate compliant contracts automatically for every country." },
    { n: "03", icon: <DollarSign size={28} />, title: "Run global payroll", desc: "Approve payroll with one click. We handle taxes, filings, and direct deposits in local currencies." },
    { n: "04", icon: <TrendingUp size={28} />, title: "Grow with confidence", desc: "Expand into new markets knowing Pavyn handles every compliance requirement as you scale." },
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 className="sora" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
            Up and running in 4 steps
          </h2>
          <p style={{ fontSize: 18, color: "var(--muted)" }}>Most customers complete their first payroll run within 48 hours.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, position: "relative" }}>
          {/* Connector line */}
          <div style={{ position: "absolute", top: 60, left: "12.5%", right: "12.5%", height: 1, background: "linear-gradient(90deg, var(--accent), var(--green))", opacity: 0.3 }} />

          {steps.map((s, i) => (
            <div key={s.n} style={{ position: "relative" }}>
              <div style={{
                width: 64, height: 64, borderRadius: 18,
                background: "var(--navy2)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--accent2)", marginBottom: 20, position: "relative", zIndex: 1,
              }}>
                {s.icon}
              </div>
              <div className="sora" style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{s.n}</div>
              <h4 className="sora" style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</h4>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  const testimonials = [
    { name: "Sarah Chen", role: "Head of People, Notion", rating: 5, text: "Pavyn cut our payroll processing time by 80%. What used to take our team a full week now takes an afternoon. Absolutely transformative." },
    { name: "Marcus Webb", role: "CFO, Linear", rating: 5, text: "The compliance coverage is unmatched. We expanded into 12 new countries last year and Pavyn handled every regulatory requirement without a single issue." },
    { name: "Priya Sharma", role: "VP HR, Figma", rating: 5, text: "Our employees love getting paid on time in their local currency. The self-service portal has dramatically reduced HR support tickets." },
    { name: "Tom Bauer", role: "CEO, Remote First Co.", rating: 5, text: "Finally a tool that gets global-first companies. Pavyn feels like it was built specifically for how we work — distributed, async, and growing fast." },
    { name: "Amara Osei", role: "HR Director, Vercel", rating: 5, text: "The analytics dashboard alone is worth the subscription. We now make headcount decisions based on real data, not gut feeling." },
    { name: "Jin Park", role: "COO, Supabase", rating: 5, text: "We've evaluated every major HR platform. Pavyn is the only one that actually delivers on the promise of unified global HR management." },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "var(--navy2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 className="sora" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
            Loved by HR teams worldwide
          </h2>
          <p style={{ fontSize: 18, color: "var(--muted)" }}>Don't take our word for it — hear from the teams scaling globally with Pavyn.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={t.name} style={{
              background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 28,
              transition: "border-color 0.3s, transform 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(91,106,248,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} color="#facc15" fill="#facc15" />
                ))}
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#c8d3e8", marginBottom: 24 }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: `hsl(${i * 60}, 60%, 55%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 15, fontWeight: 700, color: "#fff",
                }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  const [annual, setAnnual] = useState(true);
  const plans = [
    {
      name: "Starter", price: annual ? 29 : 35, desc: "For small teams getting started with global hiring.",
      features: ["Up to 10 employees", "5 countries", "Basic payroll", "Standard support", "Core HR tools"],
      cta: "Start free trial", highlight: false,
    },
    {
      name: "Growth", price: annual ? 79 : 95, desc: "For scaling companies hiring across multiple regions.",
      features: ["Up to 100 employees", "30 countries", "Advanced payroll", "Priority support", "Analytics & reporting", "EOR services", "Compliance monitoring"],
      cta: "Start free trial", highlight: true,
    },
    {
      name: "Enterprise", price: "Custom", desc: "For global organizations with complex requirements.",
      features: ["Unlimited employees", "150+ countries", "Custom integrations", "Dedicated CSM", "SLA guarantee", "Advanced security", "Custom contracts"],
      cta: "Contact sales", highlight: false,
    },
  ];

  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 className="sora" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: 18, color: "var(--muted)", marginBottom: 32 }}>No hidden fees. No per-country surcharges. Just one price that scales with you.</p>

          {/* Toggle */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 100, padding: "6px 8px" }}>
            <button onClick={() => setAnnual(false)} style={{
              padding: "8px 20px", borderRadius: 100, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500,
              background: !annual ? "#fff" : "transparent", color: !annual ? "#000" : "var(--muted)", transition: "all 0.2s",
            }}>Monthly</button>
            <button onClick={() => setAnnual(true)} style={{
              padding: "8px 20px", borderRadius: 100, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500,
              background: annual ? "#fff" : "transparent", color: annual ? "#000" : "var(--muted)", transition: "all 0.2s",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              Annual
              <span style={{ background: "var(--green-soft)", color: "var(--green)", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 100 }}>Save 20%</span>
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              background: plan.highlight ? "transparent" : "var(--card)",
              backgroundImage: plan.highlight ? "var(--gradient)" : "none",
              border: `1px solid ${plan.highlight ? "transparent" : "var(--border)"}`,
              borderRadius: 20, padding: 32, position: "relative",
              transform: plan.highlight ? "scale(1.04)" : "none",
              boxShadow: plan.highlight ? "0 20px 60px rgba(91,106,248,0.4)" : "none",
            }}>
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: "#fff", color: "#5b6af8", fontSize: 12, fontWeight: 700,
                  padding: "4px 16px", borderRadius: 100, whiteSpace: "nowrap",
                }}>Most Popular</div>
              )}
              <div className="sora" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{plan.name}</div>
              <p style={{ fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.7)" : "var(--muted)", marginBottom: 24, lineHeight: 1.6 }}>{plan.desc}</p>
              <div style={{ marginBottom: 28 }}>
                {typeof plan.price === "number" ? (
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span className="sora" style={{ fontSize: 48, fontWeight: 800 }}>${plan.price}</span>
                    <span style={{ color: plan.highlight ? "rgba(255,255,255,0.6)" : "var(--muted)", fontSize: 14 }}>/mo per employee</span>
                  </div>
                ) : (
                  <div className="sora" style={{ fontSize: 40, fontWeight: 800 }}>Custom</div>
                )}
              </div>
              <a href={plan.cta === "Contact sales" ? "/contact" : "/signup"}
                style={{
                  display: "block", textAlign: "center", padding: "13px 24px", borderRadius: 10,
                  background: plan.highlight ? "#fff" : "var(--accent-soft)",
                  color: plan.highlight ? "#5b6af8" : "var(--accent2)",
                  textDecoration: "none", fontSize: 14, fontWeight: 700,
                  marginBottom: 28, transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                {plan.cta}
              </a>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={15} color={plan.highlight ? "rgba(255,255,255,0.8)" : "var(--green)"} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.85)" : "var(--muted)" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ─── */
function CTABanner() {
  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{
          background: "var(--gradient)", borderRadius: 28, padding: "80px 60px",
          textAlign: "center", position: "relative", overflow: "hidden",
          boxShadow: "0 40px 100px rgba(91,106,248,0.4)",
        }}>
          {/* bg grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="sora" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
              Ready to hire globally?
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
              Join 35,000+ companies that use Pavyn to hire, pay, and manage global teams without the complexity.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/signup" style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "#fff", color: "#5b6af8",
                textDecoration: "none", fontSize: 16, fontWeight: 700,
                padding: "14px 32px", borderRadius: 12,
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)", transition: "transform 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = ""}>
                Start free trial <ArrowRight size={18} />
              </a>
              <a href="/demo" style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.15)", color: "#fff",
                textDecoration: "none", fontSize: 16, fontWeight: 600,
                padding: "14px 32px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.3)",
              }}>
                Book a demo
              </a>
            </div>
            <p style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>No credit card required · Cancel anytime · Setup in minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const cols = [
    { title: "Products", links: ["Global Payroll","Employer of Record","HR Core","Benefits","Compliance","Analytics"] },
    { title: "Solutions", links: ["Startups","Enterprise","HR Teams","Finance Teams","Remote Teams"] },
    { title: "Resources", links: ["Blog","Guides","Webinars","Help Center","API Docs","Status"] },
    { title: "Company", links: ["About","Careers","Press","Partners","Legal","Contact"] },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "80px 24px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--gradient)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Globe size={18} color="#fff" />
              </div>
              <span className="sora" style={{ fontSize: 22, fontWeight: 700 }}>pavyn</span>
            </div>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, maxWidth: 280 }}>
              Track and manage every payment eaisely
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {["🐦","💼","📸"].map((icon, i) => (
                <a key={i} href={["/twitter","/linkedin","/instagram"][i]}
                  style={{
                    width: 36, height: 36, borderRadius: 8, background: "var(--card)", border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none",
                    fontSize: 16, transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(91,106,248,0.5)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div className="sora" style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 20, letterSpacing: 0.5 }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map(link => (
                  <a key={link} href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, color: "var(--muted)" }}>© 2025 Pavyn, Inc. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy","Terms of Service","Cookie Settings"].map(l => (
              <a key={l} href={`/${l.toLowerCase().replace(/\s+/g, "-")}`}
                style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── ROOT ─── */
export default function LandingPage(  ) {
  return (
    <>
      <style>{styles}</style>
      <div style={{ minHeight: "100vh", background: "var(--navy)" }}>
        <Hero />
        <LogoMarquee />
        <Stats />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
