import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** A filter control: label + dropdown surface. Sits at the same 40px height as a default button. */
export function Filter({ label, orientation = 'inline', children }) {
  return (
    <div className={`filter ${orientation === 'top' ? 'top' : ''}`}>
      <span className="filter-label">{label}</span>
      {children}
    </div>
  );
}

/**
 * Dropdown trigger. Pair with a Menu (see overlay) positioned flush beneath it
 * for the open state -- no gap, no radius, shared bottom/top border.
 */
export function Dropdown({ value, open, disabled, onClick, placeholder = 'Select' }) {
  return (
    <button className={`dd ${open ? 'is-open' : ''} ${disabled ? 'is-disabled' : ''}`} disabled={disabled} onClick={onClick}>
      {value || placeholder}
      <Icon name="chevron-down" size={18} />
    </button>
  );
}
