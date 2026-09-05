'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, ExternalLink } from 'lucide-react';

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

const projects = [
  {
    name: 'HYVA ARVM',
    tag: 'E-commerce',
    desc: 'Website e-commerce parfum dengan keranjang belanja, checkout multi-step lengkap dengan peta lokasi dan dropdown wilayah Indonesia bertingkat, integrasi pembayaran Midtrans, dan panel admin dengan kontrol akses berbasis role.',
    stack: ['Next.js', 'Supabase', 'Zustand', 'Framer Motion', 'Midtrans'],
    github: 'https://github.com/rizkytriwahyudiii-ai/hyva-arvm',
    url: null,
  },
  {
    name: 'PT Solusindo Works',
    tag: 'Company Profile',
    desc: 'Website perusahaan untuk layanan rekayasa industri, dibangun dengan arsitektur berbasis fitur, animasi scroll-reveal, dan parallax mengikuti kursor.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: null,
    url: null,
  },
  {
    name: 'Expense Tracker',
    tag: 'Personal Tool',
    desc: 'Aplikasi pencatat pengeluaran pribadi menggantikan Google Sheets — dengan breakdown kategori, grafik tren bulanan, upload foto struk, dan import/export ke Excel.',
    stack: ['React', 'Chart.js', 'xlsx'],
    github: null,
    url: null,
  },
];

export default function WebDevPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
            <ArrowLeft size={14} />
            Kembali
          </Link>
          <a href="#kontak" className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-xs font-bold hover:bg-indigo-400 transition-colors">
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
            <p className="text-indigo-400 text-sm font-semibold">Full-Stack Web Developer</p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
              Lulusan Teknik Informatika yang membangun aplikasi web dari nol — dari desain database
              sampai UI. Mengerjakan proyek freelance di sela pekerjaan utama saya di bidang electrical
              maintenance.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><Mail size={13} /> rizkytriwahyudiii@gmail.com</span>
              <a href="https://github.com/rizkytriwahyudiii-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
                <GithubIcon size={13} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-16 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-10">Proyek</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/50 flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 mb-3">{p.tag}</span>
                <h3 className="text-base font-bold text-white mb-2">{p.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s, j) => (
                    <span key={j} className="text-[10px] px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">{s}</span>
                  ))}
                </div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                    Lihat kode <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-16 border-t border-slate-900 bg-slate-950/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-2.5">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Zustand', 'Framer Motion', 'Git & GitHub', 'Vercel'].map((s, i) => (
              <span key={i} className="text-xs px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontak" className="px-6 py-20 border-t border-slate-900 bg-slate-950/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-2">Punya proyek web?</h2>
          <p className="text-sm text-slate-500 mb-8">Ceritakan kebutuhan proyekmu, saya akan balas secepatnya.</p>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="name" type="text" placeholder="Nama" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" />
              <input required name="email" type="email" placeholder="Email" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            <textarea required name="message" rows={4} placeholder="Ceritakan tentang proyekmu" className="w-full p-3.5 rounded-xl border border-slate-800 bg-slate-950 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none" />
            <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-500 text-white text-sm font-bold hover:bg-indigo-400 transition-colors disabled:opacity-50">
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
