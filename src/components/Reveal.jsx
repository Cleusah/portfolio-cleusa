import { useReveal } from "../hooks/useReveal";

export default function Reveal({ children, as: Tag = "div", className = "", style }) {
  const { ref, className: revealClass } = useReveal();
  return (
    <Tag ref={ref} className={`${revealClass} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
