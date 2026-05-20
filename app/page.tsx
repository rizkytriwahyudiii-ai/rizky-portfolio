'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Cpu, Zap, Globe, Mail, Layers, Code, ArrowUpRight, MousePointer2, Smartphone } from 'lucide-react';

export default function Home() {
  // 1. Tambahkan state untuk manajemen status pengiriman form
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    // Memasukkan Access Key Web3Forms milikmu
    formData.append("access_key", "3ab2072b-5f3e-4268-b3f5-9cfa8644a607");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Your message has been sent.");
        formElement.reset(); // Mengosongkan form setelah sukses
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* --- HEADER / HERO SECTION --- */}
      <header className="relative bg-gradient-to-b from-slate-950 via-[#030712] to-[#030712] py-28 px-6 text-center overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* FOTO PROFIL KOMPONEN */}
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-2xl shadow-blue-950/50">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
              <Image 
                src="/profile.png"
                alt="Rizky Tri Wahyudi" 
                fill
                priority
                sizes="(max-width: 768px) 128px, 128px"
                className="object-cover object-center transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8 tracking-wider uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Available for Remote Work
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-500">
            Rizky Tri Wahyudi
          </h1>
          
          <p className="text-xs md:text-sm text-blue-400 font-bold mb-10 uppercase tracking-[0.3em] max-w-2xl mx-auto bg-slate-950/60 border border-slate-800/80 rounded-full py-2.5 px-6 backdrop-blur-sm shadow-inner">
            Industrial Automation & Full-Stack Web Developer
          </p>
          
          <p className="max-w-3xl mx-auto text-slate-400 text-base md:text-lg font-light leading-relaxed">
            Engineering High-Performance Web Architecture with Industrial-Grade Logic. <br className="hidden md:inline"/>
            Leveraging a solid background in electrical control systems to build deterministic, automated, and fault-tolerant digital systems scalable globally via cloud infrastructure.
          </p>
        </div>
      </header>

      {/* --- CORE VALUE / USP SECTION --- */}
      <section className="max-w-5xl mx-auto -mt-12 px-6 relative z-20">
        <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-blue-950/40 text-center border border-blue-400/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_50%)]"></div>
          <div className="flex justify-center gap-4 mb-6 text-blue-200 relative z-10">
            <Cpu className="w-6 h-6 animate-[spin_8s_linear_infinite]" />
            <span className="font-mono text-sm tracking-[0.2em] font-bold">10101100100</span>
            <Code className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight relative z-10">Engineering Logic, Digital Solutions</h2>
          <p className="text-blue-50 text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            Bringing rigorous industrial troubleshooting methodology and deterministic blueprint discipline into software engineering. I design web applications that are not just visually refined, but architecturally resilient, highly structural, and fully optimized for global deployment.
          </p>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="max-w-6xl mx-auto py-32 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2">Portfolio</span>
            <h2 className="text-4xl font-black text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm font-light leading-relaxed">
            Case studies covering bespoke high-performance e-commerce interfaces, local business digitization hubs, and industrial hardware-to-cloud data systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Project 1: Parfum */}
          <div className="group bg-slate-950/20 rounded-3xl border border-slate-900 overflow-hidden hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/40 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2">
            <div>
              <div className="bg-gradient-to-br from-slate-950 to-[#090d16] h-52 flex flex-col items-center justify-center relative overflow-hidden px-6 text-center border-b border-slate-900">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
                <Smartphone className="w-10 h-10 text-blue-400 mb-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <span className="text-[10px] font-mono text-blue-400/50 tracking-widest uppercase mb-1">E-Commerce Interface</span>
                <span className="text-base font-serif text-slate-300 font-semibold tracking-wide">Hyva Arvm | Luxury Fragrance</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Premium Store Solution</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white flex items-center justify-between group-hover:text-blue-400 transition-colors">
                  Bespoke Scent Commerce <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                  A high-end digital luxury marketplace. Specifically developed to translate complex fragrance notes—like <span className="text-slate-300 font-medium">Plum, Hazelnut, and Cedar</span>—into a rich, lightning-fast interactive sensory UI.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 bg-slate-900/60 text-slate-400 border border-slate-800/80 text-xs rounded-lg font-mono">Next.js</span>
              <span className="px-2.5 py-1 bg-slate-900/60 text-slate-400 border border-slate-800/80 text-xs rounded-lg font-mono">Tailwind</span>
              <span className="px-2.5 py-1 bg-slate-900/60 text-slate-400 border border-slate-800/80 text-xs rounded-lg font-mono">Vercel</span>
            </div>
          </div>

          {/* Project 2: Jasa Listrik */}
          <div className="group bg-slate-950/20 rounded-3xl border border-slate-900 overflow-hidden hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2">
            <div>
              <div className="bg-gradient-to-br from-slate-950 to-[#120d06] h-52 flex flex-col items-center justify-center relative overflow-hidden px-6 text-center border-b border-slate-900">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>
                <Zap className="w-10 h-10 text-amber-400 mb-3 transform group-hover:scale-110 group-hover:animate-pulse transition-all duration-300" />
                <span className="text-[10px] font-mono text-amber-400/50 tracking-widest uppercase mb-1">Service Platform</span>
                <span className="text-sm font-sans text-amber-400/90 font-bold tracking-wider">LISTRIK MOJOKERTO JAYA</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MousePointer2 className="w-4 h-4 text-amber-500" />
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Business Digitalization</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white flex items-center justify-between group-hover:text-amber-400 transition-colors">
                  Industrial Engineering Hub <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                  A comprehensive, localized service platform offering professional industrial electrical contracting, planned maintenance, and rapid troubleshooting services across strategic manufacturing sectors including <span className="text-slate-300 font-medium">Ngoro, Puri, and Sooko</span>.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 bg-slate-900/60 text-slate-400 border border-slate-800/80 text-xs rounded-lg font-mono">WordPress</span>
              <span className="px-2.5 py-1 bg-slate-900/60 text-slate-400 border border-slate-800/80 text-xs rounded-lg font-mono">Kadence WP</span>
              <span className="px-2.5 py-1 bg-slate-900/60 text-slate-400 border border-slate-800/80 text-xs rounded-lg font-mono">Local SEO</span>
            </div>
          </div>

          {/* Project 3: IoT Monitoring ESP32 */}
          <div className="group bg-slate-950/20 rounded-3xl border border-slate-900 overflow-hidden hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-950/20 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2">
            <div>
              <div className="bg-gradient-to-br from-slate-950 to-[#06120e] h-52 flex flex-col items-center justify-center relative overflow-hidden px-6 text-center border-b border-slate-900">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
                <Cpu className="w-10 h-10 text-emerald-400 mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-[10px] font-mono text-emerald-400/50 tracking-widest uppercase mb-1">IoT Node Architecture</span>
                <span className="text-[11px] font-mono text-emerald-400/80 border border-emerald-500/20 px-3 py-0.5 rounded bg-emerald-500/5">ESP32 // TELEMETRY_CORE</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Smart Manufacturing</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white flex items-center justify-between group-hover:text-emerald-400 transition-colors">
                  Predictive Machine Telemetry <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                  End-to-end hardware-to-software telemetry deployment using ESP32 microcontrollers to ingest real-time machine vital stats. Data streams securely to cut equipment downtime via a dedicated analytics interface.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 bg-slate-900/60 text-slate-400 border border-slate-800/80 text-xs rounded-lg font-mono">ESP32 Systems</span>
              <span className="px-2.5 py-1 bg-slate-900/60 text-slate-400 border border-slate-800/80 text-xs rounded-lg font-mono">MQTT / HTTP</span>
              <span className="px-2.5 py-1 bg-slate-900/60 text-slate-400 border border-slate-800/80 text-xs rounded-lg font-mono">Real-time Data</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER / CONTACT SECTION --- */}
      <footer className="bg-slate-950/60 text-slate-400 py-28 px-6 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
          
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-3">Let's Work Together</span>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Ready to Collaborate?</h2>
              <p className="max-w-md text-slate-400 text-base font-light leading-relaxed mb-10">
                I am currently open to Full-Time Remote Roles and contract freelance partnerships within IoT integration, manufacturing automation engineering, and full-stack web development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/40 group-hover:text-blue-300 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a 
                    href="mailto:rizkytriwahyudiii@gmail.com?subject=Inquiry%20from%20Portfolio" 
                    className="hover:text-blue-400 transition-colors text-sm font-mono tracking-wide relative z-20 cursor-pointer"
                  >
                    rizkytriwahyudiii@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-light text-slate-300">Mojokerto, East Java, Indonesia</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0">
              <a 
                href="https://www.linkedin.com/in/rizky-tri-wahyudi-122a7a15b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl border border-slate-800 hover:border-slate-700 text-sm font-medium transition-all shadow-sm group relative z-20"
              >
                Connect via LinkedIn <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Form Interaktif Terintegrasi Web3Forms */}
          <div className="bg-slate-950/40 p-8 md:p-10 rounded-3xl border border-slate-900/80 backdrop-blur-md shadow-2xl relative z-20">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Drop Me a Message
            </h3>
            
            {/* 2. Mengarahkan onSubmit ke fungsi handler baru */}
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">Your Name</label>
                <input required name="name" type="text" placeholder="John Doe" className="w-full bg-slate-950/80 border border-slate-900 rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-slate-950 transition-all shadow-inner" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">Email Address</label>
                <input required name="email" type="email" placeholder="john@example.com" className="w-full bg-slate-950/80 border border-slate-900 rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-slate-950 transition-all shadow-inner" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">Message</label>
                <textarea required name="message" rows={4} placeholder="Tell me about your project or job opening..." className="w-full bg-slate-950/80 border border-slate-900 rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:bg-slate-950 transition-all shadow-inner resize-none"></textarea>
              </div>
              
              {/* 3. Button dinamis: Akan terkunci (disabled) & teks berubah jadi "Sending..." saat memproses */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-semibold text-sm py-3.5 rounded-xl shadow-lg shadow-blue-950/50 transition-all active:scale-[0.985] hover:shadow-blue-900/30 cursor-pointer flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono">
          <div>© 2026 Rizky Tri Wahyudi. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Built with Next.js {"16"}</span>
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