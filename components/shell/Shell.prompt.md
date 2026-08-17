The product page scaffold: a light sidebar down the left, a header with breadcrumb + search, and a quiet canvas beneath. One set of markup renders both bands -- pass `dark` to AppShell for the navy variant, which re-points tokens rather than restyling anything.

```jsx
<AppShell
  sidebar={<Sidebar groups={navGroups} user={{initials:'AO',name:'Ada Okonjo',email:'ada@meridian.co'}} />}
  header={<Header crumbs={[{label:'Operate'},{label:'Ledger'}]} notifications={7} />}
>
  <StatCard label="Settled today" value="$4,812,900" delta="+12% vs. plan" points={sparkPoints} />
  <PlatformCard title="Recent payments" footer={<Pagination .../>}><Table .../></PlatformCard>
</AppShell>
```

Sidebar collapses to 64px (icons + active marker only) in production; sub-navigation shows only under its open parent, never as a permanently expanded tree. Color appears only where it carries meaning: the active nav item, a status, a figure that moved.