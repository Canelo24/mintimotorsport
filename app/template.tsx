/**
 * Route transition: a murram sweep + content fade on each navigation,
 * under 400ms, disabled by prefers-reduced-motion (see globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="route-enter">{children}</div>;
}
