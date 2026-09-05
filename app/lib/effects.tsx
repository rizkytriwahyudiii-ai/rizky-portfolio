'use client';
import { useEffect, useRef, useState } from 'react';
import { Check, Copy, ArrowUp } from 'lucide-react';

/** Radial spotlight that follows the cursor (desktop only, ignored on touch). */
export function CursorSpotlight({ color = '245,158,11' }: { color?: string }) {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setActive(true);
    };
    const leave = () => setActive(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 hidden md:block transition-opacity duration-300"
      style={{
        opacity: active ? 1 : 0,
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(${color},0.06), transparent 40%)`,
      }}
    />
  );
}

/** Thin progress bar across the top that fills as the user scrolls the page. */
export function ScrollProgressBar({ colorClass = 'bg-amber-500' }: { colorClass?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-slate-900 z-[60]">
      <div className={`h-full ${colorClass} transition-[width] duration-150 ease-out`} style={{ width: `${progress}%` }} />
    </div>
  );
}

/** Dot navigation on the side of the screen showing scroll position across sections. */
export function SectionDotNav({
  sections,
  activeColorClass = 'bg-amber-400 border-amber-400',
}: {
  sections: { id: string; label: string }[];
  activeColorClass?: string;
}) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group relative flex items-center justify-end"
          aria-label={s.label}
        >
          <span className="absolute right-6 whitespace-nowrap text-[10px] font-mono uppercase tracking-wider text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950 border border-slate-800 px-2 py-1 rounded-md">
            {s.label}
          </span>
          <span
            className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
              active === s.id ? `${activeColorClass} scale-125` : 'bg-transparent border-slate-700 group-hover:border-slate-500'
            }`}
          />
        </a>
      ))}
    </div>
  );
}

/** Number that animates counting up from 0 once it scrolls into view. */
export function AnimatedCounter({ value, suffix = '', duration = 1200 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, started]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/** Infinite horizontal marquee for tech/skill tags. */
export function Marquee({ items, accentClass = 'border-amber-500/20 text-amber-300' }: { items: string[]; accentClass?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-3 w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`shrink-0 text-xs font-mono px-3.5 py-2 rounded-lg bg-slate-950 border ${accentClass}`}
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/** Card wrapper with a subtle 3D tilt that follows the mouse. */
export function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)');

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(800px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) scale3d(1.02,1.02,1.02)`);
  };

  const reset = () => setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      style={{ transform, transition: 'transform 200ms ease-out' }}
      className={className}
    >
      {children}
    </div>
  );
}

/** Email address with a click-to-copy button and inline feedback. */
export function CopyEmail({ email, accentClass = 'text-amber-400 hover:text-amber-300' }: { email: string; accentClass?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — no-op, user can still select the text manually.
    }
  };

  return (
    <button onClick={copy} className={`flex items-center gap-1.5 transition-colors ${accentClass}`} type="button">
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? 'Tersalin!' : email}
    </button>
  );
}

/** Floating button that appears after scrolling, jumps back to top. */
export function BackToTop({ accentClass = 'bg-amber-500 hover:bg-amber-400 text-black' }: { accentClass?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${accentClass} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Kembali ke atas"
      type="button"
    >
      <ArrowUp size={18} />
    </button>
  );
}

/** Word-by-word staggered fade/slide-in reveal for headings. */
export function StaggeredText({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block opacity-0 translate-y-3 animate-[fadeUp_0.6s_ease-out_forwards]"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {w}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
      <style>{`
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </span>
  );
}
