export function BrandMark({ className = "h-9 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 64" aria-hidden="true" className={className} fill="none">
      <path d="M8 49h80M16 48V29m64 19V29M16 30c8 0 14-6 16-15 3 9 8 15 16 15s13-6 16-15c2 9 8 15 16 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 48V35m16 13V31m16 17V31m16 17V35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="25" r="3" fill="currentColor"/><circle cx="80" cy="25" r="3" fill="currentColor"/>
    </svg>
  );
}