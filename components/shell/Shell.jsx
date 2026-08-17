import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Avatar } from '../avatars/Avatar.jsx';

/** Left navigation rail: brand block, grouped nav items with optional sub-nav, user card. */
export function Sidebar({ groups, user, onCollapse }) {
  return (
    <div className="shell-side">
      <div>
        <div className="side-brand">
          <img className="logo" src="../../assets/logo/navispay-mark.svg" alt="" style={{ background: 'none', objectFit: 'contain' }} />
          <span className="nm">NavisPay</span>
          <button className="collapse" aria-label="Collapse sidebar" onClick={onCollapse}><Icon name="chevron-left" size={18} /></button>
        </div>
        {groups.map((g) => (
          <div className="side-group" key={g.label}>
            <div className="side-label">{g.label}</div>
            {g.items.map((it) => (
              <React.Fragment key={it.label}>
                <div className={`nav-item ${it.active ? 'is-active' : ''}`} onClick={it.onClick}>
                  <Icon name={it.icon} size={18} />{it.label}
                  {it.count != null && <span className="count">{it.count}</span>}
                </div>
                {it.sub && (
                  <div className="nav-sub">
                    {it.sub.map((s) => <a key={s.label} className={s.active ? 'is-active' : ''} href={s.href || '#'}>{s.label}</a>)}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      {user && (
        <div className="side-user">
          <Avatar size={32} initials={user.initials} />
          <span className="who"><b>{user.name}</b><span>{user.email}</span></span>
          <button aria-label="Sign out"><Icon name="arrow-right" size={18} /></button>
        </div>
      )}
    </div>
  );
}

/** Top header: breadcrumb left, search + notification bell right. */
export function Header({ crumbs, onSearch, notifications }) {
  return (
    <div className="hdr">
      <div className="crumbs">
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="sep"><Icon name="chevron-right" size={16} /></span>}
            {i < crumbs.length - 1 ? <a href={c.href || '#'}>{c.label}</a> : <span className="cur">{c.label}</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="hdr-right">
        <div className="searchbar"><Icon name="search" size={18} /><input type="search" placeholder="Search payments, beneficiaries, references" onChange={onSearch} /></div>
        {notifications != null && (
          <span className="badge-anchor"><Icon name="bell" size={24} /><span className="badge-count">{notifications}</span></span>
        )}
      </div>
    </div>
  );
}

/** Metric card with a label, big tabular figure, delta and a mini sparkline. */
export function StatCard({ icon, label, value, delta, deltaDown, points }) {
  const path = points && points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`).join('');
  const area = points && path + `L${points[points.length - 1].x} 34L${points[0].x} 34Z`;
  return (
    <div className="stat">
      <div className="k">{icon && <Icon name={icon} size={18} />}{label}</div>
      <div className="v">{value}</div>
      {delta && <span className={`target ${deltaDown ? 'is-down' : ''}`}><b>{delta}</b></span>}
      {points && (
        <svg className={`spark ${deltaDown ? 'is-down' : ''}`} viewBox="0 0 120 34" preserveAspectRatio="none" aria-hidden="true">
          <path className="area" d={area} />
          <path d={path} />
        </svg>
      )}
    </div>
  );
}

/** Bordered content panel used for tables and lists inside the shell body. */
export function PlatformCard({ title, tools, footer, children }) {
  return (
    <div className="card-plat">
      <h5>{title}{tools && <span className="tools">{tools}</span>}</h5>
      {children}
      {footer && <div className="card-foot">{footer}</div>}
    </div>
  );
}

/** "Needs attention" style compact row list -- name, amount, reason, age. */
export function QueueList({ rows, onRowClick }) {
  return (
    <div className="queue">
      {rows.map((r, i) => (
        <div className="queue-row" key={i} onClick={() => onRowClick && onRowClick(r)}>
          <b>{r.name}</b><span className="amt">{r.amount}</span>
          <span className="meta">{r.reason}</span><span className="age">{r.age}</span>
        </div>
      ))}
    </div>
  );
}

/** Full page scaffold: sidebar + header + canvas body. Pass dark to render the navy variant -- same markup, re-pointed tokens. */
export function AppShell({ dark, sidebar, header, children }) {
  return (
    <div className={`shell ${dark ? 'shell-dark' : ''}`}>
      <div className="shell-cols">
        {sidebar}
        <div className="shell-main">
          {header}
          <div className="shell-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
