import * as React from 'react';

export interface FilterProps {
  label: string;
  orientation?: 'inline' | 'top';
  children?: React.ReactNode;
}
/**
 * @startingPoint section="Forms" subtitle="Filter, dropdown trigger and combobox" viewport="700x180"
 */
export declare function Filter(props: FilterProps): JSX.Element;

export interface DropdownProps {
  value?: string;
  open?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  placeholder?: string;
}
export declare function Dropdown(props: DropdownProps): JSX.Element;
