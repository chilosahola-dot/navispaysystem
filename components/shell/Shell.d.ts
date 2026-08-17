import * as React from 'react';

export interface NavSubItem { label: string; href?: string; active?: boolean; }
export interface NavItem { label: string; icon: string; active?: boolean; count?: number; sub?: NavSubItem[]; onClick?: () => void; }
export interface NavGroup { label: string; items: NavItem[]; }
export interface SidebarProps {
  groups: NavGroup[];
  user?: { initials: string; name: string; email: string };
  onCollapse?: () => void;
}
/**
 * @startingPoint section="App Shell" subtitle="Sidebar, header, stats, table, dashboard -- light and dark" viewport="1400x800"
 */
export declare function Sidebar(props: SidebarProps): JSX.Element;

export interface Crumb { label: string; href?: string; }
export interface HeaderProps {
  crumbs: Crumb[];
  onSearch?: React.ChangeEventHandler<HTMLInputElement>;
  notifications?: number;
}
export declare function Header(props: HeaderProps): JSX.Element;

export interface SparkPoint { x: number; y: number; }
export interface StatCardProps {
  icon?: string;
  label: string;
  value: string;
  delta?: string;
  deltaDown?: boolean;
  points?: SparkPoint[];
}
export declare function StatCard(props: StatCardProps): JSX.Element;

export interface PlatformCardProps {
  title: React.ReactNode;
  tools?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function PlatformCard(props: PlatformCardProps): JSX.Element;

export interface QueueRow { name: string; amount: string; reason: string; age: string; }
export declare function QueueList(props: { rows: QueueRow[]; onRowClick?: (row: QueueRow) => void }): JSX.Element;

export interface AppShellProps {
  dark?: boolean;
  sidebar: React.ReactNode;
  header: React.ReactNode;
  children?: React.ReactNode;
}
export declare function AppShell(props: AppShellProps): JSX.Element;
