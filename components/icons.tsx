type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ArrowRight = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.2l2.4 2.4 4.6-4.9" />
  </svg>
);

export const Alert = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M10.3 4.3L2.9 17a2 2 0 001.7 3h14.8a2 2 0 001.7-3L13.7 4.3a2 2 0 00-3.4 0z" />
    <path d="M12 9.5v4M12 17h.01" />
  </svg>
);

export const Chevron = ({ size = 14 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const Train = ({ size = 16 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="5" y="3" width="14" height="13" rx="3" />
    <path d="M5 10h14M8.5 20l-2 2M15.5 20l2 2M8 19h8" />
    <path d="M9 13h.01M15 13h.01" />
  </svg>
);

export const Route = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <path d="M8.5 18h5a3.5 3.5 0 000-7h-3a3.5 3.5 0 010-7h1" />
  </svg>
);

export const Clock = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 1.7" />
  </svg>
);

export const Ticket = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 8a2 2 0 012-2h12a2 2 0 012 2v1.5a2.5 2.5 0 000 5V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-1.5a2.5 2.5 0 000-5z" />
    <path d="M13 6v2M13 11v2M13 16v2" />
  </svg>
);

export const Compass = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
  </svg>
);

export const Shield = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 3l7 3v5.5c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6z" />
    <path d="M9.5 12l1.8 1.8 3.4-3.6" />
  </svg>
);

export const Calendar = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8.5 3v4M15.5 3v4" />
  </svg>
);

export const Book = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 5.5A2.5 2.5 0 016.5 3H19v15H6.5A2.5 2.5 0 004 20.5z" />
    <path d="M4 17.5h15" />
  </svg>
);

export const Menu = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 7h16M4 12h11M4 17h16" />
  </svg>
);

export const Dots = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 6h.01M12 12h.01M12 18h.01" strokeWidth={2.4} />
  </svg>
);

export const Apple = ({ size = 26 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.7 0 0-2.5-1-2.5-3.7zM14.2 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.7-1.3z" />
  </svg>
);

export const Android = ({ size = 26 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.1 9.3H6.9a.5.5 0 00-.5.5v7.4c0 .7.6 1.3 1.3 1.3h.6v2.3a1.3 1.3 0 002.6 0v-2.3h2.2v2.3a1.3 1.3 0 002.6 0v-2.3h.6c.7 0 1.3-.6 1.3-1.3V9.8a.5.5 0 00-.5-.5zM4.3 9.2a1.3 1.3 0 00-1.3 1.3v4.8a1.3 1.3 0 002.6 0v-4.8a1.3 1.3 0 00-1.3-1.3zM19.7 9.2a1.3 1.3 0 00-1.3 1.3v4.8a1.3 1.3 0 002.6 0v-4.8a1.3 1.3 0 00-1.3-1.3zM15.2 4.2l.9-1.6a.27.27 0 10-.47-.27l-.92 1.66a6.2 6.2 0 00-5.46 0L8.33 2.3a.27.27 0 10-.47.27l.9 1.6A5.3 5.3 0 006.4 8.3h11.2a5.3 5.3 0 00-2.4-4.1zM9.6 6.7a.6.6 0 110-1.2.6.6 0 010 1.2zm4.8 0a.6.6 0 110-1.2.6.6 0 010 1.2z" />
  </svg>
);
