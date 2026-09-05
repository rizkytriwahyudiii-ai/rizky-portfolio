'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft, Mail, GraduationCap, Zap, Cpu, Gauge,
  Wrench, Activity, ClipboardCheck, ArrowRight
} from 'lucide-react';
import { useReveal, useTypingEffect } from '../lib/useReveal';

const roles = [
  'Electrical Maintenance Technician',
  'PLC & Automation Specialist',
  'Industrial Troubleshooter',
];

const stats = [
  { label: 'Tahun Pengalaman', value: '5+' },
  { label: 'Perusahaan Manufaktur', value: '3' },
  { label: 'Latar Pendidikan', value: 'SMK + S1' },
];

const experience = [
  {
    role: 'Electrical Maintenance Technician',
    company: 'PT Vinilon Jaya Sakti',
    period: '2020 — Sekarang',
    location: 'Mojokerto',
    desc: 'Menangani perawatan dan perbaikan mesin extrusion untuk produksi pipa HDPE/UPVC — meliputi heater band, thermocouple, speed regulator, dan motor screw. Melakukan kalibrasi panel instrumen, setting parameter inverter, troubleshooting kelistrikan, dan pencatatan laporan downtime.',
    icon: <Zap size={16} />,
  },
  {
    role: 'Teknisi Electrical',
    company: 'PT Kepuh Kencana Arum',
    period: '2018 — 2020',
    location: 'Mojokerto',
    desc: 'Menangani perawatan sistem otomasi lini produksi skala besar. Membuat konfigurasi logic pada PLC Mitsubishi, memetakan tampilan kontrol HMI Weintek, dan melakukan optimasi sistem hidrolik.',
    icon: <Cpu size={16} />,
  },
  {
    role: 'Internship — Electrical',
    company: 'PT Sido Jodoh',
    period: '6 bulan',
    location: 'Mojokerto',
    desc: 'Magang di bagian electrical, mempelajari dasar-dasar maintenance kelistrikan industri dan praktik kerja di lapangan.',
    icon: <Wrench size={16} />,
  },
];

const skillGroups = [
  {
    icon: <Cpu size={20} />,
    title: 'PLC & Kontrol',
    items: ['PLC Mitsubishi (Basic Ladder Logic)', 'PLC Omron', 'PLC Siemens', 'Smart Relay Schneider', 'HMI Weintek'],
  },
  {
    icon: <Gauge size={20} />,
    title: 'Inverter & Kalibrasi',
    items: ['Inverter ABB', 'Inverter INVT', 'Inverter Delta', 'Inverter Schneider', 'Kalibrasi sensor PT100 & Thermocouple', 'Sensor Proximity & Laser Marking'],
  },
  {
    icon: <Zap size={20} />,
    title: 'Kelistrikan & Panel',
    items: ['Troubleshooting kelistrikan 3 phase', 'Wiring panel kontrol', 'Sistem pneumatic', 'Maintenance hoist crane'],
  },
  {
    icon: <Activity size={20} />,
    title: 'Praktik Kerja',
    items: ['Predictive & preventive maintenance', 'Fault diagnostic & downtime tracking', 'Laporan perawatan mesin'],
  },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}

export default function ElectricalPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const typed = useTypingEffect(roles);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '3ab2072b-5f3e-4268-b3f5-9cfa8644a607');
    formData.append('subject', 'Pesan baru dari halaman Electrical portfolio');

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) {
        alert('Pesan berhasil dikirim. Terima kasih.');
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Gagal mengirim pesan. Coba lagi atau kirim email langsung.');
      }
    } catch {
      alert('Terjadi kesalahan jaringan. Coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans antialiased selection:bg-amber-500 selection:text-black relative overflow-hidden">
      {/* Industrial grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15] pointer-events-none" />
      <div className="fixed top-[-10%] left-[10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="fixed bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs text-slate-500 hover:text-amber-400 transition-colors group">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Kembali
          </Link>
          <a href="#kontak" className="px-4 py-2 rounded-lg bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all">
            Hubungi Saya
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-6 pt-20 pb-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-amber-500/30 shrink-0 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
            <Image src="/profile.png" alt="Rizky Tri Wahyudi" fill sizes="112px" className="object-cover" />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-[10px] font-mono uppercase tracking-widest text-amber-400 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Tersedia untuk peluang kerja
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Rizky Tri Wahyudi</h1>
            <p className="text-amber-400 text-base font-semibold h-6" suppressHydrationWarning translate="no">
              {typed}
              <span className="animate-pulse">_</span>
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
              5+ tahun pengalaman menangani perawatan kelistrikan dan otomasi di lingkungan manufaktur —
              extrusion line, PLC, inverter, dan panel kontrol 3 phase. Lulusan SMK Teknik Instalasi
              Tenaga Listrik, dilengkapi latar belakang S1 Teknik Informatika.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><Mail size={13} /> rizkytriwahyudiii@gmail.com</span>
              <span>Mojokerto → Sedati, Sidoarjo</span>
            </div>
          </div>
        </div>

        {/* STATS */}
        <Reveal delay={100}>
          <div className="grid grid-cols-3 gap-4 mt-14 pt-10 border-t border-slate-900">
            {stats.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-black text-white">{s.value}</p>
                <p className="text-[11px] text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-16 border-t border-slate-900 relative">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <ClipboardCheck size={20} className="text-amber-400" />
              <h2 className="text-xl font-bold text-white">Pengalaman Kerja</h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group relative pl-8 pb-8 border-l border-slate-800 last:border-transparent">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-950 border-2 border-amber-500 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.6)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  </div>
                  <div className="ml-4 p-5 rounded-2xl border border-slate-900 bg-slate-950/40 group-hover:border-amber-500/30 group-hover:bg-slate-950/70 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono mb-2">
                      <span className="text-amber-400">{exp.icon}</span>
                      {exp.period} · {exp.location}
                    </div>
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <p className="text-amber-400 text-xs font-semibold mb-2">{exp.company}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-16 border-t border-slate-900 bg-slate-950/30 relative">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-xl font-bold text-white mb-10">Keahlian Teknis</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full p-6 rounded-2xl border border-slate-800 bg-slate-950/50 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-4 text-amber-400">
                    <div className="p-2 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                      {group.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white">{group.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-xs text-slate-500 flex items-start gap-2">
                        <span className="text-amber-500/60 mt-1">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 py-16 border-t border-slate-900 relative">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-xl font-bold text-white mb-10">Pendidikan</h2>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={0}>
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-900 hover:border-amber-500/30 transition-colors">
                <GraduationCap size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-white">S1 Teknik Informatika</h3>
                  <p className="text-xs text-slate-500">Universitas Islam Mojopahit (UNIM) · 2019 — 2023</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-900 hover:border-amber-500/30 transition-colors">
                <GraduationCap size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-white">SMK — Teknik Instalasi Tenaga Listrik (TITL)</h3>
                  <p className="text-xs text-slate-500">SMK Negeri 1 Jatirejo</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontak" className="px-6 py-20 border-t border-slate-900 bg-slate-950/30 relative">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-2">Hubungi Saya</h2>
            <p className="text-sm text-slate-500 mb-8">Terbuka untuk peluang kerja di bidang electrical maintenance & otomasi industri.</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required name="name" type="text" placeholder="Nama" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all" />
                <input required name="email" type="email" placeholder="Email" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all" />
              </div>
              <textarea required name="message" rows={4} placeholder="Pesan Anda" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none" />
              <button type="submit" disabled={isSubmitting} className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 text-black text-sm font-bold hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                {!isSubmitting && <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </form>
          </div>
        </Reveal>
      </section>

      <footer className="px-6 py-8 border-t border-slate-900 text-center relative">
        <p className="text-[11px] text-slate-700">© 2026 Rizky Tri Wahyudi</p>
      </footer>
    </div>
  );
}
