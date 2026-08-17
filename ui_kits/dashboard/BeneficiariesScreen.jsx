import React from 'react';
import { PlatformCard } from '../../components/shell/Shell.jsx';
import { Table } from '../../components/table/Table.jsx';
import { Avatar } from '../../components/avatars/Avatar.jsx';
import { Button, IconButton } from '../../components/buttons/Button.jsx';
import { Chip } from '../../components/pills/Pill.jsx';

const BENEFICIARIES = [
  { id: 1, name: 'Meridian Freight Pte Ltd', init: 'MF', country: 'Singapore', corridor: 'EUR → SGD', last: '2 days ago' },
  { id: 2, name: 'Kestrel Logistics BV', init: 'KL', country: 'Netherlands', corridor: 'EUR → USD', last: '5 days ago' },
  { id: 3, name: 'Nordwind Agri GmbH', init: 'NA', country: 'Germany', corridor: 'EUR → PHP', last: '1 week ago' },
  { id: 4, name: 'Saltire Holdings Ltd', init: 'SH', country: 'United Kingdom', corridor: 'GBP → SGD', last: '3 weeks ago' },
];

export function BeneficiariesScreen({ onSendPayment }) {
  const [currency, setCurrency] = React.useState('EUR');
  return (
    <React.Fragment>
      <div className="page-head">
        <div>
          <h3 className="page-title">Beneficiaries</h3>
          <p className="page-sub">Saved payees across every corridor this account has settled through.</p>
        </div>
        <Button variant="cta" icon="plus" iconPosition="leading">Add beneficiary</Button>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        {['EUR', 'USD', 'GBP', 'SGD'].map((c) => (
          <Chip key={c} selected={c === currency} onClick={() => setCurrency(c)}>{c}</Chip>
        ))}
      </div>

      <PlatformCard title="All beneficiaries">
        <Table rows={BENEFICIARIES} columns={[
          { key: 'name', label: 'Name', render: (r) => <span className="cell-in"><Avatar size={32} initials={r.init} />{r.name}</span> },
          { key: 'country', label: 'Country' },
          { key: 'corridor', label: 'Corridor' },
          { key: 'last', label: 'Last payment' },
          { key: 'actions', label: '', width: 52, render: () => <IconButton icon="dots" variant="quiet" label="More" style={{ width: 28, height: 28, borderColor: 'transparent' }} /> },
        ]} />
      </PlatformCard>
    </React.Fragment>
  );
}
