# NavisPay dashboard -- UI kit

A click-through recreation of the NavisPay operator console: the cross-border payments dashboard treasury and ops teams use to send, track and reconcile payments.

Screens:
- **Ledger** -- today's payments, settlement stats, and the review queue. The default landing screen.
- **Beneficiaries** -- saved payees with corridor and last-payment context.
- **Send payment** -- a 3-step modal flow (recipient, amount & route, confirm) opened from either screen.

Built entirely from the primitives in `../../components/`. Toggle the sidebar's theme switch to see the dark-band variant of the same shell markup.
