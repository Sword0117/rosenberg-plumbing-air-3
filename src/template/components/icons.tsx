// Shared SVG icon map for the template site.
// All icons use Heroicons-style line icons: viewBox="0 0 24 24", fill="none",
// stroke="currentColor", strokeWidth={2}.
// Usage: import { getIcon } from "./icons";
//        <span aria-hidden="true">{getIcon("wrench")}</span>

import type { ReactElement } from "react";

const ICON_PROPS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

const ICONS: Record<string, ReactElement> = {
  wrench: (
    <svg {...ICON_PROPS}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),

  thermometer: (
    <svg {...ICON_PROPS}>
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  ),

  droplet: (
    <svg {...ICON_PROPS}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),

  pipe: (
    <svg {...ICON_PROPS}>
      <path d="M4 6h16M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4" />
      <path d="M4 18h4a2 2 0 0 0 2-2V8" />
      <path d="M10 8h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4" />
    </svg>
  ),

  shield: (
    <svg {...ICON_PROPS}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),

  tools: (
    <svg {...ICON_PROPS}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),

  // Contact icons
  phone: (
    <svg {...ICON_PROPS}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l1.16-1.16a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),

  envelope: (
    <svg {...ICON_PROPS}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),

  "map-pin": (
    <svg {...ICON_PROPS}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),

  clock: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),

  // Reputation / value icons
  badge: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),

  star: (
    <svg {...ICON_PROPS}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),

  home: (
    <svg {...ICON_PROPS}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),

  // Alert / emergency icon
  alert: (
    <svg {...ICON_PROPS}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),

  // Search / inspection icon
  search: (
    <svg {...ICON_PROPS}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),

  // Construction / remodel icon
  hammer: (
    <svg {...ICON_PROPS}>
      <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
      <path d="M17.64 15 22 10.64" />
      <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
    </svg>
  ),

  // Checkmark / success icon
  check: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),

  // Hamburger menu icon
  menu: (
    <svg {...ICON_PROPS}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),

  // Close / X icon
  close: (
    <svg {...ICON_PROPS}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),

  // Arrow right
  "arrow-right": (
    <svg {...ICON_PROPS}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),

  // Chevron right
  "chevron-right": (
    <svg {...ICON_PROPS}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),

  // Calendar / scheduling icon
  calendar: (
    <svg {...ICON_PROPS}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),

  // Credit card / payment icon
  "credit-card": (
    <svg {...ICON_PROPS}>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
};

// Generic fallback tool icon
const FALLBACK_ICON: ReactElement = (
  <svg {...ICON_PROPS}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
  </svg>
);

/**
 * Returns an inline SVG element for the given icon name.
 * Falls back to a generic icon when the name is not recognised.
 */
export function getIcon(name: string): ReactElement {
  return ICONS[name] ?? FALLBACK_ICON;
}

/** Five filled star SVGs for testimonial ratings. */
export function StarRating({ count = 5 }: { count?: number }): ReactElement {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          aria-hidden={true}
          style={{ display: "inline-block" }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </>
  );
}
