import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Labeled text field. Fill + hairline border; focus swaps the border to teal-dark plus a ring. */
export function TextField({ label, help, error, icon, disabled, id, ...rest }) {
  const cls = ['ctl', error ? 'is-error' : '', disabled ? 'is-disabled' : ''].filter(Boolean).join(' ');
  return (
    <div className="field">
      {label && <label className="field-label" htmlFor={id}>{label}</label>}
      <div className={cls}>
        {icon && <Icon name={icon} size={18} />}
        <input id={id} disabled={disabled} {...rest} />
      </div>
      {help && <div className={`help ${error ? 'help-error' : ''}`}>{help}</div>}
    </div>
  );
}

/** Multi-line field. Same fill/border language as TextField, taller and resizable. */
export function TextareaField({ label, help, id, ...rest }) {
  return (
    <div className="field">
      {label && <label className="field-label" htmlFor={id}>{label}</label>}
      <div className="ctl ctl-area"><textarea id={id} {...rest} /></div>
      {help && <div className="help">{help}</div>}
    </div>
  );
}

/** Standalone search input -- pill-less rectangular fill, used in headers and toolbars. */
export function SearchField({ placeholder = 'Search', ...rest }) {
  return (
    <div className="searchbar">
      <Icon name="search" size={18} />
      <input type="search" placeholder={placeholder} {...rest} />
    </div>
  );
}

/** Range slider. Track is a hairline; thumb is navy, turns teal-dark on hover. */
export function Slider({ label, ...rest }) {
  return (
    <div>
      {label && <div className="field-label" style={{ marginBottom: 8 }}>{label}</div>}
      <input className="slider" type="range" {...rest} />
    </div>
  );
}
