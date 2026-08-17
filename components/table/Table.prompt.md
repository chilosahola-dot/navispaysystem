Generic data table. Column headers are mono 9px uppercase; cells are Archivo 14px; amounts are mono, tabular and right-aligned via `align: 'right'`.

```jsx
<Table
  columns={[
    { key: 'ref', label: 'Reference' },
    { key: 'status', label: 'Status', render: r => <Pill status={r.status}>{r.statusLabel}</Pill> },
    { key: 'amount', label: 'Amount', align: 'right' },
  ]}
  rows={payments}
/>
```

Zebra striping is 2% navy on odd rows -- visible on a bright screen, invisible on a projector, which is the intended trade.