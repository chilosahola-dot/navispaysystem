Stepper reports position in a known sequence; ProgressBar reports completion of one task -- a multi-step flow with a progress bar tells the user nothing about what's next.

```jsx
<Stepper steps={['Initiate','Screen','Route','Settle','Reconcile']} current={2} />
<ProgressBar value={68} />
<ProgressBar indeterminate />
```