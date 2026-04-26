import { useState } from "react";

const style = 
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --teal:#0D7377;--teal-light:#14A085;--teal-pale:#E8F5F4;
    --navy:#0A2540;--navy-mid:#1A3A5C;--cream:#FAFAF8;
    --gray:#6B7280;--gray-light:#F3F4F6;--border:#E5E7EB;
    --shadow:0 4px 24px rgba(10,37,64,0.08);--shadow-lg:0 12px 48px rgba(10,37,64,0.12);
  }
  html{scroll-behavior:smooth;}
  body{font-family:'DM Sans',sans-serif;background:var(--cream);color:var(--navy);line-height:1.6;-webkit-font-smoothing:antialiased;}
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(250,250,248,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:64px;}
  .nav-logo{font-family:'DM Serif Display',serif;font-size:22px;color:var(--teal);letter-spacing:-0.5px;}
  .nav-links{display:flex;gap:4px;}
  .nav-link{background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;color:var(--gray);padding:8px 14px;border-radius:8px;transition:all 0.2s;}
  .nav-link:hover{color:var(--teal);background:var(--teal-pale);}
  .nav-cta{background:var(--teal);color:white;border:none;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;padding:10px 20px;border-radius:10px;cursor:pointer;transition:all 0.2s;}
  .nav-cta:hover{background:var(--teal-light);}
  .hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:100px 24px 60px;background:linear-gradient(135deg,#FFFFFF 0%,#E8F5F4 50%,#F0FDFA 100%);position:relative;overflow:hidden;}
  .hero-inner{max-width:900px;margin:0 auto;text-align:center;position:relative;z-index:1;}
  .hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--teal-pale);border:1px solid rgba(13,115,119,0.2);color:var(--teal);font-size:13px;font-weight:600;padding:6px 16px;border-radius:100px;margin-bottom:28px;}
  .hero-badge-dot{width:6px;height:6px;background:var(--teal);border-radius:50%;}
  .hero-title{font-family:'DM Serif Display',serif;font-size:clamp(36px,6vw,64px);line-height:1.08;letter-spacing:-2px;color:var(--navy);margin-bottom:24px;}
  .hero-title em{color:var(--teal);font-style:normal;}
  .hero-sub{font-size:18px;color:var(--gray);max-width:600px;margin:0 auto 40px;font-weight:400;}
  .hero-actions{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}
  .btn-primary{background:var(--teal);color:white;font-family:'DM Sans',sans-serif;font-size:16px;font-weight:600;padding:14px 32px;border-radius:12px;border:none;cursor:pointer;transition:all 0.25s;box-shadow:0 4px 16px rgba(13,115,119,0.3);}
  .btn-primary:hover{background:var(--teal-light);transform:translateY(-2px);}
  .btn-secondary{background:white;color:var(--navy);font-family:'DM Sans',sans-serif;font-size:16px;font-weight:600;padding:14px 32px;border-radius:12px;border:1.5px solid var(--border);cursor:pointer;transition:all 0.25s;}
  .btn-secondary:hover{border-color:var(--teal);color:var(--teal);}
  .stats-bar{background:var(--navy);padding:32px 24px;}
  .stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:24px;text-align:center;}
  .stat-num{font-family:'DM Serif Display',serif;font-size:30px;color:#14A085;line-height:1;margin-bottom:6px;}
  .stat-label{font-size:13px;color:rgba(255,255,255,0.6);}
  .stat-desc{font-size:12px;color:rgba(255,255,255,0.35);margin-top:2px;}
  .section{padding:80px 24px;}
  .section-alt{background:white;}
  .section-inner{max-width:1100px;margin:0 auto;}
  .section-tag{display:inline-block;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--teal);margin-bottom:12px;}
  .section-title{font-family:'DM Serif Display',serif;font-size:clamp(28px,4vw,44px);line-height:1.1;letter-spacing:-1px;color:var(--navy);margin-bottom:16px;}
  .section-sub{font-size:17px;color:var(--gray);max-width:620px;margin-bottom:48px;}
  .problem-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:40px;}
  .problem-card{background:white;border:1px solid var(--border);border-radius:16px;padding:28px;transition:all 0.25s;}
  .problem-card:hover{border-color:var(--teal);transform:translateY(-3px);box-shadow:var(--shadow);}
  .problem-pct{font-family:'DM Serif Display',serif;font-size:40px;color:var(--teal);line-height:1;margin-bottom:8px;}
  .problem-card h3{font-size:16px;font-weight:600;color:var(--navy);margin-bottom:8px;}
  .problem-card p{font-size:14px;color:var(--gray);line-height:1.6;}
  .roi-box{background:linear-gradient(135deg,var(--navy) 0%,var(--navy-mid) 100%);border-radius:20px;padding:36px 40px;margin-top:40px;display:flex;gap:32px;align-items:flex-start;flex-wrap:wrap;}
  .roi-box h3{font-family:'DM Serif Display',serif;font-size:22px;color:white;margin-bottom:12px;}
  .roi-box p{font-size:15px;color:rgba(255,255,255,0.75);line-height:1.7;}
  .roi-highlight{color:#14A085;font-weight:700;}
  .features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;}
  .feature-card{background:var(--cream);border:1px solid var(--border);border-radius:16px;padding:28px;transition:all 0.25s;}
  .feature-card:hover{background:white;box-shadow:var(--shadow);transform:translateY(-3px);}
  .feature-icon{width:48px;height:48px;background:var(--teal-pale);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px;}
  .feature-card h3{font-size:16px;font-weight:600;color:var(--navy);margin-bottom:8px;}
  .feature-card p{font-size:14px;color:var(--gray);line-height:1.6;}
  .pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;align-items:start;}
  .pricing-card{background:white;border:1.5px solid var(--border);border-radius:20px;padding:32px;position:relative;transition:all 0.25s;}
  .pricing-card:hover{border-color:var(--teal);box-shadow:var(--shadow-lg);}
  .pricing-card.featured{border-color:var(--teal);background:linear-gradient(160deg,var(--teal-pale) 0%,white 60%);box-shadow:var(--shadow-lg);}
  .pricing-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--teal);color:white;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:4px 16px;border-radius:100px;}
  .pricing-tier{font-size:13px;font-weight:700;color:var(--teal);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;}
  .pricing-price{font-family:'DM Serif Display',serif;font-size:34px;color:var(--navy);line-height:1;}
  .pricing-period{font-size:14px;color:var(--gray);font-weight:400;}
  .pricing-divider{height:1px;background:var(--border);margin:24px 0;}
  .pricing-features{list-style:none;display:flex;flex-direction:column;gap:12px;}
  .pricing-feature{display:flex;align-items:flex-start;gap:10px;font-size:14px;}
  .check{color:var(--teal);font-size:16px;flex-shrink:0;}
  .cross{color:#D1D5DB;font-size:16px;flex-shrink:0;}
  .econ-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;}
  .econ-card{background:white;border:1px solid var(--border);border-radius:16px;padding:28px;text-align:center;transition:all 0.25s;}
  .econ-card:hover{border-color:var(--teal);box-shadow:var(--shadow);}
  .econ-num{font-family:'DM Serif Display',serif;font-size:34px;color:var(--teal);line-height:1;margin-bottom:6px;}
  .econ-label{font-size:14px;font-weight:600;color:var(--navy);margin-bottom:4px;}
  .econ-note{font-size:13px;color:var(--gray);}
  .proj-table{width:100%;border-collapse:collapse;margin-top:32px;}
  .proj-table th{background:var(--navy);color:white;font-size:13px;font-weight:600;padding:14px 20px;text-align:left;}
  .proj-table td{padding:14px 20px;font-size:14px;border-bottom:1px solid var(--border);}
  .proj-table tr:last-child td{border-bottom:none;}
  .proj-table tr:nth-child(even) td{background:var(--gray-light);}
  .proj-table tr.highlight td{background:var(--teal-pale);font-weight:700;color:var(--teal);}
  .comp-table{width:100%;border-collapse:collapse;}
  .comp-table th{font-size:13px;font-weight:600;padding:14px 12px;background:var(--gray-light);color:var(--navy);text-align:left;border-bottom:2px solid var(--border);}
  .comp-table th.us{background:var(--teal);color:white;}
  .comp-table td{padding:12px;font-size:13px;border-bottom:1px solid var(--border);}
  .comp-table tr:last-child td{border-bottom:none;}
  .good{color:#059669;font-weight:600;}
  .bad{color:#9CA3AF;}
  .roadmap{display:flex;flex-direction:column;}
  .roadmap-item{display:flex;gap:24px;position:relative;}
  .roadmap-item::before{content:'';position:absolute;left:19px;top:48px;bottom:-24px;width:2px;background:var(--border);}
  .roadmap-item:last-child::before{display:none;}
  .roadmap-dot{width:40px;height:40px;border-radius:50%;background:var(--teal);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:14px;flex-shrink:0;z-index:1;box-shadow:0 0 0 6px var(--teal-pale);margin-top:4px;}
  .roadmap-content{background:white;border:1px solid var(--border);border-radius:16px;padding:24px;flex:1;margin-bottom:24px;transition:all 0.25s;}
  .roadmap-content:hover{border-color:var(--teal);box-shadow:var(--shadow);}
  .roadmap-phase{font-size:12px;font-weight:700;color:var(--teal);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;}
  .roadmap-time{font-size:13px;color:var(--gray);margin-bottom:8px;}
  .roadmap-title{font-size:17px;font-weight:600;color:var(--navy);margin-bottom:6px;}
  .roadmap-desc{font-size:14px;color:var(--gray);}
  .roadmap-milestone{display:inline-flex;align-items:center;gap:6px;background:var(--teal-pale);color:var(--teal);font-size:13px;font-weight:700;padding:4px 12px;border-radius:100px;margin-top:12px;}
  .funding-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;}
  .funding-card{background:white;border:1px solid var(--border);border-radius:16px;padding:28px;text-align:center;transition:all 0.25s;}
  .funding-card:hover{border-color:var(--teal);box-shadow:var(--shadow);transform:translateY(-2px);}
  .funding-pct{font-family:'DM Serif Display',serif;font-size:48px;color:var(--teal);line-height:1;}
  .funding-cat{font-size:16px;font-weight:700;color:var(--navy);margin:8px 0 4px;}
  .funding-amt{font-size:14px;color:var(--teal);font-weight:600;margin-bottom:10px;}
  .funding-desc{font-size:13px;color:var(--gray);line-height:1.6;}
  .invest-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;}
  .invest-card{background:white;border:1px solid var(--border);border-radius:16px;padding:28px;transition:all 0.25s;display:flex;gap:20px;}
  .invest-card:hover{border-color:var(--teal);box-shadow:var(--shadow);transform:translateY(-2px);}
  .invest-num{font-family:'DM Serif Display',serif;font-size:48px;color:var(--teal-pale);line-height:1;flex-shrink:0;width:52px;}
  .invest-card h3{font-size:16px;font-weight:700;color:var(--navy);margin-bottom:8px;}
  .invest-card p{font-size:14px;color:var(--gray);line-height:1.6;}
  .cta-section{background:linear-gradient(135deg,var(--navy) 0%,var(--navy-mid) 100%);padding:80px 24px;text-align:center;}
  .cta-inner{max-width:700px;margin:0 auto;}
  .cta-title{font-family:'DM Serif Display',serif;font-size:clamp(32px,5vw,52px);color:white;line-height:1.1;letter-spacing:-1px;margin-bottom:20px;}
  .cta-title em{color:#14A085;font-style:normal;}
  .cta-sub{font-size:18px;color:rgba(255,255,255,0.65);margin-bottom:36px;}
  .cta-disclaimer{font-size:12px;color:rgba(255,255,255,0.3);margin-top:24px;}
  .footer{background:var(--navy);border-top:1px solid rgba(255,255,255,0.08);padding:28px 24px;text-align:center;}
  .footer p{font-size:13px;color:rgba(255,255,255,0.3);}
  @media(max-width:640px){.nav-links{display:none;}.roi-box{flex-direction:column;padding:24px;}.comp-table{font-size:11px;}.comp-table th,.comp-table td{padding:8px 8px;}}
`;

export default function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{style}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">KlinikLink</div>
        <div className="nav-links">
          {[["masalah","Masalah"],["solusi","Solusi"],["pasar","Pasar"],["pricing","Harga"],["roadmap","Roadmap"],["funding","Pendanaan"]].map(([id,label])=>(
            <button key={id} className="nav-link" onClick={()=>scrollTo(id)}>{label}</button>
          ))}
        </div>
        <button className="nav-cta" onClick={()=>scrollTo("funding")}>Lihat Pitch</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge"><span className="hero-badge-dot"/>Pre-Seed / Seed Round · 2024–2025</div>
          <h1 className="hero-title">Sistem Operasi WhatsApp<br/>untuk <em>17.200 Klinik Pratama</em><br/>Indonesia</h1>
          <p className="hero-sub">KlinikLink mengotomasi booking pasien, pengingat janji, dan follow-up — sepenuhnya melalui WhatsApp. Tanpa aplikasi. Tanpa pelatihan rumit. Go live dalam 24 jam.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={()=>scrollTo("solusi")}>Lihat Solusi</button>
            <button className="btn-secondary" onClick={()=>scrollTo("funding")}>Materi Investor</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[["17.200+","Total Klinik","TAM Nasional"],["Rp 8,4 M","Target ARR Tahun 2","700 Klinik"],["82–85%","Gross Margin","Sejak hari pertama"],["< 2 Bln","CAC Payback","Per klinik"],["6,8×","LTV:CAC","Tier Pro"]].map(([num,label,desc],i)=>(
            <div key={i} style={{padding:"8px",textAlign:"center"}}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
              <div className="stat-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MASALAH */}
      <section className="section" id="masalah">
        <div className="section-inner">
          <span className="section-tag">01 · Masalah</span>
          <h2 className="section-title">Sistem yang Rusak<br/>pada Skala Masif</h2>
          <p className="section-sub">Lebih dari 80% Klinik Pratama Indonesia masih beroperasi dengan buku catatan kertas dan WhatsApp tanpa struktur.</p>
          <div className="problem-grid">
            {[
              ["80%+","Klinik Tanpa Otomasi","Mengandalkan buku catatan kertas atau WhatsApp tanpa struktur — tanpa otomasi apapun."],
              ["15–25%","Tingkat No-Show","Setiap slot kosong adalah kerugian pendapatan langsung yang tidak dapat dipulihkan."],
              ["0","Analitik Pasien","Pemilik klinik tidak memiliki visibilitas ke tingkat retensi, jam sibuk, atau pola kunjungan ulang."],
              ["90%+","Tidak Ada Follow-up","Klinik tidak memiliki mekanisme untuk menghubungi pasien setelah kunjungan."],
              ["4 Slot","Hilang Setiap Hari","Klinik 20 pasien/hari dengan no-show 20% = Rp 7,8 Juta kerugian per bulan."],
              ["2–4 Mg","Implementasi EMR Lama","Pesaing EMR butuh berminggu-minggu setup. KlinikLink: go live dalam 24 jam."],
            ].map(([pct,title,desc],i)=>(
              <div key={i} className="problem-card">
                <div className="problem-pct">{pct}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="roi-box">
            <div style={{fontSize:48}}>💡</div>
            <div>
              <h3>Kasus ROI yang Menutup Dirinya Sendiri</h3>
              <p>Klinik 20 pasien/hari × no-show 20% × <span className="roi-highlight">Rp 75.000 × 26 hari = Rp 7.800.000 kerugian/bulan.</span> Tier Pro KlinikLink hanya <span className="roi-highlight">Rp 1.000.000/bulan</span>. Pengurangan no-show 50% = <span className="roi-highlight">Rp 3,9 Juta kembali — 3,9× biaya langganan.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUSI */}
      <section className="section section-alt" id="solusi">
        <div className="section-inner">
          <span className="section-tag">02 · Solusi</span>
          <h2 className="section-title">Otomasi Penuh<br/>via WhatsApp</h2>
          <p className="section-sub">KlinikLink mengotomasi siklus komunikasi pasien sepenuhnya melalui WhatsApp. Tidak diperlukan aplikasi baru. Tidak diperlukan IT.</p>
          <div className="features-grid">
            {[
              ["🤖","Bot Booking Otomatis","Pasien mengirim pesan ke nomor resmi klinik. Bot memandu booking dalam kurang dari 90 detik. Nol keterlibatan resepsionis."],
              ["🔔","Pengurangan No-Show","Pengingat otomatis 2 jam sebelum janji. Mengurangi no-show 30–40%."],
              ["💬","Follow-up Pasca Kunjungan","3 hari setelah kunjungan, sistem mengirim check-in otomatis. Mendorong booking kembali."],
              ["📢","Kampanye Broadcast","Kirim broadcast bertarget ke database pasien: dokter baru, vaksinasi, paket pemeriksaan."],
              ["📊","Dashboard Admin","Tampilkan volume booking, no-show per hari, frekuensi kunjungan ulang, dan tingkat pembukaan kampanye."],
              ["⚡","Go-Live dalam 24 Jam","Aktif dalam 24 jam tanpa training kompleks atau tenaga IT."],
            ].map(([icon,title,desc],i)=>(
              <div key={i} className="feature-card">
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASAR */}
      <section className="section" id="pasar">
        <div className="section-inner">
          <span className="section-tag">03 · Pasar & Kompetisi</span>
          <h2 className="section-title">Kategori Baru,<br/>Pasar yang Belum Tersentuh</h2>
          <p className="section-sub">KlinikLink tidak bersaing di ruang EMR yang padat. Kami menciptakan kategori baru: Platform Keterlibatan Pasien Otomatis untuk Mikro-Klinik.</p>
          <div style={{overflowX:"auto"}}>
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Fitur</th>
                  <th className="us">KlinikLink ✓</th>
                  <th>Assist.id / EMR</th>
                  <th>Halodoc</th>
                  <th>Mekari Qontak</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Unduhan Pasien","Tidak Ada — WhatsApp","Tidak Ada","Tinggi (install app)","Tidak Ada"],
                  ["Kurva Belajar","Nol (otomatis)","Tinggi — berbulan-bulan","Sedang","Tinggi"],
                  ["Waktu Go-Live","< 24 Jam","2–4 Minggu","1–2 Minggu","1–2 Minggu"],
                  ["Biaya ke Klinik","Rp 500K–1 Juta/bln","Rp 2–5 Juta+/bln","Potongan pendapatan","Rp 1 Juta+/bln"],
                  ["Roadmap SATUSEHAT","Ya (Fase 2)","Sebagian","Tidak","Tidak"],
                ].map(([feat,us,...rest],i)=>(
                  <tr key={i}>
                    <td style={{fontWeight:600}}>{feat}</td>
                    <td className="good">{us}</td>
                    {rest.map((r,j)=><td key={j} className="bad">{r}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section section-alt" id="pricing">
        <div className="section-inner">
          <span className="section-tag">04 · Harga & Ekonomi Unit</span>
          <h2 className="section-title">Model Langganan<br/>Gross Margin 82–85%</h2>
          <p className="section-sub">Dirancang untuk mendapatkan klinik di Basic, dan mengembangkan mereka ke Pro dalam 30–60 hari pertama.</p>
          <div className="pricing-grid">
            {[
              {tier:"Basic",price:"Rp 500.000",features:[[true,"Bot Booking (500/bln)"],[true,"Pengingat Otomatis"],[false,"Follow-up Pasca Kunjungan"],[false,"Kampanye Broadcast"],[false,"Analitik No-Show"]]},
              {tier:"Pro",price:"Rp 1.000.000",featured:true,features:[[true,"Bot Booking Tak Terbatas"],[true,"Pengingat Otomatis"],[true,"Follow-up Pasca Kunjungan"],[true,"Kampanye Broadcast"],[true,"Analitik No-Show"]]},
              {tier:"Enterprise",price:"Rp 1.500.000",features:[[true,"Bot Booking Tak Terbatas"],[true,"Pengingat Otomatis"],[true,"Follow-up Pasca Kunjungan"],[true,"Kampanye Broadcast"],[true,"Analitik No-Show"],[true,"Manajemen Multi-Cabang"]]},
            ].map((plan,i)=>(
              <div key={i} className={`pricing-card${plan.featured?" featured":""}`}>
                {plan.featured&&<div className="pricing-badge">★ Paling Populer</div>}
                <div className="pricing-tier">{plan.tier}</div>
                <div className="pricing-price">{plan.price} <span className="pricing-period">/bulan</span></div>
                <div className="pricing-divider"/>
                <ul className="pricing-features">
                  {plan.features.map(([ok,label],j)=>(
                    <li key={j} className="pricing-feature">
                      <span className={ok?"check":"cross"}>{ok?"✓":"—"}</span>
                      <span style={{color:ok?"var(--navy)":"#9CA3AF"}}>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:24,color:"var(--navy)",margin:"48px 0 24px"}}>Ekonomi Unit — Tier Pro</h3>
          <div className="econ-grid">
            {[["Rp 1 Juta","Pendapatan/Klinik/Bln","Tier Pro"],["82–85%","Gross Margin","COGS ~Rp 180K/klinik"],["< 2 Bln","CAC Payback","CAC ~Rp 1,5 Juta"],["6,8×","LTV:CAC Ratio","Retensi tahunan 85%"],["85%","Annual Retention","LTV ~Rp 10,2 Juta"]].map(([num,label,note],i)=>(
              <div key={i} className="econ-card">
                <div className="econ-num">{num}</div>
                <div className="econ-label">{label}</div>
                <div className="econ-note">{note}</div>
              </div>
            ))}
          </div>

          <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:24,color:"var(--navy)",margin:"48px 0 8px"}}>Proyeksi Pendapatan</h3>
          <p style={{fontSize:14,color:"var(--gray)",marginBottom:16}}>Skenario konservatif · rata-rata blended Rp 1 Juta/klinik/bulan</p>
          <div style={{overflowX:"auto"}}>
            <table className="proj-table">
              <thead><tr><th>Fase</th><th>Klinik</th><th>MRR</th><th>ARR</th></tr></thead>
              <tbody>
                {[["Bulan 3","20","Rp 20.000.000","Rp 240.000.000"],["Bulan 6","50","Rp 50.000.000","Rp 600.000.000"],["Bulan 9","125","Rp 125.000.000","Rp 1,5 Miliar"],["Bulan 12","250","Rp 200.000.000+","Rp 2,4 Miliar"]].map(([f,k,m,a],i)=>(
                  <tr key={i}><td>{f}</td><td>{k}</td><td>{m}</td><td>{a}</td></tr>
                ))}
                <tr className="highlight"><td>Tahun 2</td><td>700</td><td>Rp 700.000.000</td><td>Rp 8,4 Miliar</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section" id="roadmap">
        <div className="section-inner">
          <span className="section-tag">05 · Roadmap</span>
          <h2 className="section-title">Kedalaman Sebelum Luas</h2>
          <p className="section-sub">Satu geografi penuh sebelum ekspansi — memaksimalkan efek jaringan lokal dan membangun playbook yang dapat direplikasi.</p>
          <div className="roadmap">
            {[
              ["Fase 1","Bulan 1–3","Validasi MVP di Medan","10–20 klinik pertama secara langsung. Iterasi produk berdasarkan umpan balik nyata.","20 Klinik Berbayar"],
              ["Fase 2","Bulan 4–6","Penjualan Berbayar + Agen Pertama","Rekrut 2 agen medrep pertama. Ekspansi di Sumatera Utara. Mulai bangun dashboard web.","50 Klinik Aktif"],
              ["Fase 3","Bulan 7–9","Ekspansi Jawa","Jakarta, Bandung, Surabaya. Jaringan agen 5 orang. Migrasi backend ke PostgreSQL.","125 Klinik | Rp 100 Juta MRR"],
              ["Fase 4","Bulan 10–12","Konsolidasi Nasional","Sumatera Barat, Riau, Jawa Timur. R&D API SATUSEHAT dimulai. Persiapan Series A.","250 Klinik | Rp 200 Juta+ MRR"],
              ["Fase 5","Tahun 2","Series A + SATUSEHAT Live","Kota Tier 2 & 3. Luncurkan backend EMR ringan. Klinik pertama patuh SATUSEHAT go live.","700+ Klinik | Rp 8,4 M ARR"],
            ].map(([phase,time,title,desc,milestone],i)=>(
              <div key={i} className="roadmap-item">
                <div className="roadmap-dot">{i+1}</div>
                <div className="roadmap-content">
                  <div className="roadmap-phase">{phase}</div>
                  <div className="roadmap-time">{time}</div>
                  <div className="roadmap-title">{title}</div>
                  <div className="roadmap-desc">{desc}</div>
                  <div className="roadmap-milestone">🎯 {milestone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNDING */}
      <section className="section section-alt" id="funding">
        <div className="section-inner">
          <span className="section-tag">06 · Pendanaan</span>
          <h2 className="section-title">Seed Round<br/>Rp 750 Juta – Rp 1,5 Miliar</h2>
          <p className="section-sub">Modal untuk 12 bulan eksekusi agresif — dari MVP tervalidasi ke bisnis 250 klinik yang siap Series A.</p>
          <div className="funding-grid">
            {[
              ["40%","Produk & Engineering","Rp 300–600 Juta","Migrasi Supabase/PostgreSQL, dashboard React.js, backend Node.js, R&D API SATUSEHAT, engineer full-time pertama."],
              ["40%","Penjualan & Pemasaran","Rp 300–600 Juta","Bonus agen penjualan, sponsorship PKFI/IDI, kit onboarding, materi pemasaran lokal."],
              ["20%","Legal & Operasional","Rp 150–300 Juta","Pendirian PT, registrasi PSE Kemenkes, kepatuhan UU PDP, setup kantor, overhead 12 bulan."],
            ].map(([pct,cat,amt,desc],i)=>(
              <div key={i} className="funding-card">
                <div className="funding-pct">{pct}</div>
                <div className="funding-cat">{cat}</div>
                <div className="funding-amt">{amt}</div>
                <div className="funding-desc">{desc}</div>
              </div>
            ))}
          </div>
          <div className="roi-box" style={{marginTop:40}}>
            <div style={{fontSize:48}}>📈</div>
            <div>
              <h3>Skenario Return Investor</h3>
              <p>
                <span className="roi-highlight">Series A (Bulan 12):</span> 250 klinik, Rp 200 Juta+ MRR — target penilaian Rp 20–30 Miliar (8–12× ARR).<br/>
                <span className="roi-highlight">Tahun 2:</span> 700 klinik, Rp 700 Juta MRR — target penilaian Rp 50–84 Miliar.<br/>
                <span className="roi-highlight">Exit Strategis:</span> 1.000+ klinik, target akuisisi Halodoc / Telkomsel / grup rumah sakit. Potensi <span className="roi-highlight">12–50× return</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">07 · Mengapa KlinikLink</span>
          <h2 className="section-title">7 Alasan Kuat<br/>untuk Berinvestasi</h2>
          <div className="invest-grid">
            {[
              ["01","Pasar Nyata & Masif","17.200 klinik formal. 80%+ beroperasi dengan buku catatan kertas. Tidak ada platform dominan. Pasar ini ada hari ini dalam kesakitan yang terdokumentasi."],
              ["02","Ekonomi Unit Luar Biasa","Gross margin 82–85% sejak hari pertama. Payback CAC < 2 bulan. LTV:CAC 6,8×. Metrik yang jarang ditemukan di tahap seed."],
              ["03","Arsitektur Efisien Modal","MVP berjalan pada COGS Rp 180.000/klinik tanpa tim engineering full-time. Modal investor masuk ke pertumbuhan, bukan infrastruktur."],
              ["04","Biaya Peralihan Struktural","Nomor WhatsApp klinik tertanam di Google Maps, papan tanda, dan kontak pasien. Biaya peralihan bersifat operasional, bukan hanya finansial."],
              ["05","Angin Regulasi SATUSEHAT","Mandat Kemenkes menciptakan urgensi nyata. KlinikLink adalah satu-satunya platform siap menjembatani booking front-end ke kepatuhan SATUSEHAT."],
              ["06","Tim dengan Keunggulan Tidak Adil","8+ tahun dalam operasional layanan Indonesia. Berbasis di Medan dengan akses jaringan langsung ke klinik pengadopsi awal."],
              ["07","Jendela Terbuka Sekarang","Tidak ada pesaing yang menempati posisi ini di pasar mikro-klinik Indonesia. Keunggulan first-mover nyata dan tahan lama."],
            ].map(([n,title,desc],i)=>(
              <div key={i} className="invest-card">
                <div className="invest-num">{n}</div>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Bergabunglah Membangun<br/><em>Infrastruktur Kesehatan</em><br/>Indonesia</h2>
          <p className="cta-sub">Hubungi tim KlinikLink untuk mendiskusikan peluang investasi seed round ini.</p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <button className="btn-primary" style={{background:"#14A085"}}>Hubungi Kami</button>
            <button className="btn-secondary" style={{background:"transparent",color:"white",borderColor:"rgba(255,255,255,0.3)"}}>Unduh Pitch Deck</button>
          </div>
          <p className="cta-disclaimer">Dokumen ini bersifat rahasia dan ditujukan semata-mata untuk penerima yang dituju. Semua angka keuangan adalah estimasi.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 KlinikLink · Materi Investor Rahasia · Medan, Sumatera Utara, Indonesia</p>
      </footer>
    </>
  );
}
