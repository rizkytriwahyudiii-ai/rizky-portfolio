'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft, ExternalLink, Code2, Layers, Database,
  Terminal, ArrowRight, ShoppingBag, Building2, Wallet
} from 'lucide-react';
import { useReveal, useTypingEffect } from '../lib/useReveal';
import {
  CursorSpotlight, ScrollProgressBar, SectionDotNav, AnimatedCounter,
  Marquee, TiltCard, CopyEmail, BackToTop, StaggeredText,
} from '../lib/effects';

const roles = [
  'Full-Stack Web Developer',
  'Next.js & React Developer',
  'Freelance Software Builder',
];

const sections = [
  { id: 'hero', label: 'Profil' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'kontak', label: 'Kontak' },
];

const projects = [
  {
    name: 'HYVA ARVM',
    tag: 'E-commerce',
    category: 'ecommerce',
    icon: <ShoppingBag size={18} />,
    desc: 'Website e-commerce parfum dengan keranjang belanja, checkout multi-step lengkap dengan peta lokasi dan dropdown wilayah Indonesia bertingkat, integrasi pembayaran Midtrans, dan panel admin dengan kontrol akses berbasis role.',
    stack: ['Next.js', 'Supabase', 'Zustand', 'Framer Motion', 'Midtrans'],
    github: 'https://github.com/rizkytriwahyudiii-ai/hyva-arvm',
    url: null,
  },
  {
    name: 'PT Solusindo Works',
    tag: 'Company Profile',
    category: 'company',
    icon: <Building2 size={18} />,
    desc: 'Website perusahaan untuk layanan rekayasa industri, dibangun dengan arsitektur berbasis fitur, animasi scroll-reveal, dan parallax mengikuti kursor.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: null,
    url: null,
  },
  {
    name: 'Expense Tracker',
    tag: 'Personal Tool',
    category: 'tool',
    icon: <Wallet size={18} />,
    desc: 'Aplikasi pencatat pengeluaran pribadi menggantikan Google Sheets — dengan breakdown kategori, grafik tren bulanan, upload foto struk, dan import/export ke Excel.',
    stack: ['React', 'Chart.js', 'xlsx'],
    github: null,
    url: null,
  },
];

const filterTabs = [
  { key: 'all', label: 'Semua' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'company', label: 'Company Profile' },
  { key: 'tool', label: 'Personal Tool' },
];

const techStack = [
  { name: 'Next.js', icon: <Code2 size={16} /> },
  { name: 'React', icon: <Code2 size={16} /> },
  { name: 'TypeScript', icon: <Terminal size={16} /> },
  { name: 'Tailwind CSS', icon: <Layers size={16} /> },
  { name: 'Supabase', icon: <Database size={16} /> },
  { name: 'Zustand', icon: <Layers size={16} /> },
  { name: 'Framer Motion', icon: <Layers size={16} /> },
  { name: 'Git & GitHub', icon: <Terminal size={16} /> },
  { name: 'Vercel', icon: <Terminal size={16} /> },
];

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

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

export default function WebDevPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const typed = useTypingEffect(roles);

  const visibleProjects = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '3ab2072b-5f3e-4268-b3f5-9cfa8644a607');
    formData.append('subject', 'Pesan baru dari halaman Web Development portfolio');

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
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      <ScrollProgressBar colorClass="bg-indigo-500" />
      <CursorSpotlight color="99,102,241" />
      <SectionDotNav sections={sections} activeColorClass="bg-indigo-400 border-indigo-400" />
      <BackToTop accentClass="bg-indigo-500 hover:bg-indigo-400 text-white" />

      {/* Dev-themed dot grid background */}
      <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
      <div className="fixed top-[-15%] right-[10%] w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="fixed bottom-[-10%] left-[5%] w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[110px] pointer-events-none" />

      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors group">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Kembali
          </Link>
          <a href="#kontak" className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-xs font-bold hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
            Hubungi Saya
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative px-6 pt-20 pb-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shrink-0 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
            <Image src="/profile.png" alt="Rizky Tri Wahyudi" fill sizes="112px" className="object-cover" />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-[10px] font-mono uppercase tracking-widest text-indigo-400 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Terbuka untuk proyek freelance
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              <StaggeredText text="Rizky Tri Wahyudi" />
            </h1>
            <p className="text-indigo-400 text-base font-semibold h-6 font-mono" suppressHydrationWarning translate="no">
              {typed}
              <span className="animate-pulse">_</span>
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
              Lulusan Teknik Informatika yang membangun aplikasi web dari nol — dari desain database
              sampai UI. Mengerjakan proyek freelance di sela pekerjaan utama saya di bidang electrical
              maintenance.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-500">
              <CopyEmail email="rizkytriwahyudiii@gmail.com" accentClass="text-slate-500 hover:text-indigo-400" />
              <a href="https://github.com/rizkytriwahyudiii-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
                <GithubIcon size={13} /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* STATS with animated counters */}
        <Reveal delay={100}>
          <div className="grid grid-cols-3 gap-4 mt-14 pt-10 border-t border-slate-900">
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-black text-white"><AnimatedCounter value={3} /></p>
              <p className="text-[11px] text-slate-500 mt-1">Proyek Dibangun</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-black text-white"><AnimatedCounter value={9} /></p>
              <p className="text-[11px] text-slate-500 mt-1">Tools & Framework</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-black text-white">S1 TI</p>
              <p className="text-[11px] text-slate-500 mt-1">Teknik Informatika</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10">
          <Marquee
            items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Zustand', 'Framer Motion', 'Vercel']}
            accentClass="border-indigo-500/20 text-indigo-300"
          />
        </div>
      </section>

      {/* PROJECTS with filter tabs */}
      <section id="proyek" className="px-6 py-16 border-t border-slate-900 relative">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <h2 className="text-xl font-bold text-white">Proyek</h2>
              <div className="flex flex-wrap gap-2">
                {filterTabs.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all ${
                      activeFilter === f.key ? 'bg-indigo-500 text-white border-indigo-500' : 'border-slate-800 text-slate-400 hover:border-indigo-500/40'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {visibleProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <TiltCard className="group h-full p-6 rounded-2xl border border-slate-800 bg-slate-950/50 flex flex-col hover:border-indigo-500/40 hover:shadow-[0_10px_40px_rgba(99,102,241,0.12)] transition-colors duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">{p.tag}</span>
                    <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                      {p.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.map((s, j) => (
                      <span key={j} className="text-[10px] px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 group-hover:border-indigo-500/20 transition-colors">{s}</span>
                    ))}
                  </div>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                      Lihat kode <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="stack" className="px-6 py-16 border-t border-slate-900 bg-slate-950/30 relative">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-xl font-bold text-white mb-8">Tech Stack</h2>
          </Reveal>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((s, i) => (
              <Reveal key={i} delay={i * 40}>
                <span className="flex items-center gap-2 text-xs px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:border-indigo-500/40 hover:text-indigo-300 transition-all">
                  <span className="text-indigo-400">{s.icon}</span>
                  {s.name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontak" className="px-6 py-20 border-t border-slate-900 bg-slate-950/30 relative">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-2">Punya proyek web?</h2>
            <p className="text-sm text-slate-500 mb-8">Ceritakan kebutuhan proyekmu, saya akan balas secepatnya.</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required name="name" type="text" placeholder="Nama" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all" />
                <input required name="email" type="email" placeholder="Email" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all" />
              </div>
              <textarea required name="message" rows={4} placeholder="Ceritakan tentang proyekmu" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none" />
              <button type="submit" disabled={isSubmitting} className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-500 text-white text-sm font-bold hover:bg-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
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
