import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const STATUSES = ['settled', 'in-flight', 'scheduled', 'review', 'failed', 'draft'];

/** Read-only status report. Six statuses total -- a seventh is almost always a sub-state of one of these. */
export function Pill({ status, solid, prose, children }) {
  const cls = ['pill', `pill-${status}`, solid ? 'pill-solid' : '', prose ? 'pill-14' : ''].filter(Boolean).join(' ');
  return <span className={cls}>{children}</span>;
}

/** Interactive filter/selection toggle. The only one of the three that's clickable. */
export function Chip({ selected, disabled, onClick, removable, children }) {
  return (
    <button className="chip" aria-pressed={!!selected} disabled={disabled} onClick={onClick}>
      {children}
      {removable && <Icon name="x" size={16} />}
    </button>
  );
}

/** Count or live-state marker attached to another element. The only one of the three that overlaps its anchor. */
export function Badge({ children }) {
  return <span className="badge"><span className="badge-dot" />{children}</span>;
}

/** Wrap an icon/element to attach a numeric count or a plain live-state dot. */
export function BadgeAnchor({ count, mark, children }) {
  return (
    <span className="badge-anchor">
      {children}
      {count != null && <span className="badge-count">{count > 99 ? '99+' : count}</span>}
      {mark && <span className="badge-mark" />}
    </span>
  );
}

export const PILL_STATUSES = STATUSES;
