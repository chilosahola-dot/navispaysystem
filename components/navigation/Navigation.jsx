import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** In-page tabs. Active marker is a 2px teal rule on the bottom edge. */
export function Tabs({ items, value, onChange }) {
  return (
    <div className="tabs">
      {items.map((it) => (
        <button key={it.value} aria-selected={it.value === value} disabled={it.disabled} onClick={() => onChange && onChange(it.value)}>
          {it.label}
        </button>
      ))}
    </div>
  );
}

/** Breadcrumb trail. Chevron separators, current page unlinked. */
export function Breadcrumbs({ items }) {
  return (
    <div className="crumbs">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep"><Icon name="chevron-right" size={16} /></span>}
          {it.href ? <a href={it.href}>{it.label}</a> : <span className="cur">{it.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

/** Numbered pager with mono, tabular page numbers so it doesn't reflow. */
export function Pagination({ page, pageCount, onChange, total, pageSize }) {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 || i === pageCount || Math.abs(i - page) <= 1) pages.push(i);
    else if (pages[pages.length - 1] !== '...') pages.push('...');
  }
  return (
    <div className="samples" style={{ justifyContent: 'space-between', display: 'flex' }}>
      {total != null && <span className="pager-meta">{(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)} of {total}</span>}
      <div className="pager">
        <button disabled={page <= 1} onClick={() => onChange(page - 1)}><Icon name="chevron-left" size={16} /></button>
        {pages.map((p, i) => p === '...'
          ? <span className="gap" key={`gap-${i}`}>…</span>
          : <button key={p} aria-current={p === page ? 'page' : undefined} onClick={() => onChange(p)}>{p}</button>)}
        <button disabled={page >= pageCount} onClick={() => onChange(page + 1)}><Icon name="chevron-right" size={16} /></button>
      </div>
    </div>
  );
}
