A navigating text link. For an action that doesn't navigate, use Button variant="text" instead -- links fire on Enter, buttons on Space too.

```jsx
<Link href="/ledger">View the ledger</Link>
<p>Read the <Link tone="ink" href="/docs">API reference</Link> for details.</p>
```

accent is the default for standalone CTAs; ink is for links inside a paragraph, where a teal run would be noisy; quiet belongs in dense UI chrome and picks up its rule only on hover.