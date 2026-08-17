Three floating surfaces sharing one visual language (white, hairline border, square, the single floating shadow) but different jobs: Menu holds actions, Popover holds content worth reading at length, Tooltip holds one short line and nothing interactive.

```jsx
<Menu label="Payment" items={[{icon:'arrow-up-right',label:'Open in ledger'},{separator:true},{icon:'trash',label:'Cancel payment',danger:true}]} />
<Tooltip label="Opens downward"><Icon name="info" /></Tooltip>
```

If tooltip content is worth reading twice, it should be a Popover instead -- tooltips vanish and can't be selected.