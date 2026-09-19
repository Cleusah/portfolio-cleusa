import { useEffect, useRef, useState } from "react";

// Aplica um fade-in + slide-up suave quando o elemento entra no ecrã.
// Uso: const { ref, className } = useReveal();  <div ref={ref} className={className}>
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, className: `reveal${visible ? " visible" : ""}` };
}
