import React from 'react';

const PATHS = {
  "search": `<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path>`,
  "check": `<path d="M5 12l5 5L19 7"></path>`,
  "minus": `<path d="M5 12h14"></path>`,
  "chevron-down": `<path d="M6 9l6 6 6-6"></path>`,
  "chevron-right": `<path d="M9 6l6 6-6 6"></path>`,
  "chevron-left": `<path d="M15 6l-6 6 6 6"></path>`,
  "x": `<path d="M6 6l12 12M18 6L6 18"></path>`,
  "plus": `<path d="M12 5v14M5 12h14"></path>`,
  "info": `<circle cx="12" cy="12" r="9"></circle><path d="M12 11v5M12 8h.01"></path>`,
  "alert": `<path d="M12 4l9 16H3z"></path><path d="M12 10v4M12 17h.01"></path>`,
  "arrow-right": `<path d="M4 12h15M13 6l6 6-6 6"></path>`,
  "arrow-up-right": `<path d="M7 17L17 7M8 7h9v9"></path>`,
  "calendar": `<rect x="3" y="5" width="18" height="16"></rect><path d="M3 10h18M8 3v4M16 3v4"></path>`,
  "filter": `<path d="M3 5h18l-7 8v6l-4 2v-8z"></path>`,
  "download": `<path d="M12 4v11M7 11l5 5 5-5M4 20h16"></path>`,
  "refresh": `<path d="M4 12a8 8 0 0 1 13.7-5.6L20 9M20 4v5h-5"></path><path d="M20 12a8 8 0 0 1-13.7 5.6L4 15M4 20v-5h5"></path>`,
  "ledger": `<rect x="4" y="3" width="16" height="18"></rect><path d="M8 8h8M8 12h8M8 16h5"></path>`,
  "globe": `<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18-3-3.5-3-14.5 0-18z"></path>`,
  "wallet": `<rect x="3" y="6" width="18" height="13"></rect><path d="M3 10h18M16 14h2"></path>`,
  "user": `<circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"></path>`,
  "settings": `<circle cx="12" cy="12" r="3"></circle><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"></path>`,
  "bell": `<path d="M18 16V11a6 6 0 1 0-12 0v5l-2 3h16z"></path><path d="M10 20a2 2 0 0 0 4 0"></path>`,
  "dots": `<circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle>`,
  "sort": `<path d="M8 5v14M5 16l3 3 3-3M16 19V5M13 8l3-3 3 3"></path>`,
  "lock": `<rect x="5" y="11" width="14" height="9"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path>`,
  "mail": `<rect x="3" y="5" width="18" height="14"></rect><path d="M3 7l9 6 9-6"></path>`,
  "trash": `<path d="M4 7h16M9 7V5h6v2M6 7l1 14h10l1-14"></path>`
};

export const ICON_NAMES = Object.keys(PATHS);

/**
 * Outline icon from NavisPay's 24x24 stroke set. Inherits color via
 * currentColor -- never hardcode a stroke color on an <Icon>.
 */
export function Icon({ name, size = 20, className = '', style, ...rest }) {
  const markup = PATHS[name];
  if (!markup) return null;
  return (
    <svg
      className={`i ${className}`}
      viewBox="0 0 24 24"
      style={{ width: size, height: size, ...style }}
      dangerouslySetInnerHTML={{ __html: markup }}
      {...rest}
    />
  );
}
