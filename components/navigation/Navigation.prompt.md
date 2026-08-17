Tabs for in-page sections, breadcrumbs for hierarchy, pagination for long lists.

```jsx
<Tabs items={[{value:'overview',label:'Overview'},{value:'payments',label:'Payments'}]} value={tab} onChange={setTab} />
<Breadcrumbs items={[{label:'Ledger',href:'/ledger'},{label:'EUR -> SGD'}]} />
<Pagination page={1} pageCount={52} total={1284} pageSize={25} onChange={setPage} />
```

Tab labels are sentence case, weight 600, and never wrap -- a set that would wrap belongs in a Dropdown instead. Page numbers are tabular so the control doesn't reflow as digits change.