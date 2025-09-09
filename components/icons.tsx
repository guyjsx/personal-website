import * as React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function createIcon(paths: React.ReactNode, viewBox: string = '0 0 24 24') {
  return function Icon({ size = 20, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {paths}
      </svg>
    );
  };
}

export const IconCpu = createIcon(
  <>
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6" rx="1"/>
    <path d="M9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3"/>
  </>
);

export const IconLayers = createIcon(
  <>
    <path d="M12 3l9 5-9 5-9-5 9-5z"/>
    <path d="M3 12l9 5 9-5"/>
    <path d="M3 17l9 5 9-5"/>
  </>
);

export const IconSpark = createIcon(
  <>
    <path d="M12 2v5M12 17v5M4.2 4.2l3.5 3.5M16.3 16.3l3.5 3.5M2 12h5M17 12h5M4.2 19.8l3.5-3.5M16.3 7.7l3.5-3.5"/>
  </>
);

export const IconScale = createIcon(
  <>
    <path d="M12 3v18"/>
    <path d="M6 7h12"/>
    <path d="M18 7l4 7H14l4-7z"/>
    <path d="M6 7L2 14h8L6 7z"/>
    <path d="M6 21h12"/>
  </>
);

export const IconMail = createIcon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <path d="M3 8l9 6 9-6"/>
  </>
);

export const IconPhone = createIcon(
  <>
    <path d="M5 4h3l2 5-2 1a12 12 0 006 6l1-2 5 2v3a2 2 0 01-2 2A16 16 0 014 7a2 2 0 012-3z"/>
  </>
);

export const IconLink = createIcon(
  <>
    <path d="M10 13a5 5 0 007.07 0l1.06-1.06a5 5 0 000-7.07 5 5 0 00-7.07 0L10 6"/>
    <path d="M14 11a5 5 0 00-7.07 0L5.86 12.1a5 5 0 000 7.07 5 5 0 007.07 0L14 18"/>
  </>
);

export const IconPin = createIcon(
  <>
    <path d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"/>
    <circle cx="12" cy="11" r="2.5"/>
  </>
);

export const IconFile = createIcon(
  <>
    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/>
    <path d="M14 3v5h5"/>
  </>
);

export const IconDownload = createIcon(
  <>
    <path d="M12 3v10"/>
    <path d="M8 9l4 4 4-4"/>
    <path d="M5 21h14"/>
  </>
);
