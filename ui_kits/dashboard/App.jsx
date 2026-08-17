import React from 'react';
import { AppShell, Sidebar, Header, } from '../../components/shell/Shell.jsx';
import { Switch } from '../../components/forms/Selection.jsx';
import { SendPaymentModal } from './SendPaymentModal.jsx';
import { LedgerScreen } from './LedgerScreen.jsx';
import { BeneficiariesScreen } from './BeneficiariesScreen.jsx';

const NAV_GROUPS = [
  { label: 'Operate', items: [
    { label: 'Ledger', icon: 'ledger', screen: 'ledger', count: 24, sub: [
      { label: 'All payments', active: true }, { label: 'In flight' }, { label: 'In review' }, { label: 'Failed' },
    ]},
    { label: 'Balances', icon: 'wallet', screen: 'balances' },
    { label: 'Corridors', icon: 'globe', screen: 'corridors' },
  ]},
  { label: 'Manage', items: [
    { label: 'Beneficiaries', icon: 'user', screen: 'beneficiaries' },
    { label: 'Settings', icon: 'settings', screen: 'settings' },
    { label: 'Support', icon: 'info', screen: 'support' },
  ]},
];

const CRUMBS = {
  ledger: [{ label: 'Operate' }, { label: 'Ledger' }],
  beneficiaries: [{ label: 'Manage' }, { label: 'Beneficiaries' }],
  balances: [{ label: 'Operate' }, { label: 'Balances' }],
  corridors: [{ label: 'Operate' }, { label: 'Corridors' }],
  settings: [{ label: 'Manage' }, { label: 'Settings' }],
  support: [{ label: 'Manage' }, { label: 'Support' }],
};

/** Click-through demo of the NavisPay operator console: Ledger, Beneficiaries and a send-payment flow. */
export function App() {
  const [screen, setScreen] = React.useState('ledger');
  const [dark, setDark] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const sidebarGroups = NAV_GROUPS.map((g) => ({
    label: g.label,
    items: g.items.map((it) => ({
      label: it.label, icon: it.icon, count: it.count, sub: it.sub,
      active: it.screen === screen, onClick: () => setScreen(it.screen),
    })),
  }));

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 16px', background: 'var(--nv-bg)' }}>
        <Switch checked={dark} onChange={setDark}>Dark band</Switch>
      </div>
      <AppShell
        dark={dark}
        sidebar={<Sidebar groups={sidebarGroups} user={{ initials: 'AO', name: 'Ada Okonjo', email: 'ada@meridian.co' }} />}
        header={<Header crumbs={CRUMBS[screen]} notifications={7} />}
      >
        {screen === 'ledger' && <LedgerScreen onSendPayment={() => setModalOpen(true)} />}
        {screen === 'beneficiaries' && <BeneficiariesScreen onSendPayment={() => setModalOpen(true)} />}
        {['balances', 'corridors', 'settings', 'support'].includes(screen) && (
          <div style={{ padding: 40, textAlign: 'center', color: 'var(--nv-muted)' }}>This screen is out of scope for the UI kit demo.</div>
        )}
      </AppShell>
      {modalOpen && <SendPaymentModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
