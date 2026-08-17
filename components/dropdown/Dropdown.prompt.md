A filter label paired with a dropdown trigger. The dropdown itself is a surface (white fill, hairline border, square corners) at the same height as a default button, so filter bars align without adjustment. Pair its open state with a Menu from the overlay group, positioned flush beneath with no gap.

```jsx
<Filter label="Corridor"><Dropdown value="EUR -> SGD" /></Filter>
<Filter label="Status" orientation="top"><Dropdown open placeholder="All statuses" /></Filter>
```