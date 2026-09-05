'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft, Mail, Phone, GraduationCap, Zap, Cpu, Gauge,
  Wrench, Activity, ClipboardCheck
} from 'lucide-react';

const experience = [
  {
    role: 'Electrical Maintenance Technician',
    company: 'PT Vinilon Jaya Sakti',
    period: '2020 — Sekarang',
    location: 'Mojokerto',
    desc: 'Menangani perawatan dan perbaikan mesin extrusion untuk produksi pipa HDPE/UPVC — meliputi heater band, thermocouple, speed regulator, dan motor screw. Melakukan kalibrasi panel instrumen, setting parameter inverter, troubleshooting kelistrikan, dan pencatatan laporan downtime.',
  },
  {
    role: 'Teknisi Electrical',
    company: 'PT Kepuh Kencana Arum',
    period: '2018 — 2020',
    location: 'Mojokerto',
    desc: 'Menangani perawatan sistem otomasi lini produksi skala besar. Membuat konfigurasi logic pada PLC Mitsubishi, memetakan tampilan kontrol HMI Weintek, dan melakukan optimasi sistem hidrolik.',
  },
  {
    role: 'Internship — Electrical',
    company: 'PT Sido Jodoh',
    period: '6 bulan',
    location: 'Mojokerto',
    desc: 'Magang di bagian electrical, mempelajari dasar-dasar maintenance kelistrikan industri dan praktik kerja di lapangan.',
  },
];

const skillGroups = [
  {
    icon: <Cpu size={18} />,
    title: 'PLC & Kontrol',
    items: ['PLC Mitsubishi (Basic Ladder Logic)', 'PLC Omron', 'PLC Siemens', 'Smart Relay Schneider', 'HMI Weintek'],
  },
  {
    icon: <Gauge size={18} />,
    title: 'Inverter & Kalibrasi',
    items: ['Inverter ABB', 'Inverter INVT', 'Inverter Delta', 'Inverter Schneider', 'Kalibrasi sensor PT100 & Thermocouple', 'Sensor Proximity & Laser Marking'],
  },
  {
    icon: <Zap size={18} />,
    title: 'Kelistrikan & Panel',
    items: ['Troubleshooting kelistrikan 3 phase', 'Wiring panel kontrol', 'Sistem pneumatic', 'Maintenance hoist crane'],
  },
  {
    icon: <Activity size={18} />,
    title: 'Praktik Kerja',
    items: ['Predictive & preventive maintenance', 'Fault diagnostic & downtime tracking', 'Laporan perawatan mesin'],
  },
];

export default function ElectricalPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans antialiased selection:bg-amber-500 selection:text-black">
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
            <ArrowLeft size={14} />
            Kembali
          </Link>
          <a href="#kontak" className="px-4 py-2 rounded-lg bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 transition-colors">
            Hubungi Saya
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-16 pb-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-slate-800 shrink-0">
            <Image src="/profile.png" alt="Rizky Tri Wahyudi" fill sizes="96px" className="object-cover" />
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Rizky Tri Wahyudi</h1>
            <p className="text-amber-400 text-sm font-semibold">Electrical Maintenance Technician</p>
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
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-16 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-10">Pengalaman Kerja</h2>
          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8">
                <div className="text-xs text-slate-500 font-medium">{exp.period}<br />{exp.location}</div>
                <div className="space-y-1.5 pb-8 border-b border-slate-900 last:border-0">
                  <h3 className="text-base font-bold text-white">{exp.role}</h3>
                  <p className="text-amber-400 text-xs font-semibold">{exp.company}</p>
                  <p className="text-slate-500 text-sm leading-relaxed pt-1">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-16 border-t border-slate-900 bg-slate-950/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-10">Keahlian Teknis</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/50">
                <div className="flex items-center gap-2.5 mb-4 text-amber-400">
                  {group.icon}
                  <h3 className="text-sm font-bold text-white">{group.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-xs text-slate-500 flex items-start gap-2">
                      <span className="text-slate-700 mt-1">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 py-16 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-10">Pendidikan</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <GraduationCap size={18} className="text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-white">S1 Teknik Informatika</h3>
                <p className="text-xs text-slate-500">Universitas Islam Mojopahit (UNIM) · 2019 — 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GraduationCap size={18} className="text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-white">SMK — Teknik Instalasi Tenaga Listrik (TITL)</h3>
                <p className="text-xs text-slate-500">SMK Negeri 1 Jatirejo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontak" className="px-6 py-20 border-t border-slate-900 bg-slate-950/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2">Hubungi Saya</h2>
          <p className="text-sm text-slate-500 mb-8">Terbuka untuk peluang kerja di bidang electrical maintenance & otomasi industri.</p>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="name" type="text" placeholder="Nama" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors" />
              <input required name="email" type="email" placeholder="Email" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors" />
            </div>
            <textarea required name="message" rows={4} placeholder="Pesan Anda" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none" />
            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 text-black text-sm font-bold hover:bg-amber-400 transition-colors disabled:opacity-50">
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </div>
      </section>

      <footer className="px-6 py-8 border-t border-slate-900 text-center">
        <p className="text-[11px] text-slate-700">© 2026 Rizky Tri Wahyudi</p>
      </footer>
    </div>
  );
}
