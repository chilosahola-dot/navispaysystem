import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "primary" */
  variant?: 'primary' | 'cta' | 'accent' | 'ghost' | 'ghost-light' | 'text';
  size?: 'default' | 'lg';
  loading?: boolean;
  /** Icon name from the Icon set, shown alongside the label. */
  icon?: string;
  iconPosition?: 'leading' | 'trailing';
}
/**
 * @startingPoint section="Buttons" subtitle="6 variants, 2 sizes, loading & disabled states" viewport="700x420"
 */
export declare function Button(props: ButtonProps): JSX.Element;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  size?: 'default' | 'lg';
  variant?: 'ghost' | 'quiet';
  /** Required -- icon-only controls must have an accessible label. */
  label: string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;

export interface SegmentedOption { value: string; label: string; }
export interface ButtonGroupProps {
  options: SegmentedOption[];
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}
export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;
export declare function SegmentedControl(props: ButtonGroupProps): JSX.Element;
