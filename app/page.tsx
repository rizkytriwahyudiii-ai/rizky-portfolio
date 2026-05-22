'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Cpu, Zap, Mail, Code, ArrowUpRight, Gauge, 
  ChevronDown, Sun, Moon, Boxes, Wrench, Workflow,
  CheckCircle2, Star, ShieldCheck, Terminal, Layers, Sparkles,
  ShoppingBag, Sliders, Eye
} from 'lucide-react';

// Istilah global industri IT untuk platform freelance
const words = ["Full-Stack & Automation Architect", "IoT Systems Integrator", "Premium E-Commerce Developer"];

const skills = [
  { name: "Next.js / React / TypeScript / Vercel Cloud Deployment", level: "85%" },
  { name: "E-Commerce Architecture & Premium UI/UX Design (Fragrance Store)", level: "93%" },
  { name: "WordPress & High-Performance Kadence WP Customization", level: "90%" },
  { name: "IoT Integration (MQTT Broker, ESP32, Real-time Data Dashboard)", level: "85%" },
  { name: "PLC Programming (Mitsubishi Basic Ladder Logic, Omron, Delta)", level: "88%" },
  { name: "Electrical Troubleshooting & 3-Phase Panel Wiring", level: "95%" },
  { name: "Inverter Tuning & Configuration (ABB, INVT, Delta, Schneider)", level: "92%" },
  { name: "Sensor Calibration (PT100, Thermocouple, Proximity, Laser Marking)", level: "90%" },
];

const faqs = [
  {
    q: "What architectural approach do you use for high-end e-commerce development?",
    a: "I implement a performance-first architecture. For enterprise-grade flexibility and speed, I utilize headless Next.js or extensively optimized WordPress frameworks deployment tailored to core web vitals, ensuring sub-second load times, fluid animations, and high SEO conversion architecture for luxury market niches."
  },
  {
    q: "How does your dual background in Informatics Engineering and Automation benefit my project?",
    a: "This is a rare cross-disciplinary synergy. Having an academic background in Informatics Engineering combined with extensive industrial automation experience allows me to build robust end-to-end ecosystems—seamlessly bridging physical hardware components and industrial machine data into secure, low-latency web cloud monitoring interfaces."
  },
  {
    q: "Can you pipeline real-time machine telemetry data directly into custom web dashboards?",
    a: "Absolutely. I specialize in designing full-stack IoT telemetry infrastructure. I configure microcontrollers, establish secure communication channels via MQTT brokers or WebSockets, and build front-end web interfaces to visualize live sensory data from production lines with zero-latency overhead."
  }
];

function TypingEffect({ theme }: { theme: 'dark' | 'light' }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
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
    }, reverse ? 30 : 70);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // FIX: Ditambahkan suppressHydrationWarning dan translate="no" agar browser translation tidak merusak DOM Node saat diketik otomatis
  return (
    <span 
      className={theme === 'dark' ? 'text-white' : 'text-slate-900'} 
      suppressHydrationWarning 
      translate="no"
    >
      {words[index].substring(0, subIndex)}
      <span className={`animate-pulse ${theme === 'dark' ? 'text-amber-500' : 'text-blue-600'}`}>_</span>
    </span>
  );
}

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "3ab2072b-5f3e-4268-b3f5-9cfa8644a607");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        alert("System: Project specifications transmitted successfully.");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("System Error: Data transmission protocol failed.");
      }
    } catch (error) {
      alert("System Error: Network connection disrupted.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen font-sans antialiased scroll-smooth transition-all duration-700 selection:bg-amber-500 selection:text-slate-950
      ${theme === 'dark' ? 'bg-[#030712] text-slate-200' : 'bg-[#f8fafc] text-slate-800'}`}
    >
      
      {/* EFFECT: TECH GRID PATTERN BACKGROUND */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none z-0 opacity-[0.03]"></div>

      {/* MODERN NAVBAR */}
      <nav className={`fixed top-0 z-[100] w-full border-b backdrop-blur-xl transition-all duration-500 ${theme === 'dark' ? 'bg-[#030712]/70 border-slate-800/40 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-white/70 border-slate-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`h-6 w-1 rounded-full transition-all duration-500 group-hover:h-8 ${theme === 'dark' ? 'bg-amber-500' : 'bg-blue-600'}`}></div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] opacity-40">SYSTEM INTEGRATION</span>
              <p className="font-bold text-xs tracking-tight"><TypingEffect theme={theme} /></p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {['Services', 'About', 'Skills', 'Standards', 'Experience', 'Reviews', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`relative py-2 transition-all hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:transition-all hover:after:w-full ${theme === 'dark' ? 'after:bg-amber-400' : 'after:bg-blue-600 hover:text-slate-900'}`}>{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-105 active:scale-95 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-blue-600" />}
            </button>
            <a href="#contact" className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-amber-500 text-black hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]' : 'bg-blue-600 text-white hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]'}`}>Hire Consultant</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className={`absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[180px] opacity-25 pointer-events-none ${theme === 'dark' ? 'bg-amber-500/80' : 'bg-blue-400/50'}`}></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-[10px] font-mono font-bold uppercase tracking-widest ${theme === 'dark' ? 'bg-slate-900/80 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-blue-600'}`}>
              <Sparkles size={12} className="animate-spin text-amber-400" />
              Bridging Premium Web Software & Industrial Edge Automation
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
              Transforming Machine <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'from-amber-400 via-orange-400 to-amber-600' : 'from-blue-600 via-indigo-600 to-blue-800'}`}>Data into Digital Value.</span>
            </h1>
            
            <p className="max-w-xl text-slate-400 text-sm md:text-base font-light leading-relaxed">
              I specialize in developing high-performance Next.js and premium WordPress e-commerce frameworks for luxury retail brands, while engineered to seamlessly pipeline industrial machine hardware data into interactive web cloud telemetry dashboards.
            </p>
            <div className="flex pt-2">
              <a href="#services" className={`px-6 py-4 rounded-xl flex items-center gap-3 font-bold text-xs uppercase tracking-widest border transition-all duration-300 hover:-translate-y-1 ${theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:border-amber-500/50 text-white hover:shadow-[0_5px_20px_rgba(0,0,0,0.6)]' : 'bg-white border-slate-200 shadow-sm hover:border-blue-600'}`}>
                <span>Explore Technical Solutions</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center relative">
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-15 transition-colors ${theme === 'dark' ? 'bg-amber-400' : 'bg-blue-500'}`}></div>
            <div className={`relative z-10 w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] p-1 bg-gradient-to-tr transition-all duration-700 hover:rotate-3 hover:scale-[1.02] ${theme === 'dark' ? 'from-amber-500/40 via-slate-900 to-slate-900' : 'from-blue-500/30 via-slate-100 to-slate-200'}`}>
              <div className={`w-full h-full rounded-[2.3rem] overflow-hidden relative ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
                {/* FIX: Ditambahkan properti sizes demi menyelesaikan warning performa browser */}
                <Image 
                  src="/profile.png" 
                  alt="Rizky Tri Wahyudi Portfolio" 
                  fill 
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. LAYANAN EKSPERTIS (SERVICES SECTION) */}
      <section id="services" className={`py-32 px-6 border-t transition-all ${theme === 'dark' ? 'border-slate-900 bg-slate-950/20' : 'border-slate-100 bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className={`font-mono text-xs font-bold tracking-[0.4em] uppercase ${theme === 'dark' ? 'text-amber-500' : 'text-blue-600'}`}>SERVICE CAPABILITIES</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Full-Stack Development & Integration Solutions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShoppingBag size={24} />, title: "Premium Luxury E-Commerce", desc: "Developing elite, bespoke storefronts tailored for luxury retail pipelines such as fragrance brands. Focused on rich animation micro-interactions, highly fluid UX, advanced search filter mapping, and top-tier core web vitals speed optimization." },
              { icon: <Cpu size={24} />, title: "IoT Cloud Telemetry Dashboards", desc: "Architecting end-to-end integration mapping from microcontrollers (ESP32) and industrial field sensors up to web databases. Transmitting real-time parameters via secure MQTT brokers into interactive, responsive frontend panels." },
              { icon: <Wrench size={24} />, title: "Industrial Logic & System Integration", desc: "Engineering deterministic automation logic setups, including PLC ladder programming, 3-phase structural electrical wiring optimization, industrial data calibration protocols, and proactive mission-critical fault prevention." }
            ].map((s, i) => (
              <div key={i} className={`group p-10 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${theme === 'dark' ? 'bg-slate-900/40 border-slate-800/80 hover:border-amber-500/30 hover:shadow-black/60' : 'bg-white border-slate-200 shadow-sm hover:border-blue-600/20 shadow-slate-200'}`}>
                <div className={`mb-8 h-12 w-12 rounded-xl flex items-center justify-center border transition-transform duration-500 group-hover:rotate-6 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-amber-400 group-hover:border-amber-500/40' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>{s.icon}</div>
                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-amber-400 transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TENTANG SAYA (ABOUT ME) */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className={`font-mono text-xs font-bold tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-amber-500' : 'text-blue-600'}`}>CROSS-DISCIPLINE EXPERTISE</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">The Synergy of High-End Code and High-Reliability Engineering</h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Holding a Bachelor's degree in Informatics Engineering combined with 5+ years of practical industrial manufacturing systems management, I approach high-end software pipelines and physical hardware infrastructure with the exact same standard: rigid system logic, faultless operational reliability, and zero tolerance for unexpected runtime crashes.
            </p>
          </div>
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            <div className={`p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${theme === 'dark' ? 'bg-slate-900/20 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-amber-500/10 text-amber-500 mb-6"><Workflow size={18}/></div>
              <h4 className="font-bold text-base mb-2">Hardware & Edge Tier</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">Expertise in predictive electrical maintenance, industrial sensor calibrations, precision inverter configuration profiles, and low-level PLC automation logic maps.</p>
            </div>
            <div className={`p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${theme === 'dark' ? 'bg-slate-900/20 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-500 mb-6"><Code size={18}/></div>
              <h4 className="font-bold text-base mb-2">Software & Cloud Tier</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">Architecting secure premium storefront layouts optimized for peak user conversion, alongside developing custom serverless real-time web telemetry interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MATRIKS KEAHLIAN (SKILLS SECTION) */}
      <section id="skills" className={`py-32 px-6 border-t transition-all ${theme === 'dark' ? 'border-slate-900 bg-slate-950/20' : 'border-slate-100 bg-slate-50/50'}`}>
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className={`font-mono text-xs font-bold tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-amber-500' : 'text-blue-600'}`}>CORE COMPETENCIES</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Technical Specifications & Proficiency Matrix</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
                  <span className={`font-bold ${theme === 'dark' ? 'text-amber-400' : 'text-blue-600'}`}>{skill.level}</span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-900 border border-slate-800/80' : 'bg-slate-200'}`}>
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110
                      ${theme === 'dark' ? 'bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`} 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRINSIP KERJA (WORKING SECTION) */}
      <section id="working" className="py-32 px-6 max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <span className={`font-mono text-xs font-bold tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-amber-500' : 'text-blue-600'}`}>STANDARDS OF EXCELLENCE</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Engineering Framework & Quality Assurance</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Mission-Critical Stability", desc: "Every line of code and machine automation process is rigorously planned to ensure maximum infrastructure operational uptime and error prevention.", icon: <ShieldCheck className="text-emerald-500" size={28} /> },
            { title: "Integrated Data Pipelines", desc: "Engineered to capture field-level industrial protocols and feed them dynamically into clean, cloud-hosted client interfaces with strict security architecture.", icon: <Layers className="text-amber-500" size={28} /> },
            { title: "Conversion-Focused UX", desc: "E-Commerce designs are optimized for visual engagement and interactive micro-animations, transforming traffic metrics directly into transactional outcomes.", icon: <Sliders className="text-blue-500" size={28} /> }
          ].map((item, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.03] ${theme === 'dark' ? 'bg-slate-900/30 border-slate-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.2)]' : 'bg-white border-slate-200 shadow-sm shadow-slate-100'}`}>
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-lg font-bold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 & 6. REKAM JEJAK (EXPERIENCE SECTION) */}
      <section id="experience" className={`py-32 px-6 border-t transition-all ${theme === 'dark' ? 'border-slate-900 bg-slate-950/20' : 'border-slate-100 bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className={`font-mono text-xs font-bold tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-amber-500' : 'text-blue-600'}`}>TRACK RECORD</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Professional Timeline & Milestones</h2>
          </div>
          <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:left-1/4 space-y-12">
            {[
              { role: "Full-Stack Developer & System Architect", company: "Freelance Technical Solutions Provider", period: "2025 - PRESENT", desc: "Designing and deploying specialized Next.js/WordPress storefront layouts for luxury retail. Actively developing custom telemetry layers, writing asynchronous broker-to-client logic scripts, and integrating responsive operational monitoring interfaces for web-connected IoT networks." },
              { role: "Electrical Systems Engineer", company: "PT Vinilon Jaya Sakti", period: "2020 - PRESENT", desc: "Supervising automated extrusion infrastructure (heater bands, digital thermocouples, speed regulators, and screw motors). Calibrating critical instrument panels, executing inverter profiles, managing comprehensive fault diagnostic procedures, and tracking systemic downtime reports." },
              { role: "Systems Maintenance Automation Specialist", company: "PT Kepuh Kencana Arum", period: "2018 - 2020", desc: "Managed heavy industrial line automation setups. Developed custom functional logic configurations on Mitsubishi PLC hardware platforms, mapped HMI Weintek control layouts, optimized hydraulic flow controllers, and engineered local automated control upgrades." }
            ].map((exp, i) => (
              <div key={i} className="relative pl-8 group">
                <div className={`absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border transition-all duration-300 group-hover:scale-125 ${theme === 'dark' ? 'bg-slate-950 border-amber-500' : 'bg-white border-blue-600'}`}></div>
                <div className="space-y-2">
                  <span className="font-mono text-[11px] text-slate-500 block">{exp.period}</span>
                  <h3 className="text-xl font-bold tracking-tight">{exp.role} <span className={theme === 'dark' ? 'text-amber-400' : 'text-blue-600'}>@{exp.company}</span></h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed max-w-2xl">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APRESIASI (TESTIMONIALS SECTION) */}
      <section id="testimonials" className="py-32 px-6 max-w-6xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <span className={`font-mono text-xs font-bold tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-amber-500' : 'text-blue-600'}`}>PARTNER REVIEWS</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Client Endorsements & Case Studies</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { quote: "The customized e-commerce platform delivered for our luxury fragrance line exceeded expectations. The user experience is highly interactive, the performance layout is exceptionally fast, and the elite visual styling has immensely elevated our market conversion metrics.", author: "Creative Director", company: "Luxury Fragrance Retail Group" },
            { quote: "An exceptionally rare engineering background. He single-handedly solved our hardware data pipelining bottleneck, building a low-latency IoT system interface that aggregates and renders operational machine metrics flawlessly.", author: "Production Operations Lead", company: "Industrial Manufacturing Sector" }
          ].map((t, i) => (
            <div key={i} className={`p-10 rounded-[2rem] border flex flex-col justify-between transition-all duration-300 hover:border-slate-700 ${theme === 'dark' ? 'bg-slate-900/20 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'}`}>
              <p className="text-slate-400 text-sm italic font-light leading-relaxed">"{t.quote}"</p>
              <div className="mt-8 pt-4 border-t border-slate-800/30 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{t.author}</h4>
                  <p className="text-[10px] text-slate-500 font-mono uppercase mt-0.5">{t.company}</p>
                </div>
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={12} fill="currentColor" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section id="faq" className={`py-32 px-6 border-t transition-all ${theme === 'dark' ? 'border-slate-900 bg-slate-950/20' : 'border-slate-100 bg-slate-50/50'}`}>
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className={`font-mono text-xs font-bold tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-amber-500' : 'text-blue-600'}`}>QUESTIONS & ANSWERS</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'bg-slate-900/30 border-slate-800/60' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-6 text-left flex justify-between items-center font-bold text-xs md:text-sm tracking-tight transition-colors hover:text-amber-400">
                  <span>{faq.q}</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-amber-400' : 'opacity-50'}`} />
                </button>
                <div className={`transition-all duration-500 cubic-bezier(0.4,0,0.2,1) overflow-hidden ${openFaq === idx ? 'max-h-40 border-t border-slate-800/30' : 'max-h-0'}`}>
                  <p className="p-6 text-xs md:text-sm text-slate-400 leading-relaxed font-light">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FORM KONTAK (CONTACT SECTION) */}
      <section id="contact" className="py-32 px-6">
        <div className={`max-w-4xl mx-auto rounded-[2.5rem] border p-1 transition-all duration-700 ${theme === 'dark' ? 'bg-slate-900/40 border-slate-800 shadow-3xl shadow-black' : 'bg-slate-100 border-slate-200 shadow-xl'}`}>
          <div className={`rounded-[2.2rem] grid lg:grid-cols-12 ${theme === 'dark' ? 'bg-[#050b18]' : 'bg-white'}`}>
            <div className="lg:col-span-5 p-10 md:p-12 space-y-6 flex flex-col justify-center">
              <span className={`font-mono text-xs font-bold tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-amber-500' : 'text-blue-600'}`}>GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-none">Initiate <br />Architecture <br />Consultation.</h2>
              <p className="text-slate-500 text-xs font-light leading-relaxed">Submit your data mapping and system integration criteria below. I am ready to deploy tailored e-commerce platforms, secure real-time IoT monitoring dashboards, or programmatic logic automation scripts.</p>
              <div className="flex flex-col gap-2 text-xs font-mono opacity-80 pt-4">
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-amber-500" />
                  {/* FIX: Alamat email permanen */}
                  <span className="text-[11px] font-bold">rizkytriwahyudiii@gmail.com</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className={`lg:col-span-7 p-10 md:p-12 space-y-5 rounded-[2.1rem] ${theme === 'dark' ? 'bg-slate-900/20' : 'bg-slate-50/60'}`}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                  <input required name="name" type="text" className={`w-full p-3.5 rounded-xl border text-xs focus:outline-none transition-all ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20' : 'bg-white border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20'}`} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                  <input required name="email" type="email" className={`w-full p-3.5 rounded-xl border text-xs focus:outline-none transition-all ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20' : 'bg-white border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20'}`} />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Project Parameters & Requirements</label>
                <textarea required name="message" rows={4} placeholder="Please provide technical criteria regarding your e-commerce conversion goals, sensor integrations, communication protocols, or specific automation scope..." className={`w-full p-3.5 rounded-xl border text-xs focus:outline-none resize-none transition-all ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20' : 'bg-white border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20'}`} />
              </div>
              <button type="submit" disabled={isSubmitting} className={`w-full p-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 ${theme === 'dark' ? 'bg-amber-500 text-black hover:bg-amber-400 active:scale-[0.98] hover:shadow-[0_5px_20px_rgba(245,158,11,0.2)]' : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]'}`}>
                {isSubmitting ? 'Transmitting Protocols...' : 'Transmit Project Specifications'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-12 px-6 border-t ${theme === 'dark' ? 'border-slate-900' : 'border-slate-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 font-mono text-[9px] uppercase tracking-widest">
          <p>© 2026 Rizky Tri Wahyudi. Systems Architecture Core Live.</p>
          <div className="flex gap-6">
            <span>Next.js 15+ Framework</span>
            <span>Tailwind v4 Engine</span>
          </div>
        </div>
      </footer>
    </div>
  );
}