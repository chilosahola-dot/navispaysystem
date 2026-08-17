import * as React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
}
/**
 * @startingPoint section="Forms" subtitle="Checkbox, radio and switch" viewport="700x260"
 */
export declare function Checkbox(props: CheckboxProps): JSX.Element;

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  children?: React.ReactNode;
}
export declare function Radio(props: RadioProps): JSX.Element;

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
}
export declare function Switch(props: SwitchProps): JSX.Element;
