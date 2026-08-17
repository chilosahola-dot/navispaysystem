import * as React from 'react';

export interface StepperProps { steps: string[]; current: number; }
/**
 * @startingPoint section="Progress" subtitle="Stepper and linear progress" viewport="700x220"
 */
export declare function Stepper(props: StepperProps): JSX.Element;

export interface ProgressBarProps {
  value?: number;
  indeterminate?: boolean;
  tone?: 'navy' | 'teal';
  /** Scrub-control variant with a draggable knob. Never on a read-only bar. */
  knob?: boolean;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
