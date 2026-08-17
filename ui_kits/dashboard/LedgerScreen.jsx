import React from 'react';
import { StatCard, PlatformCard, QueueList } from '../../components/shell/Shell.jsx';
import { Table } from '../../components/table/Table.jsx';
import { Pill } from '../../components/pills/Pill.jsx';
import { Avatar } from '../../components/avatars/Avatar.jsx';
import { Button } from '../../components/buttons/Button.jsx';
import { SegmentedControl } from '../../components/buttons/Button.jsx';
import { Dropdown, Filter } from '../../components/dropdown/Dropdown.jsx';
import { Pagination } from '../../components/navigation/Navigation.jsx';

const ROWS = [
  { id: 1, ref: 'PMT-40921', name: 'Meridian Freight', init: 'MF', tone: undefined, corridor: 'EUR → SGD', status: 'settled', amount: '412,000.00' },
  { id: 2, ref: 'PMT-40922', name: 'Kestrel Logistics', init: 'KL', tone: 'teal', corridor: 'EUR → USD', status: 'in-flight', amount: '86,450.00' },
  { id: 3, ref: 'PMT-40923', name: 'Nordwind Agri', init: 'NA', tone: 'quiet', corridor: 'EUR → PHP', status: 'review', amount: '1,204,900.00' },
  { id: 4, ref: 'PMT-40924', name: 'Saltire Holdings', init: 'SH', tone: undefined, corridor: 'GBP → SGD', status: 'failed', amount: '9,300.00' },
];
const SPARK_UP = [{x:0,y:26},{x:15,y:24},{x:30,y:27},{x:45,y:18},{x:60,y:20},{x:75,y:12},{x:90,y:15},{x:105,y:7},{x:120,y:4}];
const SPARK_DOWN = [{x:0,y:28},{x:15,y:27},{x:30,y:29},{x:45,y:24},{x:60,y:26},{x:75,y:21},{x:90,y:22},{x:105,y:14},{x:120,y:9}];

export function LedgerScreen({ onSendPayment }) {
  const [range, setRange] = React.useState('today');
  const [page, setPage] = React.useState(1);

  return (
    <React.Fragment>
      <div className="page-head">
        <div>
          <h3 className="page-title">Ledger <span className="ref">EUR → SGD</span></h3>
          <p className="page-sub">Every payment routed today, with its settlement state and reconciliation record.</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="ghost" icon="download" iconPosition="leading">Export</Button>
          <Button variant="cta" onClick={onSendPayment}>Send payment</Button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <SegmentedControl value={range} onChange={setRange} options={[
          { value: 'today', label: 'Today' }, { value: '7d', label: '7 days' }, { value: '30d', label: '30 days' },
        ]} />
        <Filter label=""><Dropdown placeholder="All statuses" /></Filter>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 20 }}>
        <StatCard icon="check" label="Settled today" value="$4,812,900" delta="+12% vs. plan" points={SPARK_UP} />
        <StatCard icon="refresh" label="Avg. time" value="6.4s" delta="−0.8s vs. last week" points={SPARK_UP} />
        <StatCard icon="alert" label="In review" value="3" delta="+2 since 09:00" deltaDown points={SPARK_DOWN} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 288px', gap: 20, alignItems: 'start' }}>
        <PlatformCard
          title="Recent payments"
          footer={<Pagination page={page} pageCount={3} total={128} pageSize={4} onChange={setPage} />}
        >
          <Table rows={ROWS} columns={[
            { key: 'ref', label: 'Reference', render: (r) => <code>{r.ref}</code> },
            { key: 'name', label: 'Beneficiary', render: (r) => <span className="cell-in"><Avatar size={32} initials={r.init} tone={r.tone} />{r.name}</span> },
            { key: 'corridor', label: 'Corridor' },
            { key: 'status', label: 'Status', render: (r) => <Pill status={r.status}>{r.status.replace('-', ' ')}</Pill> },
            { key: 'amount', label: 'Amount', align: 'right' },
          ]} />
        </PlatformCard>
        <PlatformCard title="Needs attention" tools={<span className="pill pill-review" style={{ height: 24, fontSize: 9 }}>3</span>}>
          <QueueList rows={[
            { name: 'Nordwind Agri', amount: '1,204,900.00', reason: 'Compliance review', age: '18m' },
            { name: 'Halden Marine', amount: '640,000.00', reason: 'Threshold hold', age: '42m' },
            { name: 'Saltire Holdings', amount: '9,300.00', reason: 'Account rejected', age: '1h 06m' },
          ]} />
        </PlatformCard>
      </div>
    </React.Fragment>
  );
}
