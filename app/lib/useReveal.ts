'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Returns a ref to attach to an element and a boolean for whether it's visible.
 * No external animation library needed — pairs with Tailwind transition classes.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/** Typing/cycling text effect across a list of words. */
export function useTypingEffect(words: string[], typeSpeed = 65, pauseMs = 1800, deleteSpeed = 30) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length && !reverse) {
      const t = setTimeout(() => setReverse(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && reverse) {
      const t = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deleteSpeed : typeSpeed);
    return () => clearTimeout(t);
  }, [subIndex, index, reverse, words, typeSpeed, pauseMs, deleteSpeed]);

  return words[index].substring(0, subIndex);
}
