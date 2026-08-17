import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/**
 * Value-date picker. Navy header carries the selection; weekends are never
 * dimmed -- settlement runs on corridor calendars, not the user's.
 */
export function DatePicker({ overline = 'Value date', selectedLabel, monthLabel, weekdays = ['M','T','W','T','F','S','S'], days, onPrevMonth, onNextMonth, onSelect, onCancel, onConfirm }) {
  return (
    <div className="cal">
      <div className="cal-head">
        <p className="cal-over">{overline}</p>
        <p className="cal-day">{selectedLabel}</p>
      </div>
      <div className="cal-month">
        <span className="m">{monthLabel}</span>
        <span className="cal-nav">
          <button aria-label="Previous month" onClick={onPrevMonth}><Icon name="chevron-left" size={18} /></button>
          <button aria-label="Next month" onClick={onNextMonth}><Icon name="chevron-right" size={18} /></button>
        </span>
      </div>
      <div className="cal-grid">
        {weekdays.map((w, i) => <span className="wd" key={i}>{w}</span>)}
        {days.map((d, i) => (
          <span
            key={i}
            className={['d', d.out ? 'is-out' : '', d.today ? 'is-today' : '', d.selected ? 'is-selected' : '', d.event ? 'has-event' : ''].filter(Boolean).join(' ')}
            onClick={() => onSelect && onSelect(d)}
          >
            {d.label}
          </span>
        ))}
      </div>
      <div className="cal-actions">
        <button className="btn btn-text" onClick={onCancel}>Cancel</button>
        <button className="btn btn-primary" onClick={onConfirm}>Set date</button>
      </div>
    </div>
  );
}
