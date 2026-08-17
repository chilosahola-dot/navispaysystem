Checkbox, radio and switch -- all three select in `--nv-teal-dark`. A switch applies immediately; a checkbox waits for a submit. If a toggle needs confirming, it's a checkbox, never a switch that silently reverts.

```jsx
<Checkbox checked={v} onChange={setV}>Unchecked</Checkbox>
<Radio checked={mode==='same-day'} onChange={() => setMode('same-day')}>Same-day</Radio>
<Switch checked={auto} onChange={setAuto}>Auto-convert</Switch>
```

Hit area should be 44px in production even though the drawn control is 18px -- pad the wrapping label, not the control itself.