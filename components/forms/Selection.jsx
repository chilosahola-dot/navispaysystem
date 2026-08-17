import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Square selection control. Accents in teal-dark, not navy -- navy stays reserved for actions. */
export function Checkbox({ checked, indeterminate, disabled, onChange, children }) {
  const state = indeterminate ? 'mixed' : String(!!checked);
  return (
    <span
      className={`chk ${disabled ? 'is-disabled' : ''}`}
      role="checkbox"
      aria-checked={state}
      tabIndex={disabled ? undefined : 0}
      onClick={() => !disabled && onChange && onChange(!checked)}
    >
      <span className="chk-box"><Icon name={indeterminate ? 'minus' : 'check'} size={12} /></span>
      {children}
    </span>
  );
}

/** Circular selection control for mutually exclusive options. */
export function Radio({ checked, disabled, onChange, children }) {
  return (
    <span
      className={`rad ${disabled ? 'is-disabled' : ''}`}
      role="radio"
      aria-checked={!!checked}
      tabIndex={disabled ? undefined : 0}
      onClick={() => !disabled && onChange && onChange()}
    >
      <span className="rad-dot" />
      {children}
    </span>
  );
}

/** Pill toggle that applies immediately. If the change needs confirming, use Checkbox instead. */
export function Switch({ checked, disabled, onChange, children }) {
  return (
    <span
      className={`sw-wrap ${disabled ? 'is-disabled' : ''}`}
      role="switch"
      aria-checked={!!checked}
      tabIndex={disabled ? undefined : 0}
      onClick={() => !disabled && onChange && onChange(!checked)}
    >
      <span className="sw-track" />
      {children}
    </span>
  );
}
