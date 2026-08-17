import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Task modal on a navy scrim. Heading, explanation, optional content, two-button footer right-aligned. */
export function Modal({ title, onClose, actions, children }) {
  return (
    <div className="scrim">
      <div className="modal">
        <div className="modal-close"><button aria-label="Close" onClick={onClose}><Icon name="x" /></button></div>
        <div className="modal-body">
          <h3 className="modal-title">{title}</h3>
          {children}
          {actions && <div className="modal-actions">{actions}</div>}
        </div>
      </div>
    </div>
  );
}

/** A decision the user cannot defer. Narrower than Modal, no close X, must be answered. */
export function AlertDialog({ title, description, actions }) {
  return (
    <div className="scrim">
      <div className="dialog">
        <div className="dialog-inner"><h4>{title}</h4><p>{description}</p></div>
        <div className="dialog-actions">{actions}</div>
      </div>
    </div>
  );
}

const TOAST_ICON = { error: 'alert', warning: 'alert', info: 'info', success: 'check' };

/** Transient bottom-left notification. Dismisses itself after 8 seconds in production. */
export function Toast({ tone, children, onDismiss }) {
  return (
    <div className={`toast ${tone ? `toast-${tone}` : ''}`}>
      <span className="tick"><Icon name={TOAST_ICON[tone] || 'check'} /></span>
      <p>{children}</p>
      <button className="close" aria-label="Dismiss" onClick={onDismiss}><Icon name="x" size={18} /></button>
    </div>
  );
}

/** Persistent, in-flow alert. Leads with a bold sentence on what happened, then one sentence on what to do. */
export function Alert({ tone = 'info', title, children }) {
  const icon = tone === 'success' ? 'check' : tone === 'info' ? 'info' : 'alert';
  return (
    <div className={`alert alert-${tone}`}>
      <Icon name={icon} size={18} />
      <p>{title && <strong>{title}</strong>}{children}</p>
    </div>
  );
}
