'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Cpu, Zap, Globe, Mail, Layers, Code, ArrowUpRight, 
  Smartphone, Terminal, CheckCircle2, ShieldCheck, Gauge, 
  ChevronDown, Star, HelpCircle, Sun, Moon
} from 'lucide-react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Mengubah class HTML root untuk transisi warna global jika diperlukan masa mendatang
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    formData.append("access_key", "3ab2072b-5f3e-4268-b3f5-9cfa8644a607");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        alert("Success! Your message has been sent.");
        formElement.reset();
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      alert("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen font-sans antialiased scroll-smooth transition-colors duration-500 selection:bg-amber-500 selection:text-slate-950
      ${theme === 'dark' ? 'bg-[#030712] text-slate-100' : 'bg-slate-50 text-slate-800'}`}
    >
      
{/* --- STICKY NAVIGATION BAR WITH TYPING EFFECT --- */}
<nav className={`sticky top-0 z-50 backdrop-blur-md border-b px-4 py-4 transition-colors duration-500 lg:px-8 2xl:px-32
  ${theme === 'dark' ? 'bg-[#030712]/80 border-slate-900' : 'bg-white/80 border-slate-200 shadow-sm'}`}
>
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    
    {/* BAGIAN TEKS MENGETIK (TYPING EFFECT) */}
    <div className="grow flex gap-2 items-center">
      <div className={`basis-6 border-b md:basis-10 transition-colors duration-500 ${theme === 'dark' ? 'border-slate-700' : 'border-slate-300'}`}></div>
      <p className="font-mono font-bold text-xs md:text-sm tracking-wider flex items-center min-w-[180px]">
        <Cpu className="w-4 h-4 text-amber-500 mr-2 animate-[spin_4s_linear_infinite] flex-shrink-0" />
        <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
          {(() => {
            // State internal untuk efek mengetik otomatis
            const words = ["Automation Engineer", "Full-Stack Developer", "Web Integrator"];
            const [index, setIndex] = React.useState(0);
            const [subIndex, setSubIndex] = React.useState(0);
            const [reverse, setReverse] = React.useState(false);

            React.useEffect(() => {
              if (subIndex === words[index].length + 1 && !reverse) {
                // Berhenti sejenak saat kata selesai diketik lengkap
                const timeout = setTimeout(() => setReverse(true), 2000);
                return () => clearTimeout(timeout);
              }

              if (subIndex === 0 && reverse) {
                setReverse(false);
                setIndex((prev) => (prev + 1) % words.length);
                return;
              }

              const timeout = setTimeout(() => {
                setSubIndex((prev) => prev + (reverse ? -1 : 1));
              }, reverse ? 40 : 100); // Kecepatan menghapus (40ms) & mengetik (100ms)

              return () => clearTimeout(timeout);
            }, [subIndex, index, reverse]);

            return (
              <>
                {words[index].substring(0, subIndex)}
                <span className="animate-[pulse_0.8s_infinite] text-amber-500 font-normal">|</span>
              </>
            );
          })()}
        </span>
      </p>
    </div>
    
    {/* NAVIGASI DESKTOP */}
    <div className="flex items-center gap-6 lg:gap-8">
      <ul className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-400">
        <li><a href="#about" className="hover:text-amber-500 transition-colors duration-200">About</a></li>
        <li><a href="#services" className="hover:text-amber-500 transition-colors duration-200">Services</a></li>
        <li><a href="#skills" className="hover:text-amber-500 transition-colors duration-200">Skills</a></li>
        <li><a href="#projects" className="hover:text-amber-500 transition-colors duration-200">Projects</a></li>
        <li><a href="#faq" className="hover:text-amber-500 transition-colors duration-200">FAQ</a></li>
      </ul>

      {/* CONTROLS (THEME TOGGLE + BUTTON) */}
      <div className="flex items-center gap-3">
        {/* Tombol Switch Theme Mode */}
        <button 
          onClick={toggleTheme} 
          className={`p-2 rounded-lg border transition-all duration-300 cursor-pointer active:scale-90
            ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 animate-[spin_20s_linear_infinite]" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600" />
          )}
        </button>

        <a href="#contact" className={`hidden sm:inline-block px-4 py-2 border text-xs font-mono uppercase rounded-lg transition-all duration-300 transform hover:-translate-y-0.5
          ${theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-amber-500' : 'bg-white hover:bg-slate-50 border-slate-300 text-amber-600 shadow-sm'}`}
        >
          Contact
        </a>

        {/* HAMBURGER MENU BUTTON (Hanya Muncul di Mobile/Tablet) */}
        {(() => {
          const [isOpen, setIsOpen] = React.useState(false);
          return (
            <>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg lg:hidden border transition-all duration-200 active:scale-95
                  ${theme === 'dark' ? 'border-slate-800 text-slate-400 bg-slate-900' : 'border-slate-200 text-slate-600 bg-slate-100'}`}
              >
                {/* Ikon Hamburger Garis Tiga Simpel */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* DROPDOWN MENU MOBILE CONTAINER */}
              <div className={`fixed left-0 top-[69px] z-50 w-full bg-opacity-95 backdrop-blur-lg duration-300 transition-all border-b lg:hidden overflow-hidden
                ${isOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'}
                ${theme === 'dark' ? 'bg-[#030712]/95 border-slate-900' : 'bg-white/95 border-slate-200'}`}
              >
                <nav className="px-6">
                  <ul className="flex flex-col gap-3 text-xs font-mono uppercase tracking-wider">
                    <li><a onClick={() => setIsOpen(false)} href="#about" className={`block py-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>About</a></li>
                    <li><a onClick={() => setIsOpen(false)} href="#services" className={`block py-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Services</a></li>
                    <li><a onClick={() => setIsOpen(false)} href="#skills" className={`block py-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Skills</a></li>
                    <li><a onClick={() => setIsOpen(false)} href="#projects" className={`block py-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Projects</a></li>
                    <li><a onClick={() => setIsOpen(false)} href="#faq" className={`block py-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>FAQ</a></li>
                    <li><a onClick={() => setIsOpen(false)} href="#contact" className="block py-2 text-amber-500 font-bold">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </>
          );
        })()}
      </div>

    </div>
  </div>
</nav>
      {/* --- HERO SECTION --- */}
      <header className={`relative py-32 px-6 text-center overflow-hidden border-b transition-colors duration-500
        ${theme === 'dark' ? 'border-slate-900' : 'border-slate-200 bg-gradient-to-b from-white to-slate-50'}`}
      >
        {/* Latar Belakang Grid Cetak Biru */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] transition-opacity duration-500
          ${theme === 'dark' ? 'opacity-15' : 'opacity-5'}`}
        ></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge Interaktif */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full mb-8 shadow-inner transform hover:scale-102 transition-transform duration-300
            ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'}`}
          >
            <div className="flex text-amber-500"><Star className="w-3 h-3 fill-amber-500 animate-bounce" /></div>
            <span className={`text-[11px] font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Industrial Logic Integrated to Web Infrastructure
            </span>
          </div>

          {/* Frame Foto Profil dengan Animasi Hover Glow */}
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-2xl p-[2px] bg-gradient-to-tr from-amber-500 via-slate-500 to-amber-300 shadow-xl group overflow-hidden">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950 relative">
              <Image 
                src="/profile.png" 
                alt="Rizky Tri Wahyudi" 
                fill 
                priority 
                className="object-cover object-center transform group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
          </div>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-semibold text-amber-500 bg-amber-500/10 rounded-md border border-amber-500/20 mb-8 tracking-wider uppercase animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Available for Remote & Freelance Roles
          </span>
          
          <h1 className={`text-4xl md:text-7xl font-black tracking-tight mb-6 leading-none transition-colors duration-500
            ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Hi, I am Rizky Tri Wahyudi <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Automation & Web Engineer.</span>
          </h1>
          
          <p className={`max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed mb-10 transition-colors duration-500
            ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Menjembatani sistem otomasi industri keras dengan arsitektur web modern. Saya membangun aplikasi web Next.js dan sistem kontrol WordPress yang berkinerja tinggi, deterministik, dan bebas dari error operasional.
          </p>

          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 transform hover:-translate-y-1">
              Hire Me Now
            </a>
            <a href="#projects" className={`px-6 py-3.5 border text-xs font-mono uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:-translate-y-1
              ${theme === 'dark' ? 'bg-slate-950 hover:bg-slate-900 border-slate-900 text-slate-300' : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700 shadow-sm'}`}
            >
              View Case Studies
            </a>
          </div>
        </div>
      </header>

      {/* --- SERVICES SECTION WITH ZOOM HOVER EFFECT --- */}
      <section id="services" className="max-w-6xl mx-auto py-28 px-6 border-b border-transparent">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-2">// EXPERTISE_CAPABILITIES</span>
          <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>My Service Expertise</h2>
          <p className={`text-sm font-light mt-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Membangun ekosistem digital tangguh dengan akurasi blueprint teknis.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Custom Website Development", desc: "Membangun arsitektur web responsif, aman, dan sangat cepat menggunakan Next.js/React untuk kebutuhan sistem bisnis global." },
            { num: "02", title: "Web Performance & SEO", desc: "Meningkatkan kecepatan loading halaman web, struktur SEO lokal, dan performa Core Web Vitals untuk konversi penjualan maksimal." },
            { num: "03", title: "IoT Integration & Debugging", desc: "Menghubungkan instrumentasi perangkat keras (ESP32/Modbus) ke dasbor web berbasis cloud dengan transmisi data real-time." }
          ].map((srv, i) => (
            <div key={i} className={`p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl
              ${theme === 'dark' ? 'bg-slate-950/40 border-slate-900 hover:border-amber-500/20 hover:bg-slate-950' : 'bg-white border-slate-200 hover:border-amber-500/30 hover:shadow-slate-200'}`}
            >
              <div className="font-mono text-xs text-amber-500/60 mb-4">{srv.num} // PROCESS</div>
              <h3 className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{srv.title}</h3>
              <p className={`text-xs leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT ME & SKILLS INVENTORY --- */}
      <section id="about" className={`max-w-6xl mx-auto py-28 px-6 border-t border-b transition-colors duration-500
        ${theme === 'dark' ? 'border-slate-900' : 'border-slate-200'}`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-2">// BACKGROUND_STORY</span>
            <h2 className={`text-3xl md:text-4xl font-black tracking-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Crafting Seamless High-Performance Systems</h2>
            <p className={`text-sm font-light leading-relaxed mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Berangkat dari latar belakang akademis Informatika serta keahlian praktis di lapangan sebagai teknisi listrik kontrol pabrik, saya memahami bagaimana sebuah alur logika harus dieksekusi tanpa cela.
            </p>
            <p className={`text-sm font-light leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Saya mentransformasikan kerangka sistem kontrol fisik (seperti PLC/Otomasi) ke dalam baris kode software modern. Ini memastikan sistem digital yang saya bangun untuk Anda berjalan sangat terstruktur.
            </p>
          </div>

          <div className={`p-8 rounded-2xl border transition-colors duration-500
            ${theme === 'dark' ? 'bg-slate-950/30 border-slate-900' : 'bg-white border-slate-200 shadow-sm'}`}
          >
            <h3 className={`text-sm font-mono uppercase tracking-wider mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>// SKILLS_INVENTORY</h3>
            
            <div className="space-y-6">
              {[
                { name: "Next.js / React Engine", val: "90%" },
                { name: "WordPress / Kadence Architecture", val: "95%" },
                { name: "Tailwind CSS Framework", val: "90%" },
                { name: "Industrial Automation Logic (PLC/ESP32)", val: "85%" }
              ].map((skl, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5 group-hover:text-amber-500 transition-colors">
                    <span>{skl.name}</span><span>{skl.val}</span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full overflow-hidden transition-colors ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-200'}`}>
                    <div 
                      className="h-full bg-amber-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
                      style={{ width: skl.val }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE ME (COMPARISON MATRIX) --- */}
      <section className={`max-w-6xl mx-auto py-28 px-6 border-b transition-colors duration-500
        ${theme === 'dark' ? 'border-slate-900' : 'border-slate-200'}`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-2">// ADVANTAGE_MATRIX</span>
          <h2 className={`text-3xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Why Choose Me?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Positif */}
          <div className={`border p-8 rounded-2xl transform hover:scale-[1.01] transition-all duration-300
            ${theme === 'dark' ? 'bg-emerald-950/5 border-emerald-900/30' : 'bg-emerald-50/40 border-emerald-200/60'}`}
          >
            <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-wider mb-6 flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-pulse" /> Working With Me
            </h3>
            <ul className={`space-y-3.5 text-xs font-light font-mono ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              <li>✓ Deterministic Industrial Control Logic</li>
              <li>✓ Strict TypeScript Implementation</li>
              <li>✓ High-Performance Web Optimizations (&lt;1.5s)</li>
              <li>✓ Clean, Architecture-Driven Codebases</li>
              <li>✓ High Hardware-to-Cloud Integration Skill</li>
            </ul>
          </div>
          {/* Negatif */}
          <div className={`border p-8 rounded-2xl transform hover:scale-[1.01] transition-all duration-300
            ${theme === 'dark' ? 'bg-rose-950/5 border-rose-900/20' : 'bg-rose-50/20 border-rose-100'}`}
          >
            <h3 className={`text-sm font-mono uppercase tracking-wider mb-6 flex items-center gap-2
              ${theme === 'dark' ? 'text-rose-400/60' : 'text-rose-500/70'}`}
            >
              <ShieldCheck className="w-4 h-4 opacity-50" /> Conventional Developers
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-400 font-light font-mono">
              <li>✗ Unstructured system workflows</li>
              <li>✗ Little to no structural backend logic</li>
              <li>✗ Slow load speeds and generic setups</li>
              <li>✗ Hard to debug and scale over time</li>
              <li>✗ No field engineering experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES / PROJECTS WITH INTERACTIVE CARD GLOW --- */}
      <section id="projects" className={`max-w-6xl mx-auto py-28 px-6 border-b transition-colors duration-500
        ${theme === 'dark' ? 'border-slate-900' : 'border-slate-200'}`}
      >
        <div className="mb-16">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-2">// RECENT_DEPLOYMENTS</span>
          <h2 className={`text-3xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Featured Case Studies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Smartphone className="w-6 h-6 text-amber-500" />, title: "Bespoke Scent Commerce", desc: "Marketplace interaktif modern yang mereduksi data aroma kompleks ke dalam UI ultra-cepat.", tag: "Next.js × Vercel", spec: "Speed: 99%" },
            { icon: <Zap className="w-6 h-6 text-amber-500" />, title: "Industrial Service Hub", desc: "Platform digitalisasi jasa teknikal untuk wilayah industri strategis dengan pengoptimalan SEO Lokal mendalam.", tag: "WordPress WP", spec: "Target: Klaster Pabrik" },
            { icon: <Cpu className="w-6 h-6 text-amber-500" />, title: "Predictive Telemetry Node", desc: "Implementasi pengiriman data telemetri mesin via ESP32 menuju sistem cloud analitik real-time guna meminimalkan kerusakan.", tag: "Hardware IoT", spec: "Uptime: 99.8%" }
          ].map((proj, i) => (
            <div key={i} className={`group border rounded-xl overflow-hidden p-6 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between
              ${theme === 'dark' ? 'bg-slate-950/40 border-slate-900 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-950/10' : 'bg-white border-slate-200 hover:border-amber-500/20 hover:shadow-xl hover:shadow-slate-200'}`}
            >
              <div>
                <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 inline-block mb-4">
                  {proj.icon}
                </div>
                <h3 className={`text-base font-bold mb-2 group-hover:text-amber-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {proj.title}
                </h3>
                <p className={`text-xs font-light mb-6 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {proj.desc}
                </p>
              </div>
              <div className={`border-t pt-4 text-[11px] font-mono flex justify-between ${theme === 'dark' ? 'border-slate-900 text-slate-500' : 'border-slate-100 text-slate-400'}`}>
                <span>{proj.tag}</span><span className="text-amber-500 font-bold">{proj.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION WITH SMOOTH SLIDE ANIMATION --- */}
      <section id="faq" className="max-w-4xl mx-auto py-28 px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-2">// KNOWLEDGE_BASE</span>
          <h2 className={`text-3xl font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "Apakah Anda melayani pengerjaan platform web sekala besar?", a: "Ya. Saya menggunakan ekosistem Next.js/React yang dioptimalkan melalui infrastruktur edge server Vercel guna menjamin kecepatan akses global yang stabil." },
            { q: "Bagaimana cara Anda mengintegrasikan perangkat keras ke web?", a: "Saya menggunakan mikrokontroler seperti ESP32 yang dikoneksikan via protokol komunikasi ringan HTTP REST API atau MQTT untuk mengirimkan data lapangan langsung menuju antarmuka dashboard web cloud." },
            { q: "Apakah layanan pembuatan web WordPress Anda ramah SEO?", a: "Sangat. Saya menggunakan optimasi framework arsitektur ringan seperti Kadence WP yang dipadukan dengan riset kata kunci lokal terarah (seperti klaster manufaktur Ngoro/Puri) guna mendongkrak peringkat bisnis Anda." }
          ].map((item, idx) => (
            <div key={idx} className={`border rounded-xl overflow-hidden transition-all duration-300
              ${theme === 'dark' ? 'bg-slate-950/40 border-slate-900' : 'bg-white border-slate-200'}`}
            >
              <button 
                onClick={() => toggleFaq(idx)} 
                className={`w-full text-left px-6 py-4 flex justify-between items-center text-sm font-bold font-mono transition-colors cursor-pointer
                  ${theme === 'dark' ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3"><HelpCircle className="w-4 h-4 text-amber-500" /> {item.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-amber-500' : ''}`} />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-40 border-t' : 'max-h-0'} 
                ${theme === 'dark' ? 'border-slate-900/60' : 'border-slate-100'}`}
              >
                <div className={`px-6 py-4 text-xs font-light leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT & WEB3FORMS TERMINAL --- */}
      <section id="contact" className={`py-28 px-6 border-t transition-colors duration-500
        ${theme === 'dark' ? 'bg-slate-950/20 border-slate-900' : 'bg-slate-100/50 border-slate-200'}`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest block mb-3">// CONNECT_INTERFACE</span>
              <h2 className={`text-4xl font-black tracking-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Ready to Execute?</h2>
              <p className={`text-sm font-light leading-relaxed mb-10 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                Punya kebutuhan digitalisasi otomatisasi, pembuatan web kustom, atau integrasi data terdistribusi? Hubungi saya langsung melalui antarmuka terminal pesan terenkripsi ini.
              </p>
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center gap-3 group">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center text-amber-500 transition-colors
                    ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200 shadow-sm'}`}
                  >
                    <Mail className="w-4 h-4 animate-pulse" />
                  </div>
                  <a href="mailto:rizkytriwahyudiii@gmail.com" className={`transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-amber-400' : 'text-slate-700 hover:text-amber-600'}`}>
                    rizkytriwahyudiii@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-8 md:p-10 rounded-2xl border backdrop-blur-md shadow-2xl transition-all duration-500
            ${theme === 'dark' ? 'bg-[#0b0f19]/60 border-slate-900 shadow-black/40' : 'bg-white border-slate-200 shadow-slate-200'}`}
          >
            <h3 className={`text-sm font-mono font-bold uppercase mb-6 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Terminal // Send_Message
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">Your Name</label>
                <input required name="name" type="text" placeholder="John Doe" className={`w-full border rounded-lg px-4 py-3 text-sm transition-all font-mono focus:outline-none focus:border-amber-500/40
                  ${theme === 'dark' ? 'bg-slate-950 border-slate-900 text-slate-100 placeholder:text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400'}`} 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">Email Address</label>
                <input required name="email" type="email" placeholder="john@example.com" className={`w-full border rounded-lg px-4 py-3 text-sm transition-all font-mono focus:outline-none focus:border-amber-500/40
                  ${theme === 'dark' ? 'bg-slate-950 border-slate-900 text-slate-100 placeholder:text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400'}`} 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">Message</label>
                <textarea required name="message" rows={4} placeholder="Jelaskan pengerjaan proyek atau penawaran kerja..." className={`w-full border rounded-lg px-4 py-3 text-sm transition-all resize-none font-mono focus:outline-none focus:border-amber-500/40
                  ${theme === 'dark' ? 'bg-slate-950 border-slate-900 text-slate-100 placeholder:text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400'}`}
                ></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-950 disabled:text-slate-600 disabled:cursor-not-allowed text-slate-950 font-mono font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-lg shadow-amber-500/5 cursor-pointer active:scale-[0.99]">
                {isSubmitting ? 'Executing_Submit...' : 'Execute_Send_Message'}
              </button>
            </form>
          </div>
        </div>

        {/* --- GLOBAL FOOTER --- */}
        <div className={`max-w-6xl mx-auto mt-24 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-mono
          ${theme === 'dark' ? 'border-slate-900' : 'border-slate-200'}`}
        >
          <div>© 2026 Rizky Tri Wahyudi. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Next.js Engine</span><span>•</span><span>Tailwind CSS</span><span>•</span><span>Vercel Node</span>
          </div>
        </div>
      </section>

    </div>
  );
}