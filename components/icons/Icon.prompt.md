Renders one outline icon from NavisPay's 24x24 stroke icon set. Use for any icon in the product -- never hand-draw a substitute.

```jsx
<Icon name="ledger" size={18} />
<button className="btn-icon" aria-label="Refresh"><Icon name="refresh" /></button>
```

One outline family, stroke-width 1.75, round caps/joins, no fill. Sizes in use: 16, 18, 20 (default, pairs with body text), 24. Icon-only controls need an aria-label on the wrapping button -- the Icon itself carries no label. See ICON_NAMES for the full list of 27 names.