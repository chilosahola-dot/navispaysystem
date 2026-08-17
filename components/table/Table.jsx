import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** The densest surface in the product. Headers mono uppercase; amounts mono, tabular, right-aligned. */
export function Table({ columns, rows, rowKey = 'id' }) {
  return (
    <table className="tbl">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key} style={{ textAlign: c.align, width: c.width }}>
              {c.sortable ? <span className="th-in">{c.label}<Icon name="sort" size={16} /></span> : c.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[rowKey]}>
            {columns.map((c) => (
              <td key={c.key} className={c.align === 'right' ? 'num' : undefined}>
                {c.render ? c.render(row) : row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
