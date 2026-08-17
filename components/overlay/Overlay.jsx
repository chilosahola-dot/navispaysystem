import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Floating action list. Pair with a Dropdown or a trigger button. */
export function Menu({ label, items }) {
  return (
    <div className="menu">
      {label && <div className="menu-label">{label}</div>}
      {items.map((it, i) => it.separator
        ? <div className="menu-sep" key={i} />
        : (
          <div
            key={i}
            className={['menu-item', it.selected ? 'is-selected' : '', it.danger ? 'is-danger' : '', it.disabled ? 'is-disabled' : ''].filter(Boolean).join(' ')}
            onClick={() => !it.disabled && it.onClick && it.onClick()}
          >
            {it.icon && <Icon name={it.icon} size={18} />}{it.label}
          </div>
        ))}
    </div>
  );
}

/** Floating content surface for anything worth reading at length. Unlike a tooltip, it can hold links and buttons. */
export function Popover({ title, onClose, children, className = '' }) {
  return (
    <div className={`pop pop-rich ${className}`}>
      {title && (
        <div className="pop-head">
          <b style={{ fontSize: 15 }}>{title}</b>
          {onClose && <button className="btn-icon btn-icon-quiet" style={{ width: 28, height: 28 }} aria-label="Close" onClick={onClose}><Icon name="x" size={16} /></button>}
        </div>
      )}
      {children}
    </div>
  );
}

/** One short clarifying line on hover/focus. Never interactive content -- use Popover for that. */
export function Tooltip({ position = 'down', children, label }) {
  return (
    <span className={`tt tt-${position}`} tabIndex={0}>
      {children}
      <span className="pop">{label}</span>
    </span>
  );
}
