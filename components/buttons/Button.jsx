import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const VARIANTS = ['primary', 'cta', 'accent', 'ghost', 'ghost-light', 'text'];

/**
 * Core action button. One primary per view -- use "cta" for the single most
 * consequential action on a screen and "primary" everywhere else.
 */
export function Button({ variant = 'primary', size, loading, disabled, icon, iconPosition = 'trailing', className = '', children, ...rest }) {
  const cls = ['btn', `btn-${variant}`, size === 'lg' ? 'btn-lg' : '', loading ? 'is-loading' : '', className].filter(Boolean).join(' ');
  return (
    <button className={cls} disabled={disabled || loading} {...rest}>
      {icon && iconPosition === 'leading' && <Icon name={icon} size={18} />}
      {children}
      {icon && iconPosition === 'trailing' && <Icon name={icon} size={18} />}
    </button>
  );
}

/** Square icon-only button. Same heights as Button so toolbars align without hacks. */
export function IconButton({ icon, size, variant, label, className = '', ...rest }) {
  const cls = ['btn-icon', variant ? `btn-icon-${variant}` : '', size === 'lg' ? 'btn-icon-lg' : '', className].filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} {...rest}>
      <Icon name={icon} size={size === 'lg' ? 20 : 18} />
    </button>
  );
}

/**
 * Two-option outlined toggle (bordered navy pill of buttons). For 3+ options
 * on a light surface, use SegmentedControl instead.
 */
export function ButtonGroup({ options, value, onChange, className = '' }) {
  return (
    <div className={`dual ${className}`}>
      {options.map((opt) => (
        <button key={opt.value} aria-pressed={opt.value === value} onClick={() => onChange && onChange(opt.value)}>
          {opt.label}
        </button>
      ))}
    </div>
  );
}

/** Filled-surface segmented control used for time-range and view switches on dashboard pages. */
export function SegmentedControl({ options, value, onChange, className = '' }) {
  return (
    <div className={`seg ${className}`}>
      {options.map((opt) => (
        <button key={opt.value} aria-pressed={opt.value === value} onClick={() => onChange && onChange(opt.value)}>
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export const BUTTON_VARIANTS = VARIANTS;
