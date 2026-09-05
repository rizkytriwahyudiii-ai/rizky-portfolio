'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Code2, ArrowUpRight, Cpu, Gauge, ShoppingBag, Layers } from 'lucide-react';
import { CopyEmail } from './lib/effects';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans antialiased selection:bg-amber-500 selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.06),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.08),transparent_35%)] pointer-events-none" />

      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-3xl w-full text-center space-y-10">
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-slate-800">
              <Image src="/profile.png" alt="Rizky Tri Wahyudi" fill sizes="112px" className="object-cover grayscale" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Rizky Tri Wahyudi</h1>
              <p className="text-slate-500 text-sm">Electrical Maintenance Technician & Web Developer, based in East Java</p>
            </div>
          </div>

          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Saya kerja di dua dunia: menjaga mesin produksi tetap menyala di pabrik, dan membangun aplikasi
            web di waktu luang. Pilih sisi mana yang ingin kamu lihat.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 pt-4 text-left">
            <Link
              href="/electrical"
              className="group relative p-8 rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-11 w-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Zap size={20} />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Electrical & Industrial Automation</h2>
              <p className="text-slate-500 text-xs leading-relaxed mb-5">
                Pengalaman kerja, sertifikasi, dan keahlian teknis di bidang maintenance electrical,
                PLC, dan otomasi pabrik.
              </p>

              {/* Ringkasan singkat */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                  <Gauge size={10} className="text-amber-400" /> 5+ tahun
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                  <Cpu size={10} className="text-amber-400" /> PLC & Inverter
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                  3 perusahaan
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                Lihat pengalaman kerja
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>

            <Link
              href="/webdev"
              className="group relative p-8 rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-11 w-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Code2 size={20} />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Web Development</h2>
              <p className="text-slate-500 text-xs leading-relaxed mb-5">
                Proyek-proyek web yang sudah dibangun — e-commerce, company profile, dan tools internal
                dengan Next.js.
              </p>

              {/* Ringkasan singkat */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                  <Layers size={10} className="text-indigo-400" /> 3 proyek
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                  <ShoppingBag size={10} className="text-indigo-400" /> E-commerce
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                  Next.js & React
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400">
                Lihat proyek
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>

          <div className="flex justify-center pt-6">
            <CopyEmail email="rizkytriwahyudiii@gmail.com" accentClass="text-slate-600 hover:text-slate-400" />
          </div>
        </div>
      </main>
    </div>
  );
}
