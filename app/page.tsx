'use client';
import React from 'react';
import { Cpu, Zap, Globe, Mail, Smartphone, MousePointer2, Layers, Code, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white antialiased">
      
      {/* --- HEADER / HERO SECTION --- */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-32 px-6 text-center overflow-hidden border-b border-slate-800/80">
        {/* Dekorasi Grid Garis Semu (Circuit Vibe) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Available for Remote Work
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Rizky Tri Wahyudi
          </h1>
          <p className="text-lg md:text-xl text-blue-400 font-semibold mb-8 uppercase tracking-widest max-w-2xl mx-auto border-y border-blue-500/20 py-2">
            Industrial Automation & Full-Stack Web Developer
          </p>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Membangun Website dengan Standar Keamanan dan Logika Teknik. <br className="hidden md:inline"/>
            Dari sistem kontrol perangkat keras hingga arsitektur cloud digital, saya merancang platform web berkinerja tinggi yang terstruktur rapi, berjalan otomatis, dan bebas dari eror.
          </p>
        </div>
      </header>

      {/* --- CORE VALUE / USP SECTION --- */}
      <section className="max-w-5xl mx-auto -mt-16 px-6 relative z-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-blue-950/50 text-center border border-blue-400/20 backdrop-blur-sm">
          <div className="flex justify-center gap-4 mb-4 text-blue-200">
            <Cpu className="w-6 h-6 animate-pulse" />
            <span className="font-mono text-sm tracking-widest">10101100100</span>
            <Code className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">Logika Teknik, Solusi Digital</h2>
          <p className="text-blue-50 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            "Dengan latar belakang sebagai teknisi listrik industri, saya membawa kedisiplinan 
            dan ketajaman logika teknik ke dalam setiap baris kode. Saya membangun arsitektur aplikasi yang tidak hanya estetik, 
            tetapi juga andal, terstruktur dengan logika ketat, dan siap skala global melalui Vercel."
          </p>
        </div>
      </section>

      {/* --- PROJECTS GRID (VISUAL STORYTELLING - PERFECTED) --- */}
      <section className="max-w-6xl mx-auto py-28 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm">
            Studi kasus integrasi platform web e-commerce komersial, digitalisasi bisnis lokal, hingga pemrograman logika otomasi perangkat keras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Project 1: Parfum */}
          <div className="group bg-slate-950/40 rounded-3xl border border-slate-800/80 overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 h-52 flex flex-col items-center justify-center relative overflow-hidden px-6 text-center border-b border-slate-800/50">
                {/* Micro circuit line decorator */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>
                <Smartphone className="w-10 h-10 text-blue-400 mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                <span className="text-[10px] font-mono text-blue-400/60 tracking-widest uppercase mb-1">E-Commerce Interface</span>
                <span className="text-lg font-serif text-slate-300 font-semibold tracking-wide">Hyva Arvm | Luxury Fragrance</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Premium Store Solution</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white flex items-center justify-between group-hover:text-blue-400 transition-colors">
                  Premium Scent Store <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                  Platform e-commerce penjualan produk parfum modern. Dirancang khusus untuk menonjolkan transisi visual karakter piramida aroma mewah seperti <span className="text-slate-300 font-medium">Plum, Hazelnut, dan Cedar</span> melalui UI minimalis berkecepatan tinggi.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800 text-xs rounded-md font-mono">Next.js</span>
              <span className="px-2.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800 text-xs rounded-md font-mono">Tailwind</span>
              <span className="px-2.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800 text-xs rounded-md font-mono">Vercel</span>
            </div>
          </div>

          {/* Project 2: Jasa Listrik */}
          <div className="group bg-slate-950/40 rounded-3xl border border-slate-800/80 overflow-hidden hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-950/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 h-52 flex flex-col items-center justify-center relative overflow-hidden px-6 text-center border-b border-slate-800/50">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40"></div>
                <Zap className="w-10 h-10 text-amber-400 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[10px] font-mono text-amber-400/60 tracking-widest uppercase mb-1">Service Platform</span>
                <span className="text-base font-sans text-amber-400/90 font-bold tracking-wider">LISTRIK MOJOKERTO JAYA</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MousePointer2 className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Business Digitalization</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white flex items-center justify-between group-hover:text-amber-400 transition-colors">
                  Listrik Mojokerto Hub <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                  Digitalisasi platform landing page profesional penawaran jasa instalasi, perawatan, dan perbaikan kelistrikan terpadu untuk area komersil dan pabrik di sektor <span className="text-slate-300 font-medium">Ngoro, Puri, dan Sooko</span>.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800 text-xs rounded-md font-mono">WordPress</span>
              <span className="px-2.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800 text-xs rounded-md font-mono">Kadence WP</span>
              <span className="px-2.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800 text-xs rounded-md font-mono">Local SEO</span>
            </div>
          </div>

          {/* Project 3: PLC */}
          <div className="group bg-slate-950/40 rounded-3xl border border-slate-800/80 overflow-hidden hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 h-52 flex flex-col items-center justify-center relative overflow-hidden px-6 text-center border-b border-slate-800/50">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-40"></div>
                <Cpu className="w-10 h-10 text-emerald-400 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[10px] font-mono text-emerald-400/60 tracking-widest uppercase mb-1">Automation Architecture</span>
                <span className="text-xs font-mono text-emerald-400/80 border border-emerald-500/20 px-3 py-0.5 rounded bg-emerald-500/5">SYS_CTRL // MESIN_PLONG</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Industrial Engineering</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white flex items-center justify-between group-hover:text-emerald-400 transition-colors">
                  PLC Machine Automation <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                  Rekayasa logika dan instalasi sistem kendali kelistrikan otomatis berbasis PLC pada <span className="text-slate-300 font-medium">Mesin Plong Industri</span> pabrik manufaktur. Berhasil mematangkan efisiensi alur sekuensial dan mereduksi risiko fatal *downtime* mesin produksi.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800 text-xs rounded-md font-mono">PLC Logic</span>
              <span className="px-2.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800 text-xs rounded-md font-mono">Wiring Design</span>
              <span className="px-2.5 py-0.5 bg-slate-900/80 text-slate-400 border border-slate-800 text-xs rounded-md font-mono">Automation</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER / CONTACT SECTION --- */}
      <footer className="bg-slate-950 text-slate-400 py-24 px-6 border-t border-slate-800/60 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
          
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-3">Let's Work Together</span>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Ready to Collaborate?</h2>
              <p className="max-w-md text-slate-400 text-base font-light leading-relaxed mb-8">
                Saya tersedia untuk posisi remote penuh waktu (*Full-Time Remote Roles*) maupun proyek kontrak *freelance* global di sektor IoT, integrasi manufaktur, hingga pengembangan web mutakhir.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:rizkytriwahyudiii@gmail.com" className="hover:text-white transition-colors text-sm font-mono">
                    rizkytriwahyudiii@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-light text-slate-300">Mojokerto, Jawa Timur, Indonesia</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0 flex items-center gap-6">
              <a href="https://linkedin.com/in/rizkywahyudi" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl border border-slate-800 text-sm font-medium transition-all flex items-center gap-2 shadow-sm">
                Connect via LinkedIn <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800/80 backdrop-blur-sm shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Drop Me a Message
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/80 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/80 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">Message</label>
                <textarea rows={4} placeholder="Tell me about your project or job opening..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/80 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-3 rounded-xl shadow-lg shadow-blue-900/30 transition-all active:scale-[0.99]">
                Send Message
              </button>
            </form>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono">
          <div>© 2026 Rizky Tri Wahyudi. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Built with Next.js 16</span>
            <span>•</span>
            <span>Tailwind Engine v4</span>
            <span>•</span>
            <span>Deployed via Vercel</span>
          </div>
        </div>
      </footer>

    </div>
  );
}