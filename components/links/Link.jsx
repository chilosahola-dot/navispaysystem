import React from 'react';

/**
 * Text link with a bottom-rule underline (not text-decoration), so the rule
 * clears descenders and can change color independently of the ink.
 */
export function Link({ tone = 'accent', size = 14, disabled, className = '', children, ...rest }) {
  const cls = ['lnk', `lnk-${tone}`, size === 16 ? 'lnk-16' : 'lnk-14', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  if (disabled) return <span className={cls}>{children}</span>;
  return <a className={cls} {...rest}>{children}</a>;
}
