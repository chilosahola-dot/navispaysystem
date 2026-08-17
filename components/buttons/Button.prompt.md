Buttons and button-shaped controls: the primary Button, an icon-only IconButton, and two toggle-group shapes.

```jsx
<Button variant="cta" icon="arrow-right">Send payment</Button>
<Button variant="ghost">Cancel</Button>
<IconButton icon="dots" variant="quiet" label="More" />
<SegmentedControl options={[{value:'1d',label:'Today'},{value:'7d',label:'7 days'}]} value="1d" onChange={setRange} />
```

Variants: primary (default action), cta (the one teal-hover action per view), accent (dark-band CTA), ghost / ghost-light (secondary, light vs. dark band), text (lowest emphasis, no border). Labels are sentence case with a verb, never uppercase or a bare noun. `loading` swaps the label for a spinner without resizing the button. ButtonGroup renders the bordered two-option toggle (".dual"); SegmentedControl renders the filled-surface multi-option switch used on dashboard toolbars (".seg").