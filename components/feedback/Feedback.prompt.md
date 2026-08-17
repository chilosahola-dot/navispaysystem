Modal carries a task (heading, explanation, form, two-button footer). AlertDialog carries an undeferrable decision -- narrower, no close X. Toast is a transient bottom-left notice. Alert is a persistent inline notice tinted at 8% with a 2px semantic rule.

```jsx
<Modal title="Confirm this payment" actions={<><Button variant="ghost">Back</Button><Button variant="cta">Confirm and send</Button></>}>
  <p className="modal-text">You are sending <strong>&euro;412,000.00</strong> to Meridian Freight.</p>
</Modal>
<Toast tone="error" onDismiss={close}>Routing failed -- no compliant path.</Toast>
<Alert tone="warning" title="Compliance review pending.">Payments above &euro;250,000 are held until a reviewer signs off.</Alert>
```

Destructive confirmation uses `--nv-error` as the button fill -- the only place a semantic color becomes an action fill -- with the safe choice left as a text button.