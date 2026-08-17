import * as React from 'react';

export interface PillProps {
  status: 'settled' | 'in-flight' | 'scheduled' | 'review' | 'failed' | 'draft';
  /** Solid fill for dense tables where a tint reads as noise. */
  solid?: boolean;
  /** Sentence-case, larger variant for prose contexts. */
  prose?: boolean;
  children?: React.ReactNode;
}
/**
 * @startingPoint section="Pills & Badges" subtitle="Status pills, chips and badges" viewport="700x260"
 */
export declare function Pill(props: PillProps): JSX.Element;

export interface ChipProps {
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  removable?: boolean;
  children?: React.ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;

export interface BadgeProps { children?: React.ReactNode; }
export declare function Badge(props: BadgeProps): JSX.Element;

export interface BadgeAnchorProps {
  count?: number;
  mark?: boolean;
  children?: React.ReactNode;
}
export declare function BadgeAnchor(props: BadgeAnchorProps): JSX.Element;
export declare const PILL_STATUSES: string[];
