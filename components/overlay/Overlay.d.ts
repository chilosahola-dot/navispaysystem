import * as React from 'react';

export interface MenuItem {
  label?: string;
  icon?: string;
  selected?: boolean;
  danger?: boolean;
  disabled?: boolean;
  separator?: boolean;
  onClick?: () => void;
}
/**
 * @startingPoint section="Overlay" subtitle="Menu, popover, tooltip" viewport="700x340"
 */
export declare function Menu(props: { label?: string; items: MenuItem[] }): JSX.Element;

export interface PopoverProps {
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}
export declare function Popover(props: PopoverProps): JSX.Element;

export interface TooltipProps {
  position?: 'down' | 'up' | 'left' | 'right';
  label: string;
  children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
