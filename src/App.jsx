import { useState, useEffect, useRef } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --teal: #0D7377;
    --teal-light: #14A085;
    --teal-pale: #E8F5F4;
    --navy: #0A2540;
    --navy-mid: #1A3A5C;
    --cream: #FAFAF8;
    --white: #FFFFFF;
    --gray: #6B7280;
    --gray-light: #F3F4F6;
    --accent: #F59E0B;
    --red-soft: #FEF2F2;
    --green-soft: #F0FDF4;
    --border: #E5E7EB;
    --shadow: 0 4px 24px rgba(10,37,64,0.08);
    --shadow-lg: 0 12px 48px rgba(10,37,64,0.12);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--navy);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(250,250,248,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 0 24px;
    display: flex; align-items: center; justify-content: space-between;
    height: 64px;
  }
  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 22px; color: var(--teal); letter-spacing: -0.5px;
    display: flex; align-items: center; gap: 8px;
  }
  .nav-logo span { color: var(--navy); }
  .nav-links { display: flex; gap: 4px; }
  .nav-link {
    background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 500;
    color: var(--gray); padding: 8px 14px; border-radius: 8px;
    transition: all 0.2s;
  }
  .nav-link:hover { color: var(--teal); background: var(--teal-pale); }
  .nav-cta {
    background: var(--teal); color: white; border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 600;
    padding: 10px 20px; border-radius: 10px; cursor: pointer;
    transition: all 0.2s;
  }
  .nav-cta:hover { background: var(--teal-light); transform: translateY(-1px); }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center;
    padding: 100px 24px 60px;
    background: linear-gradient(135deg, #FFFFFF 0%, #E8F5F4 50%, #F0FDFA 100%);
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; top: -100px; right: -100px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(13,115,119,0.08) 0%, transparent 70%);
    border-radius: 50%;
  }
  .hero::after {
    content: '';
    position: absolute; bottom: -80px; left: -80px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(13,115,119,0.05) 0%, transparent 70%);
    border-radius: 50%;
  }
  .hero-inner { max-width: 900px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--teal-pale); border: 1px solid rgba(13,115,119,0.2);
    color: var(--teal); font-size: 13px; font-weight: 600;
    padding: 6px 16px; border-radius: 100px; margin-bottom: 28px;
    animation: fadeUp 0.6s ease both;
  }
  .hero-badge-dot { width: 6px; height: 6px; background: var(--teal); border-radius: 50%; }
  .hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(38px, 6vw, 68px);
    line-height: 1.08; letter-spacing: -2px;
    color: var(--navy); margin-bottom: 24px;
    animation: fadeUp 0.6s 0.1s ease both;
  }
  .hero-title em { color: var(--teal); font-style: normal; }
  .hero-sub {
    font-size: 18px; color: var(--gray); max-width: 600px;
    margin: 0 auto 40px; font-weight: 400;
    animation: fadeUp 0.6s 0.2s ease both;
  }
  .hero-actions {
    display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
    animation: fadeUp 0.6s 0.3s ease both;
  }
  .btn-primary {
    background: var(--teal); color: white;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px; font-weight: 600;
    padding: 14px 32px; border-radius: 12px; border: none; cursor: pointer;
    transition: all 0.25s; box-shadow: 0 4px 16px rgba(13,115,119,0.3);
  }
  .btn-primary:hover { background: var(--teal-light); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(13,115,119,0.35); }
  .btn-secondary {
    background: white; color: var(--navy);
    font-family: 'DM Sans', sans-serif;
    font-size: 16px; font-weight: 600;
    padding: 14px 32px; border-radius: 12px;
    border: 1.5px solid var(--border); cursor: pointer;
    transition: all 0.25s;
  }
  .btn-secondary:hover { border-color: var(--teal); color: var(--teal); transform: translateY(-2px); }

  /* STATS BAR */
  .stats-bar {
    background: var(--navy);
    padding: 32px 24px;
  }
  .stats-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 24px; text-align: center;
  }
  .stat-item { padding: 8px; }
  .stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: 32px; color: var(--teal-light); line-height: 1;
    margin-bottom: 6px;
  }
  .stat-label { font-size: 13px; color: rgba(255,255,255,0.6); font-weight: 400; }
  .stat-desc { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 2px; }

  /* SECTIONS */
  .section { padding: 80px 24px; }
  .section-alt { background: white; }
  .section-inner { max-width: 1100px; margin: 0 auto; }
  .section-tag {
    display: inline-block;
    font-size: 12px; font-weight: 700; letter-spacing: 1.5px;
    text-transform: uppercase; color: var(--teal);
    margin-bottom: 12px;
  }
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(28px, 4vw, 44px);
    line-height: 1.1; letter-spacing: -1px;
    color: var(--navy); margin-bottom: 16px;
  }
  .section-sub {
    font-size: 17px; color: var(--gray);
    max-width: 620px; margin-bottom: 48px; font-weight: 400;
  }

  /* PROBLEM */
  .problem-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px; margin-top: 40px;
  }
  .problem-card {
    background: white; border: 1px solid var(--border);
    border-radius: 16px; padding: 28px;
    transition: all 0.25s;
    position: relative; overflow: hidden;
  }
  .problem-card::before {
    content: ''; position: absolute; top: 0; left: 0;
    width: 4px; height: 100%; background: var(--teal);
    transform: scaleY(0); transform-origin: top;
    transition: transform 0.3s;
  }
  .problem-card:hover::before { transform: scaleY(1); }
  .problem-card:hover { border-color: var(--teal); transform: translateY(-3px); box-shadow: var(--shadow); }
  .problem-pct { font-family: 'DM Serif Display', serif; font-size: 40px; color: var(--teal); line-height: 1; margin-bottom: 8px; }
  .problem-card h3 { font-size: 16px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
  .problem-card p { font-size: 14px; color: var(--gray); line-height: 1.6; }

  /* ROI BOX */
  .roi-box {
    background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);
    border-radius: 20px; padding: 36px 40px; margin-top: 40px;
    display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap;
  }
  .roi-box-icon { font-size: 48px; flex-shrink: 0; }
  .roi-box h3 { font-family: 'DM Serif Display', serif; font-size: 22px; color: white; margin-bottom: 12px; }
  .roi-box p { font-size: 15px; color: rgba(255,255,255,0.75); line-height: 1.7; }
  .roi-highlight { color: var(--teal-light); font-weight: 700; }

  /* SOLUTION */
  .features-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
  }
  .feature-card {
    background: var(--cream); border: 1px solid var(--border);
    border-radius: 16px; padding: 28px;
    transition: all 0.25s;
  }
  .feature-card:hover { background: white; box-shadow: var(--shadow); transform: translateY(-3px); }
  .feature-icon {
    width: 48px; height: 48px;
    background: var(--teal-pale); border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px; margin-bottom: 16px;
  }
  .feature-card h3 { font-size: 16px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
  .feature-card p { font-size: 14px; color: var(--gray); line-height: 1.6; }

  /* PRICING */
  .pricing-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px; align-items: start;
  }
  .pricing-card {
    background: white; border: 1.5px solid var(--border);
    border-radius: 20px; padding: 32px; position: relative;
    transition: all 0.25s;
  }
  .pricing-card:hover { border-color: var(--teal); box-shadow: var(--shadow-lg); }
  .pricing-card.featured {
    border-color: var(--teal);
    background: linear-gradient(160deg, var(--teal-pale) 0%, white 60%);
    box-shadow: var(--shadow-lg);
  }
  .pricing-badge {
    position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
    background: var(--teal); color: white;
    font-size: 11px; font-weight: 700; letter-spacing: 1px;
    text-transform: uppercase; padding: 4px 16px; border-radius: 100px;
  }
  .pricing-tier { font-size: 13px; font-weight: 700; color: var(--teal); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
  .pricing-price { font-family: 'DM Serif Display', serif; font-size: 36px; color: var(--navy); line-height: 1; }
  .pricing-period { font-size: 14px; color: var(--gray); font-weight: 400; }
  .pricing-divider { height: 1px; background: var(--border); margin: 24px 0; }
  .pricing-features { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .pricing-feature { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--navy); }
  .check { color: var(--teal); font-size: 16px; flex-shrink: 0; margin-top: 1px; }
  .cross { color: #D1D5DB; font-size: 16px; flex-shrink: 0; margin-top: 1px; }

  /* UNIT ECONOMICS */
  .econ-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }
  .econ-card {
    background: white; border: 1px solid var(--border);
    border-radius: 16px; padding: 28px; text-align: center;
    transition: all 0.25s;
  }
  .econ-card:hover { border-color: var(--teal); box-shadow: var(--shadow); }
  .econ-num { font-family: 'DM Serif Display', serif; font-size: 36px; color: var(--teal); line-height: 1; margin-bottom: 6px; }
  .econ-label { font-size: 14px; font-weight: 600; color: var(--navy); margin-bottom: 4px; }
  .econ-note { font-size: 13px; color: var(--gray); }

  /* PROJECTION TABLE */
  .proj-table { width: 100%; border-collapse: collapse; margin-top: 32px; }
  .proj-table th {
    background: var(--navy); color: white;
    font-size: 13px; font-weight: 600; letter-spacing: 0.5px;
    padding: 14px 20px; text-align: left;
  }
  .proj-table th:first-child { border-radius: 12px 0 0 0; }
  .proj-table th:last-child { border-radius: 0 12px 0 0; }
  .proj-table td { padding: 14px 20px; font-size: 14px; border-bottom: 1px solid var(--border); }
  .proj-table tr:last-child td { border-bottom: none; }
  .proj-table tr:nth-child(even) td { background: var(--gray-light); }
  .proj-table tr.highlight td { background: var(--teal-pale); font-weight: 700; color: var(--teal); }
  .proj-table td:first-child { font-weight: 600; color: var(--navy); }

  /* COMPETITION */
  .comp-table { width: 100%; border-collapse: collapse; }
  .comp-table th {
    font-size: 13px; font-weight: 600; padding: 14px 16px;
    background: var(--gray-light); color: var(--navy);
    text-align: left; border-bottom: 2px solid var(--border);
  }
  .comp-table th.us { background: var(--teal); color: white; }
  .comp-table td { padding: 14px 16px; font-size: 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
  .comp-table tr:last-child td { border-bottom: none; }
  .good { color: #059669; font-weight: 600; }
  .bad { color: #9CA3AF; }

  /* ROADMAP */
  .roadmap { display: flex; flex-direction: column; gap: 0; }
  .roadmap-item { display: flex; gap: 24px; position: relative; }
  .roadmap-item::before {
    content: ''; position: absolute;
    left: 19px; top: 48px; bottom: -24px;
    width: 2px; background: var(--border);
    z-index: 0;
  }
  .roadmap-item:last-child::before { display: none; }
  .roadmap-dot {
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--teal); display: flex; align-items: center; justify-content: center;
    color: white; font-weight: 700; font-size: 14px;
    flex-shrink: 0; z-index: 1; box-shadow: 0 0 0 6px var(--teal-pale);
    margin-top: 4px;
  }
  .roadmap-content {
    background: white; border: 1px solid var(--border);
    border-radius: 16px; padding: 24px; flex: 1;
    margin-bottom: 24px; transition: all 0.25s;
  }
  .roadmap-content:hover { border-color: var(--teal); box-shadow: var(--shadow); }
  .roadmap-phase { font-size: 12px; font-weight: 700; color: var(--teal); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
  .roadmap-time { font-size: 13px; color: var(--gray); margin-bottom: 8px; }
  .roadmap-title { font-size: 17px; font-weight: 600; color: var(--navy); margin-bottom: 6px; }
  .roadmap-desc { font-size: 14px; color: var(--gray); }
  .roadmap-milestone {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--teal-pale); color: var(--teal);
    font-size: 13px; font-weight: 700;
    padding: 4px 12px; border-radius: 100px; margin-top: 12px;
  }

  /* FUNDING */
  .funding-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
  .funding-card {
    background: white; border: 1px solid var(--border);
    border-radius: 16px; padding: 28px; text-align: center;
    transition: all 0.25s;
  }
  .funding-card:hover { border-color: var(--teal); box-shadow: var(--shadow); transform: translateY(-2px); }
  .funding-pct { font-family: 'DM Serif Display', serif; font-size: 48px; color: var(--teal); line-height: 1; }
  .funding-cat { font-size: 16px; font-weight: 700; color: var(--navy); margin: 8px 0 4px; }
  .funding-amt { font-size: 14px; color: var(--teal); font-weight: 600; margin-bottom: 10px; }
  .funding-desc { font-size: 13px; color: var(--gray); line-height: 1.6; }

  /* WHY INVEST */
  .invest-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
  .invest-card {
    background: white; border: 1px solid var(--border);
    border-radius: 16px; padding: 28px;
    transition: all 0.25s; display: flex; gap: 20px;
  }
  .invest-card:hover { border-color: var(--teal); box-shadow: var(--shadow); transform: translateY(-2px); }
  .invest-num {
    font-family: 'DM Serif Display', serif;
    font-size: 48px; color: var(--teal-pale);
    line-height: 1; flex-shrink: 0; width: 52px;
  }
  .invest-card h3 { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
  .invest-card p { font-size: 14px; color: var(--gray); line-height: 1.6; }

  /* CTA */
  .cta-section {
    background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);
    padding: 80px 24px; text-align: center;
  }
  .cta-inner { max-width: 700px; margin: 0 auto; }
  .cta-title { font-family: 'DM Serif Display', serif; font-size: clamp(32px, 5vw, 52px); color: white; line-height: 1.1; letter-spacing: -1px; margin-bottom: 20px; }
  .cta-title em { color: var(--teal-light); font-style: normal; }
  .cta-sub { font-size: 18px; color: rgba(255,255,255,0.65); margin-bottom: 36px; }
  .cta-disclaimer { font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 24px; }

  /* FOOTER */
  .footer {
    background: var(--navy); border-top: 1px solid rgba(255,255,255,0.08);
    padding: 32px 24px; text-align: center;
  }
  .footer p { font-size: 13px; color: rgba(255,255,255,0.35); }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* MOBILE */
  @media (max-width: 640px) {
    .nav-links { display: none; }
    .roi-box { flex-direction: column; padding: 28px 24px; }
    .comp-table { font-size: 12px; }
    .comp-table th, .comp-table td { padding: 10px 10px; }
  }
`;

const NavBar = ({ sections }) => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav className="nav">
      <div className="nav-logo">
        <span style={{ color: "var(--teal)" }}>Klinik</span><span>Link</span>
      </div>
      <div className="nav-links">
        {sections.map(s => (
          <button key={s.id} className="nav-link" onClick={() => scrollTo(s.id)}>{s.label}</button>
        ))}
      </div>
      <button className="nav-cta" onClick={() => scrollTo("funding")}>Lihat Pitch</button>
    </nav>
  );
};

export default function KlinikLinkSite() {
  const navSections = [
    { id: "masalah", label: "Masalah" },
    { id: "solusi", label: "Solusi" },
    { id: "pasar", label: "Pasar" },
    { id: "pricing", label: "Harga" },
    { id: "roadmap", label: "Roadmap" },
    { id: "funding", label: "Pendanaan" },
  ];

  return (
    <>
      <style>{style}</style>
      <NavBar sections={navSections} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Pre-Seed / Seed Round · 2024–2025
          </div>
          <h1 className="hero-title">
            Sistem Operasi WhatsApp<br />untuk <em>17.200 Klinik Pratama</em><br />Indonesia
          </h1>
          <p className="hero-sub">
            KlinikLink mengotomasi booking pasien, pengingat janji, dan follow-up — sepenuhnya melalui WhatsApp. Tanpa aplikasi. Tanpa pelatihan rumit. Go live dalam 24 jam.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById("solusi")?.scrollIntoView({ behavior: "smooth" })}>Lihat Solusi</button>
            <button className="btn-secondary" onClick={() => document.getElementById("funding")?.scrollIntoView({ behavior: "smooth" })}>Materi Investor</button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: "17.200+", label: "Total Klinik", desc: "TAM Nasional" },
            { num: "Rp 8,4 M", label: "Target ARR Tahun 2", desc: "700 Klinik" },
            { num: "82–85%", label: "Gross Margin", desc: "Sejak hari pertama" },
            { num: "< 2 Bln", label: "CAC Payback", desc: "Per klinik" },
            { num: "6,8×", label: "LTV:CAC", desc: "Tier Pro" },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MASALAH */}
      <section className="section" id="masalah">
        <div className="section-inner">
          <span className="section-tag">01 · Masalah</span>
          <h2 className="section-title">Sistem yang Rusak<br />pada Skala Masif</h2>
          <p className="section-sub">
            Lebih dari 80% Klinik Pratama Indonesia masih beroperasi dengan buku catatan kertas dan WhatsApp tanpa struktur — tertinggal satu dekade dari teknologi yang tersedia.
          </p>
          <div className="problem-grid">
            {[
              { pct: "80%+", title: "Klinik Tanpa Otomasi", desc: "Mengandalkan buku catatan kertas atau WhatsApp tanpa struktur — tanpa otomasi apapun." },
              { pct: "15–25%", title: "Tingkat No-Show", desc: "Setiap slot kosong adalah kerugian pendapatan langsung yang tidak dapat dipulihkan." },
              
