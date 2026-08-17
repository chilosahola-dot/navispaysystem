Three distinct jobs that are easy to confuse: a Pill reports a status and is read-only; a Chip is an interactive filter and toggles; a Badge/BadgeAnchor is a count or live marker attached to something else.

```jsx
<Pill status="settled">Settled</Pill>
<Pill status="review" solid>In review</Pill>
<Chip selected onClick={toggle}>EUR</Chip>
<BadgeAnchor count={7}><Icon name="bell" size={24} /></BadgeAnchor>
<Badge>Live network</Badge>
```

Only the Pill is set in mono; only the Chip is clickable; only the Badge overlaps its anchor. Counts cap at 99+. The pulsing Badge dot is for live system state only, never a notification count.