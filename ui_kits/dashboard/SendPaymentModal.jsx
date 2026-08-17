import React from 'react';
import { Button } from '../../components/buttons/Button.jsx';
import { Stepper } from '../../components/progress/Progress.jsx';
import { TextField } from '../../components/forms/Field.jsx';
import { Icon } from '../../components/icons/Icon.jsx';

const STEPS = ['Recipient', 'Amount & route', 'Confirm'];

/** 3-step send-payment flow, reusing the base Modal chrome (scrim, close, right-aligned actions). */
export function SendPaymentModal({ onClose }) {
  const [step, setStep] = React.useState(0);
  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => (step === 0 ? onClose() : setStep((s) => s - 1));

  return (
    <div className="scrim">
      <div className="modal">
        <div className="modal-close"><button aria-label="Close" onClick={onClose}><Icon name="x" /></button></div>
        <div className="modal-body">
          <h3 className="modal-title">Send a payment</h3>
          <Stepper steps={STEPS} current={step} />

          {step === 0 && (
            <React.Fragment>
              <TextField label="Beneficiary" placeholder="Search or add beneficiary" icon="search" />
              <TextField label="Reference" placeholder="What is this payment for?" />
            </React.Fragment>
          )}
          {step === 1 && (
            <React.Fragment>
              <TextField label="Amount (EUR)" placeholder="412,000.00" />
              <div className="stat" style={{ borderLeft: '2px solid var(--nv-teal)' }}>
                <div className="k">Estimated settlement</div>
                <div className="v" style={{ fontSize: 20 }}>Under 8 seconds</div>
              </div>
            </React.Fragment>
          )}
          {step === 2 && (
            <p className="modal-text">You are sending <strong style={{ color: 'var(--nv-text)' }}>€412,000.00</strong> to Meridian Freight Pte Ltd via the EUR → SGD corridor. Settlement is final and cannot be recalled once the ledger clears.</p>
          )}

          <div className="modal-actions">
            <Button variant="ghost" onClick={back}>{step === 0 ? 'Cancel' : 'Back'}</Button>
            {step < STEPS.length - 1
              ? <Button variant="cta" onClick={next}>Continue</Button>
              : <Button variant="cta" onClick={onClose}>Confirm and send</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}
