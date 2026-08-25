export const Crest = ({ size = 32, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M24 5 L29 13 L24 21 L19 13 Z" />
    <path d="M24 11 L26.2 13 L24 16.4 L21.8 13 Z" fill="currentColor" stroke="none" />
    <path d="M9 30 Q24 17 39 30" />
    <path d="M13 36 Q24 26 35 36" />
    <circle cx="7" cy="30" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="41" cy="30" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="11" cy="36" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="37" cy="36" r="1.2" fill="currentColor" stroke="none" />
    <path d="M18 42 L24 39 L30 42" />
  </svg>
);
