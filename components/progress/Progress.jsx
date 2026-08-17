import React from 'react';

/** Reports position in a known sequence. Not interchangeable with ProgressBar. */
export function Stepper({ steps, current }) {
  return (
    <div className="stepper">
      {steps.map((s, i) => {
        const state = i < current ? 'is-done' : i === current ? 'is-current' : '';
        return (
          <div className={`step ${state}`} key={s}>
            <div className="conn" />
            <div className="node"><span className="dot" /><span className="cap">{s}</span></div>
          </div>
        );
      })}
    </div>
  );
}

/** Reports completion of a single task. */
export function ProgressBar({ value, indeterminate, tone, knob }) {
  const cls = ['prog', tone === 'teal' ? 'prog-teal' : '', indeterminate ? 'prog-indet' : '', knob ? 'prog-knob' : ''].filter(Boolean).join(' ');
  if (knob) {
    return <div className={cls}><i style={{ width: `${value}%` }} /><span className="knob" style={{ left: `${value}%` }} /></div>;
  }
  return <div className={cls}><i style={indeterminate ? undefined : { width: `${value}%` }} /></div>;
}
