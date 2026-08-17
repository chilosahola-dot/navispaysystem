import React from 'react';

/** Circular avatar -- photo, initials or icon. The only circular surface besides pills. */
export function Avatar({ size = 40, tone, src, initials, icon, alt = '' }) {
  const cls = ['av', `av-${size}`, tone ? `av-${tone}` : ''].filter(Boolean).join(' ');
  if (src) return <span className={cls}><img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></span>;
  return <span className={cls}>{icon || initials}</span>;
}

/** Overlapping stack showing up to 3 faces plus an overflow count. */
export function AvatarStack({ children }) {
  return <span className="av-stack">{children}</span>;
}
