export function Card({ children, className }) {
  return (
    <div className={`bg-zinc-800 p-4 rounded-xl ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
