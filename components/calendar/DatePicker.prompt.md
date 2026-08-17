Value-date picker: navy header with the current selection, month selector, 7-column grid, action row.

```jsx
<DatePicker
  selectedLabel="Tue, 18 Aug"
  monthLabel="August 2026"
  days={days}
  onSelect={handleSelect}
  onConfirm={confirm}
/>
```

Selection is a filled navy square; today is a teal-dark outline; a day carrying a payment shows a teal dot beneath the numeral. Weekends are not dimmed.